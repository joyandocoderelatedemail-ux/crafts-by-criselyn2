import Reveal from '@/components/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'default',
}) {
  const alignment =
    align === 'left' ? 'text-left' : 'text-center mx-auto items-center';
  const eyebrowTone =
    tone === 'onPink' ? 'text-blush-700' : 'text-blush-500';
  const subtitleTone = tone === 'onPink' ? 'text-ink-soft' : 'text-ink-soft';

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal
          as="span"
          className={`text-xs font-medium uppercase tracking-[0.2em] ${eyebrowTone}`}
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={80}
        className="mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={160}
          className={`mt-4 text-base leading-relaxed ${subtitleTone}`}
        >
          {subtitle}
        </Reveal>
      )}
      <Reveal
        delay={220}
        className={`mt-6 h-px w-16 bg-blush-300 ${align === 'left' ? '' : 'mx-auto'}`}
        aria-hidden="true"
      />
    </div>
  );
}
