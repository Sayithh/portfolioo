import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Enzo Paquereau</p>
            <p className="text-gray-400">Développeur Web</p>
          </div>
          
          <nav className="flex flex-wrap gap-6">
            <Link href="/" className="hover:text-primary-light transition-colors">
              Accueil
            </Link>
            <Link href="/contact" className="hover:text-primary-light transition-colors">
              Contact
            </Link>
            <Link href="/mentions-legales" className="hover:text-primary-light transition-colors">
              Mentions légales
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Enzo Paquereau. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 