import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';
import { ArrowRightIcon, FacebookIcon, PetalShape } from '@/components/icons';

export default function OrderCTA() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-blush-100 bg-gradient-to-br from-blush-50 via-shell to-cream px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-blush-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="animate-drift pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-blush-100/70 blur-3xl"
          />
          <PetalShape
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute right-[12%] top-[16%] hidden h-8 w-8 rotate-45 text-blush-200 sm:block"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Ready to Give
              <span className="italic text-blush-500"> Something Special?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Choose a handmade crochet bouquet and make someone&apos;s day a little more
              beautiful.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button href={site.facebook} size="lg" external>
                Order Now
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href={site.facebook} variant="soft" size="lg" external>
                <FacebookIcon className="h-4 w-4" />
                Message Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
