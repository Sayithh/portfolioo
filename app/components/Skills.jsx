import Image from 'next/image';

const skills = [
  { name: 'ASP.NET MVC', icon: '/assets/icons/aspnet.svg' },
  { name: 'Python', icon: '/assets/icons/python.svg', details: '(NumPy, Matplotlib, Pandas, Sklearn)' },
  { name: 'C#', icon: '/assets/icons/csharp.svg' },
  { name: 'PHP', icon: '/assets/icons/php.svg' },
  { name: 'Laravel', icon: '/assets/icons/laravel.svg' },
  { name: 'Flutter', icon: '/assets/icons/flutter.svg' },
  { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
  { name: 'HTML/CSS', icon: '/assets/icons/html5.svg' },
];

export default function Skills() {
  return (
    <section id="competences" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
        
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-medium text-center">{skill.name}</h4>
                {skill.details && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                  
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 