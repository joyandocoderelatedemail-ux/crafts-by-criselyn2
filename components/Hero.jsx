import Image from 'next/image';
import Button from '@/components/Button';
import { site } from '@/data/site';
import { ArrowRightIcon, PetalShape, SparkleIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-shell to-white pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Soft pink decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-drift absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-200/40 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 top-40 h-96 w-96 rounded-full bg-blush-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cream/80 blur-3xl" />

        <PetalShape className="animate-float-slow absolute left-[6%] top-[22%] hidden h-10 w-10 rotate-12 text-blush-200/80 lg:block" />
        <PetalShape
          className="animate-drift absolute right-[8%] bottom-[14%] hidden h-8 w-8 -rotate-45 text-blush-300/70 lg:block"
          style={{ animationDelay: '2s' }}
        />
        <PetalShape
          className="animate-float-slow absolute left-[46%] top-[8%] hidden h-6 w-6 rotate-45 text-blush-200/60 xl:block"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <span
            className="hero-in inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-4 py-2 text-xs font-medium tracking-[0.12em] text-blush-600 uppercase backdrop-blur-sm"
            style={{ animationDelay: '0.05s' }}
          >
            <SparkleIcon className="h-3.5 w-3.5" />
            Handmade Crochet Bouquets
          </span>

          <h1
            className="hero-in mt-7 text-[2.5rem] leading-[1.1] text-ink sm:text-[3.5rem] lg:text-[3.35rem] xl:text-[3.7rem]"
            style={{ animationDelay: '0.18s' }}
          >
            Handmade with Love,
            <br />
            <span className="italic text-blush-500">Crafted to Last.</span>
          </h1>

          <p
            className="hero-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0"
            style={{ animationDelay: '0.32s' }}
          >
            Beautiful crochet bouquets handmade with care — perfect for birthdays,
            anniversaries, gifts, special occasions, or simply showing someone you care.
          </p>

          <div
            className="hero-in mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: '0.46s' }}
          >
            <Button href="#bouquets" size="lg">
              Browse Bouquets
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={site.facebook} variant="outline" size="lg" external>
              Order Now
            </Button>
          </div>
        </div>

        {/* Right: hero photograph */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="animate-float-slow absolute -right-6 -top-6 h-40 w-40 rounded-full bg-blush-200/50 blur-2xl sm:h-56 sm:w-56"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-cream blur-2xl sm:h-52 sm:w-52"
          />

          <div className="hero-image-in relative mx-auto max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-blush-50 shadow-lift ring-1 ring-blush-100">
              <Image
                src="/images/bouquet-pink-butterfly.jpg"
                alt="Handmade bouquet of pale pink roses in a white wrap decorated with butterflies"
                width={720}
                height={660}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 92vw, 45vw"
                className="h-[22rem] w-full object-cover object-center sm:h-[28rem] lg:h-[32rem]"
              />
            </div>

            {/* Floating caption card */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft ring-1 ring-blush-100 backdrop-blur-sm sm:left-6 sm:px-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                <SparkleIcon className="h-4 w-4" />
              </span>
              <span className="text-xs leading-tight text-ink-soft">
                <span className="block font-medium text-ink">Made by hand</span>
                Stitched with care, one flower at a time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
