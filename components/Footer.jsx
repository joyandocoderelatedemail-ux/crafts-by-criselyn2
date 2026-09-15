import { navLinks, site } from '@/data/site';
import { FacebookIcon, PhoneIcon } from '@/components/icons';

const footerLinks = navLinks.filter((link) =>
  ['Home', 'Bouquets', 'About', 'Contact'].includes(link.label),
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blush-100 bg-gradient-to-b from-white to-blush-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-serif text-2xl text-ink transition-colors duration-300 hover:text-blush-600">
              Crafts by <span className="italic text-blush-500">Criselyn</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <h2 className="font-serif text-lg text-ink">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors duration-300 hover:text-blush-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-serif text-lg text-ink">Get in Touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors duration-300 hover:text-blush-600"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blush-500 shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <FacebookIcon className="h-4 w-4" />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors duration-300 hover:text-blush-600"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blush-500 shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-blush-200/60 pt-6 text-center">
          <p className="text-xs text-ink-soft">
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
