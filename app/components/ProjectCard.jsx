import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

export default function ProjectCard({ title, description, imageUrl, techs, link }) {
  return (
    <Link
      href={link}
      className="block group"
    >
      <div className="card overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {title}
          <FiExternalLink className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 