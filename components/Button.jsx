const variants = {
  primary:
    'bg-blush-500 text-white shadow-soft hover:bg-blush-600 hover:shadow-lift hover:-translate-y-0.5',
  outline:
    'border border-blush-300 text-ink bg-white/70 hover:bg-blush-50 hover:border-blush-400 hover:-translate-y-0.5',
  soft: 'bg-white text-blush-600 shadow-soft hover:bg-blush-50 hover:shadow-lift hover:-translate-y-0.5',
};

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

/**
 * Every call to action on this page is a link (to Facebook, to a phone number,
 * or to a section), so Button renders an anchor rather than a <button>.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = false,
  ...rest
}) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide',
        'transition-all duration-300 ease-out',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
}
