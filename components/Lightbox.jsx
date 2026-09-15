'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@/components/icons';

/**
 * Accessible image lightbox: Escape closes, arrow keys move between photos,
 * the backdrop is clickable, and focus is moved into the dialog on open.
 */
export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const image = images[index];
  const hasSiblings = images.length > 1;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasSiblings) onPrev();
      if (e.key === 'ArrowRight' && hasSiblings) onNext();
    },
    [onClose, onPrev, onNext, hasSiblings],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${image.name} — enlarged photo`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-shell/92 p-4 backdrop-blur-xl sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft ring-1 ring-blush-100 transition-all duration-300 hover:scale-105 hover:bg-white sm:right-6 sm:top-6"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {hasSiblings && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft ring-1 ring-blush-100 transition-all duration-300 hover:scale-105 hover:bg-white sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft ring-1 ring-blush-100 transition-all duration-300 hover:scale-105 hover:bg-white sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      )}

      <figure
        onClick={(e) => e.stopPropagation()}
        className="lightbox-in flex max-h-full w-full max-w-3xl flex-col items-center"
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 92vw, 720px"
          // Eager: the lightbox only mounts once the visitor has asked for this
          // photo, so there is nothing to defer.
          loading="eager"
          fetchPriority="high"
          // w-full (not w-auto) keeps the box measurable before the image
          // decodes — an auto-width, not-yet-loaded image lays out at 0x0.
          className="h-auto max-h-[74vh] w-full max-w-full object-contain drop-shadow-[0_20px_36px_rgba(217,115,141,0.28)]"
        />
        <figcaption className="mt-4 text-center text-sm text-ink-soft">
          <span className="font-serif text-lg text-ink">{image.name}</span>
          {hasSiblings && (
            <span className="mt-1 block text-xs tracking-[0.18em] text-blush-500 uppercase">
              {index + 1} of {images.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
