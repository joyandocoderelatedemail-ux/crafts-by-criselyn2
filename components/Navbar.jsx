'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the page behind the open mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
        scrolled || open
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(242,185,199,0.35)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <a
          href="#home"
          className="font-serif text-xl tracking-tight text-ink transition-colors duration-300 hover:text-blush-600 sm:text-2xl"
        >
          Crafts by <span className="italic text-blush-500">Criselyn</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blush-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blush-500 px-6 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-600 hover:shadow-lift sm:inline-flex"
          >
            Order Now
          </a>

          {/* Animated hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-blush-50 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-6">
              <span
                className={[
                  'absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ease-out',
                  open ? 'top-2 rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-2 block h-px w-6 bg-ink transition-all duration-300 ease-out',
                  open ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ease-out',
                  open ? 'top-2 -rotate-45' : 'top-4',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'overflow-hidden border-t border-blush-100 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden',
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="space-y-1 px-5 py-5 sm:px-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                className={[
                  'block rounded-2xl px-4 py-3 text-base text-ink transition-all duration-500 hover:bg-blush-50 hover:text-blush-600',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-blush-500 px-6 py-3.5 text-center text-sm font-medium text-white shadow-soft transition-colors duration-300 hover:bg-blush-600"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
