'use client';

import { useCallback, useState } from 'react';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';
import { carouselPhotos, galleryImages } from '@/data/bouquets';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  // The carousel hands back the photo's index, which maps 1:1 onto galleryImages.
  const handlePhotoClick = useCallback((_photo, index) => setOpenIndex(index), []);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setOpenIndex((i) => (i + 1) % galleryImages.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blush-50/40 to-white py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-blush-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="A Closer Look"
          subtitle="Handmade details, soft colours and little moments from the craft table."
        />

        <Reveal className="mt-10">
          <p className="text-center text-xs tracking-[0.18em] text-blush-500 uppercase">
            Drag to spin · tap a photo to open it
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <ThreeDPhotoCarousel
            photos={carouselPhotos}
            onPhotoClick={handlePhotoClick}
          />
        </Reveal>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
