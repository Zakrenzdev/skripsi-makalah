import Link from 'next/link';
import { FiSun, FiMoon, FiBook, FiHome, FiInfo, FiMail } from 'react-icons/fi';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="bg-bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:text-accent transition-colors">
          <FiBook className="text-accent" />
          <span>MakalahKu</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
            <FiHome /> Home
          </Link>
          <Link href="/makalah" className="hover:text-accent transition-colors flex items-center gap-1">
            <FiBook /> Makalah
          </Link>
          <Link href="/tentang" className="hover:text-accent transition-colors flex items-center gap-1">
            <FiInfo /> Tentang
          </Link>
          <Link href="/kontak" className="hover:text-accent transition-colors flex items-center gap-1">
            <FiMail /> Kontak
          </Link>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          
          {/* Mobile menu button would go here */}
        </div>
      </nav>
    </header>
  );
}