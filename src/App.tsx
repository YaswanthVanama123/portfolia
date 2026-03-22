import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
