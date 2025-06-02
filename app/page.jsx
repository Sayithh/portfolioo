import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ToolsSlider from './components/ToolsSlider';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ToolsSlider />
      
      {/* Section Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark dark:text-white">
            Prêt à démarrer un projet ?
          </h2>
          <form
            action="mailto:enzopaquereau@gmail.com"
            method="POST"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col space-y-6"
          >
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Nom</span>
              <input
                type="text"
                name="name"
                required
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-primary-dark dark:focus:border-primary-light"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Email</span>
              <input
                type="email"
                name="email"
                required
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-primary-dark dark:focus:border-primary-light"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Sujet</span>
              <input
                type="text"
                name="subject"
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-primary-dark dark:focus:border-primary-light"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Message</span>
              <textarea
                name="message"
                rows="5"
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-primary-dark dark:focus:border-primary-light"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center bg-primary-dark text-white py-2 px-6 rounded-md hover:bg-primary-light transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
