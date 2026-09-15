import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/data/site';
import { FacebookIcon, PhoneIcon } from '@/components/icons';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Special"
          subtitle="Send a message with your idea, the occasion and your preferred colours — we'll take it from there."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Facebook */}
          <Reveal
            as="a"
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-[1.75rem] border border-blush-100 bg-shell/60 p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-blush-200 hover:bg-white hover:shadow-lift"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-transform duration-500 group-hover:scale-110">
              <FacebookIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-medium tracking-[0.18em] text-blush-500 uppercase">
                Facebook
              </span>
              <span className="mt-2 block font-serif text-xl text-ink">
                {site.facebookName}
              </span>
              <span className="mt-1 block text-sm text-ink-soft">
                Message us for orders and custom requests
              </span>
            </span>
          </Reveal>

          {/* Phone */}
          <Reveal
            as="a"
            href={`tel:${site.phone}`}
            delay={110}
            className="group flex flex-col items-start gap-4 rounded-[1.75rem] border border-blush-100 bg-shell/60 p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-blush-200 hover:bg-white hover:shadow-lift"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-transform duration-500 group-hover:scale-110">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-medium tracking-[0.18em] text-blush-500 uppercase">
                Contact Number
              </span>
              <span className="mt-2 block font-serif text-xl text-ink">{site.phone}</span>
              <span className="mt-1 block text-sm text-ink-soft">
                Tap to call or send a text
              </span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blush-500 px-8 py-4 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-600 hover:shadow-lift"
          >
            <FacebookIcon className="h-4 w-4" />
            Message Us on Facebook
          </a>
        </Reveal>
      </div>
    </section>
  );
}
