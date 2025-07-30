import Hero from '@/Components/Hero';
import Portfolio from '@/Components/Portfolio';
import Pricing from '@/app/Pricing/page';
import Navbar from '@/Components/NavBar';
import Preguntas from '@/Components/Preguntas';
import Footer from '@/Components/Footer';
import Testimonials from '@/Components/Testimonials';


export default function Home() {
  return (
    <div className="font-sans">
      {/* NavBar Section */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* Portfolio */}
      <Portfolio/>

      {/* Testimonios */}
      <Testimonials/>

      {/* Precio */}
      <Pricing/>

      {/* Preguntas */}
      <Preguntas/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
