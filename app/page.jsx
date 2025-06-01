import Link from 'next/link';
import Image from 'next/image';
import { FiCode, FiLayout, FiDatabase, FiGithub, FiTool } from 'react-icons/fi';

export default function Home() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Git', 'Responsive Design', 'UI/UX Design'
  ];

  const tools = [
    { name: 'VS Code', icon: <FiCode className="w-8 h-8" /> },
    { name: 'Figma', icon: <FiLayout className="w-8 h-8" /> },
    { name: 'Git', icon: <FiGithub className="w-8 h-8" /> },
    { name: 'Postman', icon: <FiTool className="w-8 h-8" /> },
    { name: 'MongoDB', icon: <FiDatabase className="w-8 h-8" /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bonjour, je suis <span className="text-primary-light">Votre Nom</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Développeur web passionné par la création d'expériences numériques modernes et intuitives.
              </p>
              <Link href="/projects" className="btn-primary">
                Voir mes projets
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-image.jpg"
                alt="Hero illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">À propos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Passionné par le développement web depuis plus de 5 ans, je crée des applications web modernes
              et performantes. Mon expertise couvre l'ensemble du processus de développement, de la conception
              à la mise en production.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Logiciels & Outils</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <div key={tool.name} className="text-center">
                <div className="mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <p className="font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-light dark:bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à démarrer un projet ?</h2>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark">
            Contactez-moi
          </Link>
        </div>
      </section>
    </>
  );
}
