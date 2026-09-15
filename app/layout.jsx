import { Cormorant_Garamond, Inter } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crafts-by-criselyn.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
  description: site.description,
  keywords: [
    'crochet bouquet',
    'handmade bouquet',
    'crochet flowers',
    'handmade gift',
    'Crafts by Criselyn',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handmade bouquet of pale pink roses in a white wrap decorated with butterflies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
    description: site.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
