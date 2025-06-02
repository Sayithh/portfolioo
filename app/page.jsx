import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ToolsSlider from './components/ToolsSlider';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ToolsSlider />
      <CTASection />
      <ContactForm />
    </main>
  );
}
