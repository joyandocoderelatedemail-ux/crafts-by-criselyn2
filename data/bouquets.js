/**
 * Product + gallery data — the single source of truth for every photo on the page.
 *
 * To add a bouquet: drop the photo into /public/images, generate a matching
 * 330x440 thumbnail into /public/images/thumbs (same filename), then append an
 * entry below. `width`/`height` are the full photo's intrinsic pixel size so
 * next/image can reserve space and avoid layout shift.
 *
 * `featured: true` puts it in the "Our Handmade Bouquets" card grid.
 * Everything here appears in the 3D carousel regardless.
 *
 * `price` is null on every item: no prices were supplied, so the cards fall
 * back to "Message us for price". Set it to a string such as '₱450' to show one.
 */
export const photos = [
  {
    id: 'pink-butterfly',
    name: 'Blush Rose & Butterfly Bouquet',
    description:
      'Soft pink roses wrapped in white, finished with delicate butterflies.',
    src: '/images/bouquet-pink-butterfly.jpg',
    width: 720,
    height: 660,
    alt: 'Handmade bouquet of pale pink roses in a white wrap decorated with butterflies',
    featured: true,
    price: null,
  },
  {
    id: 'blue-roses',
    name: 'Midnight Blue Bouquet',
    description:
      'Deep blue roses on black wrapping with a soft scatter of silver.',
    src: '/images/bouquet-blue-roses.jpg',
    width: 720,
    height: 960,
    alt: 'Handmade royal blue rose bouquet wrapped in black with silver accents',
    featured: true,
    price: null,
  },
  {
    id: 'lavender-lily',
    name: 'Lavender Dream Bouquet',
    description:
      'Lavender stems and a pink lily, tied with an iridescent ribbon.',
    src: '/images/bouquet-lavender-lily.jpg',
    width: 720,
    height: 960,
    alt: 'Handmade bouquet of purple lavender and a pink lily in lilac wrapping',
    featured: true,
    price: null,
  },
  {
    id: 'lilac-daisy',
    name: 'Lilac Daisy Bouquet',
    description:
      'Cheerful white daisies in a lilac wrap, finished with a satin bow.',
    src: '/images/bouquet-lilac-daisy.jpg',
    width: 720,
    height: 1060,
    alt: 'Handmade white daisy bouquet in lilac wrapping with a cream satin bow',
    featured: true,
    price: null,
  },
  {
    id: 'graduation',
    name: 'Graduation Bouquet',
    description:
      'Bold red and black blooms with a congratulations card — made for the big day.',
    src: '/images/bouquet-graduation.jpg',
    width: 720,
    height: 860,
    alt: 'Handmade red and black graduation bouquet with a congratulations card topper',
    featured: true,
    price: null,
  },
  {
    id: 'burgundy-lily',
    name: 'Single Lily Bouquet',
    description:
      'One deep burgundy lily in a clean white wrap with a gold ribbon.',
    src: '/images/bouquet-burgundy-lily.jpg',
    width: 720,
    height: 1000,
    alt: 'Handmade single burgundy lily in a white wrap tied with gold ribbon',
    featured: true,
    price: null,
  },
  {
    id: 'sunflower-news',
    name: 'Sunflower Bouquet',
    description:
      'Bright sunflowers and daisies in a vintage newsprint wrap.',
    src: '/images/bouquet-sunflower-news.jpg',
    width: 720,
    height: 960,
    alt: 'Handmade sunflower and daisy bouquet wrapped in newsprint paper',
    featured: true,
    price: null,
  },
  {
    id: 'money-bouquet',
    name: 'Money Bouquet',
    description:
      'A celebration bouquet built around folded bills — a memorable gift.',
    src: '/images/bouquet-money.jpg',
    width: 375,
    height: 666,
    alt: 'Handmade money bouquet with folded banknotes in a white wrap and pink ribbon',
    featured: true,
    price: null,
  },
  {
    id: 'sunflower-round',
    name: 'Sunflower Posy',
    description: 'A round sunflower and daisy posy framed in white tulle.',
    src: '/images/bouquet-sunflower-round.jpg',
    width: 720,
    height: 747,
    alt: 'Round handmade sunflower and daisy posy framed with white tulle',
    featured: false,
    price: null,
  },
  {
    id: 'purple-lily',
    name: 'Purple Lily Bouquet',
    description: 'A purple lily with white blossoms and an organza bow.',
    src: '/images/bouquet-purple-lily.jpg',
    width: 720,
    height: 1000,
    alt: 'Handmade purple lily bouquet with small white blossoms in lilac wrapping',
    featured: false,
    price: null,
  },
  {
    id: 'lilac-daisy-red',
    name: 'Daisy Bouquet, Red Ribbon',
    description: 'The lilac daisy bouquet finished with a red satin bow.',
    src: '/images/bouquet-lilac-daisy-red.jpg',
    width: 720,
    height: 1040,
    alt: 'Handmade white daisy bouquet in lilac wrapping tied with a red satin bow',
    featured: false,
    price: null,
  },
  {
    id: 'lilac-daisy-alt',
    name: 'Daisy Bouquet, Cream Ribbon',
    description: 'White daisies and greenery under a soft cream bow.',
    src: '/images/bouquet-lilac-daisy-alt.jpg',
    width: 720,
    height: 1000,
    alt: 'Handmade white daisy bouquet with greenery and a cream satin bow',
    featured: false,
    price: null,
  },
  {
    id: 'single-stem-minis',
    name: 'Single Stem Minis',
    description:
      'Little single-flower bouquets in four colours — sweet, simple gifts.',
    src: '/images/single-stem-minis.jpg',
    width: 720,
    height: 720,
    alt: 'Row of handmade single stem mini bouquets in blue, orange, pink and purple',
    // A line-up shot rather than one product, so it lives in the gallery only.
    featured: false,
    price: null,
  },
  {
    id: 'keychains-flowers',
    name: 'Flower Keychains',
    description: 'Handmade flower keychains in five bright colours.',
    src: '/images/keychains-flowers.jpg',
    width: 375,
    height: 666,
    alt: 'Five handmade flower keychains in purple, yellow, pink, red and blue',
    featured: false,
    price: null,
  },
  {
    id: 'keychains-display',
    name: 'Keychain Collection',
    description: 'A rack of handmade keychains — flowers, hearts and more.',
    src: '/images/keychains-display.jpg',
    width: 720,
    height: 400,
    alt: 'Display rack hung with assorted handmade flower and novelty keychains',
    featured: false,
    price: null,
  },
  {
    id: 'blush-rouge',
    name: 'Blush & Rouge Bouquet',
    description:
      'A soft mix of blush pink and deep red roses, nestled in white tulle.',
    src: '/images/bouquet-blush-rouge.jpg',
    width: 652,
    height: 616,
    alt: 'Handmade bouquet of blush pink and deep red roses wrapped in white tulle',
    featured: false,
    price: null,
  },
  {
    id: 'pink-roses',
    name: 'Pink Romance Bouquet',
    description:
      'Full, rounded roses in gentle pink tones — a quietly romantic keepsake.',
    src: '/images/bouquet-pink-roses.jpg',
    width: 652,
    height: 616,
    alt: 'Handmade pink and red rose bouquet finished with soft white wrapping',
    featured: false,
    price: null,
  },
  {
    id: 'sunflower-tulips',
    name: 'Sunflower & Tulip Bundle',
    description:
      'A cheerful sunflower surrounded by pastel tulips, styled in a clear jar.',
    src: '/images/bouquet-sunflower-tulips.jpg',
    width: 720,
    height: 840,
    alt: 'Handmade sunflower and pastel pink tulip bundle arranged in a glass jar',
    featured: false,
    price: null,
  },
  {
    id: 'red-roses',
    name: 'Classic Red Bouquet',
    description:
      'Deep red roses in a timeless arrangement, wrapped in soft white petals.',
    src: '/images/bouquet-red-roses.jpg',
    width: 720,
    height: 578,
    alt: 'Handmade deep red rose bouquet wrapped in white tissue petals',
    featured: false,
    price: null,
  },
];

/** Thumbnails live alongside the full photos under /thumbs with the same filename. */
const thumbFor = (src) => src.replace('/images/', '/images/thumbs/');

/** Cards shown in the "Our Handmade Bouquets" grid. */
export const bouquets = photos.filter((photo) => photo.featured);

/** Every photo, used by the lightbox. */
export const galleryImages = photos;

/** Shape the 3D carousel expects: a light thumbnail plus the full-size source. */
export const carouselPhotos = photos.map((photo) => ({
  src: thumbFor(photo.src),
  full: photo.src,
  alt: photo.alt,
  name: photo.name,
}));
