import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { bouquets } from '@/data/bouquets';
import { site } from '@/data/site';
import { ArrowRightIcon } from '@/components/icons';

export default function FeaturedBouquets() {
  return (
    <section id="bouquets" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Our Collection"
          title="Our Handmade Bouquets"
          subtitle="Little bundles of happiness, made stitch by stitch."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {bouquets.map((bouquet, i) => (
            <Reveal
              key={bouquet.id}
              as="article"
              delay={i * 110}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-blush-100 bg-white shadow-soft transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blush-200 hover:shadow-lift"
            >
              <div className="relative overflow-hidden bg-blush-50">
                <Image
                  src={bouquet.src}
                  alt={bouquet.alt}
                  width={bouquet.width}
                  height={bouquet.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-blush-700/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl text-ink">{bouquet.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {bouquet.description}
                </p>

                <p className="mt-4 text-sm font-medium text-blush-600">
                  {bouquet.price ?? 'Message us for price'}
                </p>

                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-blush-200 px-5 py-2.5 text-sm font-medium text-blush-600 transition-all duration-300 hover:bg-blush-500 hover:text-white"
                >
                  Order Now
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  <span className="sr-only">— {bouquet.name}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
