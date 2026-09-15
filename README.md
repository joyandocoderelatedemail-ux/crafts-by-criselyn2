# Crafts by Criselyn

Landing page for **Crafts by Criselyn**, a small handmade bouquet business.
Built with Next.js (App Router), React, Tailwind CSS and TypeScript. No backend,
no database.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |

## Deploying to Vercel

Push the repository to GitHub and import it at [vercel.com/new](https://vercel.com/new).
Vercel detects Next.js automatically — no build settings or environment variables
are required.

Optionally set `NEXT_PUBLIC_SITE_URL` to the final domain so Open Graph and
canonical URLs point at it (defaults to `https://crafts-by-criselyn.vercel.app`).

## Project structure

```
app/
  layout.jsx      Fonts, SEO metadata, Open Graph
  page.jsx        Section order for the landing page
  globals.css     Design tokens, animations, reduced-motion handling
  icon.svg        Favicon
components/
  ui/
    3d-carousel.tsx   Draggable 3D photo carousel (shadcn-style ui folder)
  ...                 One file per section, plus shared Button / Reveal / icons
data/
  site.js         Brand name, phone number, Facebook URL, nav links
  bouquets.js     Every photo: products, gallery and carousel
public/images/        Background-removed cut-outs (transparent .webp)
public/images/thumbs/ Carousel thumbnails (transparent .webp)
public/og-image.jpg   Open Graph card (cut-out composited on blush)
assets/
  original-photos/       Untouched originals as supplied
  photos-with-background/ Cropped photos before background removal
```

### Why `components/ui`

`components/ui` is the convention shadcn/ui uses for self-contained, reusable
primitives, and it is where the shadcn CLI writes components. Keeping it
separate from `components/` (which holds this page's sections) means a future
`npx shadcn@latest add <component>` drops files in without colliding with the
site's own code.

This project is not a full shadcn install — it has no `components.json`, no
`cn()` helper and no Radix dependencies, because nothing here needed them. To
adopt shadcn properly later:

```bash
npx shadcn@latest init
```

Answer its prompts using the existing setup (TypeScript: yes, Tailwind CSS,
import alias `@/*`). It will add `components.json` and `lib/utils.ts` without
disturbing the existing components.

## Editing content

**Contact details and navigation** live in `data/site.js`. Changing the phone
number or Facebook URL there updates every button, link and the footer at once.

**Photos** live in `data/bouquets.js` as one `photos` array. Each entry feeds
three places:

- `featured: true` → a card in the "Our Handmade Bouquets" grid
- every entry → a face on the 3D carousel and a slide in the lightbox

To add one:

1. Put the full photo in `public/images/`.
2. Remove its background and save a transparent `.webp` (see below), plus a
   thumbnail of the same name in `public/images/thumbs/` capped at 330x440 —
   the carousel loads every face at once, so it uses thumbnails.
3. Append an entry:

```js
{
  id: 'lavender-bundle',
  name: 'Lavender Bundle',
  description: 'A soft posy in gentle lilac tones.',
  src: '/images/lavender-bundle.webp',
  width: 720,
  height: 900,
  alt: 'Handmade lavender bouquet wrapped in cream paper',
  featured: true,
  price: null,
}
```

Leave `price: null` to show "Message us for price"; set it to a string such as
`'₱450'` to show a price instead.

Keep the featured count a multiple of four so the desktop grid has full rows.

## The 3D carousel

`components/ui/3d-carousel.tsx` renders photos on a draggable 3D cylinder.

```tsx
<ThreeDPhotoCarousel photos={carouselPhotos} onPhotoClick={handlePhotoClick} />
```

- `photos` — `{ src, full?, alt, name? }[]`. `src` should be a thumbnail;
  `full` is used by the built-in expanded view.
- `onPhotoClick` — optional. When provided, the component calls it instead of
  opening its own overlay, which is how this page hands off to `Lightbox`
  (prev/next, arrow keys, focus handling).

Faces are focusable and respond to Enter/Space, so the carousel is usable
without a mouse.

## Background removal

Product images are transparent cut-outs sitting on the page's own blush tints,
which is why every image uses `object-contain` (never `object-cover` — that
would slice the wrap off an irregular silhouette).

They were produced with [rembg](https://github.com/danielgatis/rembg) using the
**birefnet-general** model, then trimmed to the subject's bounding box and
padded slightly:

```bash
python -m venv venv && venv/Scripts/pip install "rembg[cpu]" pillow
```

Model choice matters a lot here. `isnet-general-use` erased white tulle, tissue,
cellophane and banknotes wherever they sat against a light background — it
destroyed about half the catalogue. `birefnet-general` handled all of them.

The Open Graph image is a separate flattened JPEG on purpose: social platforms
composite previews on their own background and handle alpha unreliably.

## Notes

- The photos supplied show satin-ribbon and chenille-stem flowers rather than
  crochet. Product names are technique-neutral; the brand copy still says
  "crochet" as specified.
- Originals were supplied as `.jfif`, `.webp` and `.jpg` at phone resolution.
  The untouched originals are in `assets/original-photos/`, and the cropped,
  exposure-corrected photos that still have their backgrounds are in
  `assets/photos-with-background/` — start from those if a cut-out needs redoing.
- Section animations are plain CSS driven by an `IntersectionObserver`; only the
  carousel uses framer-motion. All motion is disabled under
  `prefers-reduced-motion`.
