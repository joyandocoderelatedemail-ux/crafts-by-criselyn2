import About from '@/components/About';
import Contact from '@/components/Contact';
import FeaturedBouquets from '@/components/FeaturedBouquets';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Navbar from '@/components/Navbar';
import Occasions from '@/components/Occasions';
import OrderCTA from '@/components/OrderCTA';
import WhyCrochet from '@/components/WhyCrochet';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <FeaturedBouquets />
        <Gallery />
        <About />
        <WhyCrochet />
        <Occasions />
        <OrderCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
