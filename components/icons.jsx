/**
 * Small, consistent line-icon set drawn inline so the page ships no icon font
 * or third-party icon package.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
};

export function HandmadeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 13V4.8a1.3 1.3 0 0 1 2.6 0V11" />
      <path d="M10.6 10.6V3.8a1.3 1.3 0 0 1 2.6 0v6.8" />
      <path d="M13.2 11V5.4a1.3 1.3 0 0 1 2.6 0V13" />
      <path d="M15.8 12.4V8.6a1.3 1.3 0 0 1 2.6 0v5.6a6.4 6.4 0 0 1-6.4 6.4h-.8a5.6 5.6 0 0 1-4.4-2.1l-2.4-3a1.3 1.3 0 0 1 1.9-1.8L8 15.6" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.2c-.4 0-.7-.1-1-.4l-6.5-6a4.9 4.9 0 0 1 0-7.2 5.4 5.4 0 0 1 7.5.3 5.4 5.4 0 0 1 7.5-.3 4.9 4.9 0 0 1 0 7.2l-6.5 6c-.3.3-.6.4-1 .4Z" />
    </svg>
  );
}

export function GiftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11h16v8.2a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 19.2Z" />
      <path d="M3 7.6h18V11H3z" />
      <path d="M12 7.6V21" />
      <path d="M12 7.6S10.8 3 8.4 3a2.3 2.3 0 0 0 0 4.6Z" />
      <path d="M12 7.6S13.2 3 15.6 3a2.3 2.3 0 0 1 0 4.6Z" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2 10.3 12.4 4.5 10.7 10.3 9Z" />
      <path d="M18.4 3.4 19 5.2l1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6Z" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 7.2V12l3.2 2" />
    </svg>
  );
}

export function FlowerIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9.2" r="2.2" />
      <path d="M12 7c0-2 .9-3.6 2.4-3.6S16.5 5 15 6.6" />
      <path d="M12 7c0-2-.9-3.6-2.4-3.6S7.5 5 9 6.6" />
      <path d="M14 9.2c1.9-.6 3.7-.3 4.2 1.1s-.9 2.7-2.9 2.6" />
      <path d="M10 9.2c-1.9-.6-3.7-.3-4.2 1.1s.9 2.7 2.9 2.6" />
      <path d="M12 11.4V21" />
      <path d="M12 16c-1.8-1.6-3.6-1.6-4.6-.6" />
      <path d="M12 18.4c1.6-1.4 3.3-1.4 4.2-.4" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8Z" />
    </svg>
  );
}

export function CakeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20.4h16" />
      <path d="M4.8 20.4v-5.2a2.4 2.4 0 0 1 2.4-2.4h9.6a2.4 2.4 0 0 1 2.4 2.4v5.2" />
      <path d="M4.8 16.4c1.4 1.2 2.6 1.2 4 0s2.6-1.2 4 0 2.6 1.2 4 0" />
      <path d="M12 12.8V9.6" />
      <path d="M12 6.6a1.1 1.1 0 1 0-1.1-1.1c0 .8 1.1 1.7 1.1 1.7s1.1-.9 1.1-1.7A1.1 1.1 0 0 0 12 6.6Z" />
    </svg>
  );
}

export function RingsIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="14.4" r="5" />
      <circle cx="15" cy="14.4" r="5" />
      <path d="M9 6.2h6l-1.6 2.6h-2.8Z" />
    </svg>
  );
}

export function GraduationIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 4 9 4.2-9 4.2-9-4.2Z" />
      <path d="M6.6 10.4v4.8c0 1.6 2.4 2.8 5.4 2.8s5.4-1.2 5.4-2.8v-4.8" />
      <path d="M21 8.2v5.2" />
    </svg>
  );
}

export function BouquetIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.4" cy="6.6" r="2.4" />
      <circle cx="15.6" cy="6.6" r="2.4" />
      <circle cx="12" cy="10.6" r="2.4" />
      <path d="M9.4 12.6 8 20.4" />
      <path d="M14.6 12.6 16 20.4" />
      <path d="M12 13v7.4" />
      <path d="M6.6 20.4h10.8" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7.6 3.6h-.9A2.7 2.7 0 0 0 4 6.4C4 14 10 20 17.6 20a2.7 2.7 0 0 0 2.8-2.7v-.9a1 1 0 0 0-.7-1l-3.3-1a1 1 0 0 0-1.1.4l-.9 1.3a10.6 10.6 0 0 1-4.5-4.5l1.3-.9a1 1 0 0 0 .4-1.1l-1-3.3a1 1 0 0 0-1-.7Z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronLeftIcon(props) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

/** Decorative petal shape used behind the hero and in section corners. */
export function PetalShape({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...props}>
      <path
        d="M60 4c14 22 30 34 30 54a30 30 0 0 1-60 0c0-20 16-32 30-54Z"
        fill="currentColor"
      />
    </svg>
  );
}
