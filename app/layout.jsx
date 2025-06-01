import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio de développeur web - Création de sites web, applications front-end, design UI/UX',
  openGraph: {
    title: 'Mon Portfolio',
    description: 'Portfolio de développeur web - Création de sites web, applications front-end, design UI/UX',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 