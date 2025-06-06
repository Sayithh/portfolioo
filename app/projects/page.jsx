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
      title: 'Les Folies de Louise',
      description: 'Application Lourde : Gestion desktop C# (commandes, stocks, personnel)',
      imageUrl: '/assets/images/application.png',
      techs: ['C#', 'Entity Framework', 'MySQL'],
      link: '/projects/projet1',
    },
    {
      title: 'Blog Informatique',
      description: 'Premier site web conçu il y a 2 ans dans le cadre des Ateliers de Professionnalisation de ma formation. Il s’agit d’un blog simple.',
      imageUrl: '/assets/images/blog.png',
      techs: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://blog-epaquereau.netlify.app',
    }, 
    {
      title: 'Site de gestion interne note de frais',
      description: 'Une plateforme intranet dédiée au suivi des frais professionnels pour une entreprise fictive.',
      imageUrl: '/assets/images/gestion.png',
      techs: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript'],
      link: '/projects/projet2',
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