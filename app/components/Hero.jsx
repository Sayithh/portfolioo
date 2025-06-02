import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-light to-primary-dark text-white pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Enzo Paquereau
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Étudiant en BTS SIO - SLAM, développeur web/logiciel passionné par la création de projets numériques modernes.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-white text-primary-dark font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Voir mes projets
        </Link>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/assets/images/profile.jpg"
            alt="Enzo Paquereau"
            fill
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
} 