import ProjectCard from '../components/ProjectCard';

export const metadata = {
  title: 'Mes Projets | Portfolio',
  description: 'Découvrez mes projets de développement web, applications et sites internet.',
};

export default function Projects() {
  const projects = [
    {
      title: 'Site moderne et responsive',
      description: 'Site web responsive pour une entreprise nommée ASTI49, conçu sous WordPress avec Elementor Pro pour offrir une expérience utilisateur fluide.',
      imageUrl: '/assets/images/asti49.png',
      techs: ['Wordpress', 'Elementor Pro', 'Figma'],
      link: 'https://asti49.com',
    },
    {
      title: 'Blog Informatique',
      description: 'Mon premier site qui a été conçu il y a 2 ans dans le cadre des Ateliers de Professionnalisation de ma formation. Il s’agit d’un blog simple.',
      imageUrl: '/assets/images/blog.png',
      techs: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://blog-epaquereau.netlify.app',
    },
    {
      title: 'Application Mobile',
      description: 'Application mobile de gestion de tâches avec synchronisation cloud.',
      imageUrl: '/projects/mobile-app.jpg',
      techs: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: 'https://github.com/username/mobile-app',
    },
    {
      title: 'Portfolio Personnel',
      description: 'Site portfolio moderne avec mode sombre et animations fluides.',
      imageUrl: '/projects/portfolio.jpg',
      techs: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/username/portfolio',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Mes Projets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 