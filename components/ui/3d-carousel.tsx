"use client"

import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

export type CarouselPhoto = {
  /** Image shown on the rotating face. Use a small thumbnail — every face loads at once. */
  src: string
  /** Full-size image for the expanded view. Falls back to `src`. */
  full?: string
  alt: string
  name?: string
}

/** framer-motion types a cubic-bezier as a 4-tuple, not number[]. */
type Bezier = [number, number, number, number]

const duration = 0.15
const easeOutExpo: Bezier = [0.32, 0.72, 0, 1]
const easeOutSoft: Bezier = [0.25, 0.1, 0.25, 1]
const transition = { duration, ease: easeOutExpo, filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: easeOutExpo }

/** Keeps each face a comfortable width however many photos are supplied. */
function getCylinderWidth(faceCount: number, isSmall: boolean) {
  const minFaceWidth = isSmall ? 118 : 128
  const base = isSmall ? 1100 : 1800
  return Math.max(base, faceCount * minFaceWidth)
}

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (photo: CarouselPhoto, index: number) => void
    controls: ReturnType<typeof useAnimation>
    cards: CarouselPhoto[]
    isCarouselActive: boolean
  }) => {
    // initializeWithValue: false keeps the server and first client render in sync.
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)", {
      initializeWithValue: false,
    })
    const faceCount = cards.length
    const cylinderWidth = getCylinderWidth(faceCount, isScreenSizeSm)
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((photo, i) => (
            <motion.div
              key={`key-${photo.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(photo, i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.name ?? photo.alt} larger`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleClick(photo, i)
                }
              }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                layoutId={`img-${photo.src}`}
                className="pointer-events-none aspect-[3/4] w-full rounded-xl object-cover shadow-soft ring-1 ring-blush-100"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

export type ThreeDPhotoCarouselProps = {
  photos: CarouselPhoto[]
  /**
   * Called instead of the built-in overlay when a face is clicked — lets the
   * page open its own lightbox (with prev/next and keyboard support).
   */
  onPhotoClick?: (photo: CarouselPhoto, index: number) => void
  className?: string
}

function ThreeDPhotoCarousel({
  photos,
  onPhotoClick,
  className = "",
}: ThreeDPhotoCarouselProps) {
  const [activeImg, setActiveImg] = useState<CarouselPhoto | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = useCallback(
    (photo: CarouselPhoto, index: number) => {
      if (onPhotoClick) {
        onPhotoClick(photo, index)
        return
      }
      setActiveImg(photo)
      setIsCarouselActive(false)
      controls.stop()
    },
    [onPhotoClick, controls]
  )

  const handleClose = useCallback(() => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }, [])

  // Escape closes the built-in overlay.
  useEffect(() => {
    if (!activeImg) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeImg, handleClose])

  if (photos.length === 0) return null

  return (
    <motion.div layout className={`relative ${className}`}>
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg.src}`}
            layout="position"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={activeImg.name ?? activeImg.alt}
            className="fixed inset-0 z-50 m-5 flex items-center justify-center rounded-3xl bg-ink/60 backdrop-blur-md md:m-24 lg:mx-[16rem]"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg.src}`}
              src={activeImg.full ?? activeImg.src}
              alt={activeImg.alt}
              className="max-h-full max-w-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: easeOutSoft,
              }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[360px] w-full overflow-hidden sm:h-[500px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={photos}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }
