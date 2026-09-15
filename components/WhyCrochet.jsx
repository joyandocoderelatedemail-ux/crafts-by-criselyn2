import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ClockIcon, FlowerIcon, HandmadeIcon, HeartIcon } from '@/components/icons';

const reasons = [
  {
    icon: ClockIcon,
    title: 'Long-Lasting',
    text: 'A beautiful keepsake that can be enjoyed long after the special occasion.',
  },
  {
    icon: HandmadeIcon,
    title: 'Handmade',
    text: 'Each piece carries the charm of something carefully crafted by hand.',
  },
  {
    icon: FlowerIcon,
    title: 'Unique',
    text: 'A creative alternative to traditional flower bouquets.',
  },
  {
    icon: HeartIcon,
    title: 'Meaningful Gift',
    text: 'Perfect for expressing love, appreciation, congratulations, or friendship.',
  },
];

export default function WhyCrochet() {
  return (
    <section id="why" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Crochet"
          title="A Bouquet That Lasts Beyond the Moment"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                as="article"
                delay={i * 110}
                className="group relative overflow-hidden rounded-[1.75rem] border border-blush-100 bg-shell/60 p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blush-200 hover:bg-white hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-100/70 transition-transform duration-700 group-hover:scale-125"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blush-500 shadow-soft transition-transform duration-500 group-hover:-rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 font-serif text-xl text-ink">{reason.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">
                  {reason.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
