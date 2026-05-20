import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import TechStack from '@/sections/TechStack';

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <About />

      <TechStack />

      <Experience />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}
