import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-8 py-16">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <Image
          src="/assets/images/profile.jpg"
          alt="Enzo Paquereau"
          fill
          className="rounded-full object-cover hero-profile shadow-lg"
          priority
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bonjour, je suis Enzo Paquereau
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Étudiant en BTS SIO - SLAM
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
          Développeur web passionné par la création d'expériences numériques modernes et intuitives.
        </p>
      </div>
    </section>
  );
} 