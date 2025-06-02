import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ToolsSlider from './components/ToolsSlider';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ToolsSlider />
      
      {/* Section "Prêt à démarrer un projet ?" */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à démarrer un projet ?</h2>
          <Link
            href="/contact"
            className="inline-block border border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200"
          >
            Contactez-moi
          </Link>
        </div>
      </section>
    </main>
  );
}
