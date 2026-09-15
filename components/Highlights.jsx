import Reveal from '@/components/Reveal';
import { GiftIcon, HandmadeIcon, HeartIcon, SparkleIcon } from '@/components/icons';

const highlights = [
  {
    icon: HandmadeIcon,
    title: '100% Handmade',
    text: 'Carefully crafted by hand.',
  },
  {
    icon: HeartIcon,
    title: 'Made with Love',
    text: 'Every bouquet is created with care.',
  },
  {
    icon: GiftIcon,
    title: 'Perfect for Gifting',
    text: 'A memorable gift for every occasion.',
  },
  {
    icon: SparkleIcon,
    title: 'Custom Orders',
    text: 'Create something special for someone special.',
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-blush-100 bg-shell/70 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="group flex items-start gap-4 rounded-2xl px-3 py-3 transition-colors duration-300 hover:bg-white lg:flex-col lg:items-center lg:text-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blush-200">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg text-ink">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </span>
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
