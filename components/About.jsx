import Image from 'next/image';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, PetalShape } from '@/components/icons';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Photograph */}
        <Reveal className="relative order-1 lg:order-none">
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-blush-100 blur-2xl sm:h-40 sm:w-40"
          />
          <PetalShape
            className="animate-float-slow absolute -right-2 -top-4 hidden h-10 w-10 rotate-12 text-blush-200 lg:block"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-blush-50 shadow-soft ring-1 ring-blush-100">
            <Image
              src="/images/bouquet-sunflower-tulips.jpg"
              alt="Handmade sunflower and pastel tulip bundle resting in a glass jar beside warm string lights"
              width={720}
              height={840}
              loading="lazy"
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="h-[24rem] w-full object-cover object-center sm:h-[30rem]"
            />
          </div>

          <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-3.5 text-center shadow-soft ring-1 ring-blush-100 sm:right-8">
            <span className="block font-serif text-2xl text-blush-500">Handmade</span>
            <span className="text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase">
              Made to order
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal
            as="span"
            className="text-xs font-medium tracking-[0.2em] text-blush-500 uppercase"
          >
            About Crafts by Criselyn
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Crafted by hand.
            <br />
            <span className="italic text-blush-500">Made with heart.</span>
          </Reveal>

          <Reveal delay={150} className="mt-6 h-px w-16 bg-blush-300" aria-hidden="true" />

          <Reveal as="p" delay={200} className="mt-6 text-base leading-relaxed text-ink-soft">
            Crafts by Criselyn creates handmade crochet bouquets designed to turn special
            moments into lasting memories.
          </Reveal>
          <Reveal as="p" delay={280} className="mt-4 text-base leading-relaxed text-ink-soft">
            Unlike traditional flowers, crochet bouquets can be treasured for a long time —
            making them a thoughtful and unique gift for someone special.
          </Reveal>

          <Reveal delay={360} className="mt-9">
            <Button href="#bouquets" size="lg">
              Discover Our Bouquets
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
