import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
  BouquetIcon,
  CakeIcon,
  FlowerIcon,
  GraduationIcon,
  HeartIcon,
  RingsIcon,
  SparkleIcon,
} from '@/components/icons';

const occasions = [
  { icon: CakeIcon, title: 'Birthdays' },
  { icon: RingsIcon, title: 'Anniversaries' },
  { icon: HeartIcon, title: "Valentine's Day" },
  { icon: GraduationIcon, title: 'Graduations' },
  { icon: BouquetIcon, title: "Mother's Day" },
  { icon: SparkleIcon, title: 'Just Because' },
];

export default function Occasions() {
  return (
    <section className="relative overflow-hidden bg-blush-50 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-white/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -right-10 top-8 h-56 w-56 rounded-full bg-white/60 blur-3xl"
      />
      <FlowerIcon
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute left-[7%] top-[18%] hidden h-10 w-10 text-blush-200 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Perfect for Every Occasion"
          title="Made for Every Special Moment"
          tone="onPink"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {occasions.map((occasion, i) => {
            const Icon = occasion.icon;
            return (
              <Reveal
                key={occasion.title}
                delay={i * 90}
                className="group flex flex-col items-center gap-4 rounded-[1.5rem] bg-white/80 px-4 py-8 text-center shadow-soft ring-1 ring-white/70 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-lift sm:px-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blush-200">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-lg text-ink sm:text-xl">{occasion.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
