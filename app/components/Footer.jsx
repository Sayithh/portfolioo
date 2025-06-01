import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio - Tous droits réservés.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 