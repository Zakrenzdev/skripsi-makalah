import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MakalahKu</h3>
            <p className="text-text-secondary">
              Platform untuk berbagi dan menemukan makalah berkualitas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/makalah" className="hover:text-accent transition-colors">Makalah</Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-accent transition-colors">Tentang</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-accent transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sosial Media</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-bg-tertiary hover:bg-accent hover:text-white transition-colors">
                <FiGithub />
              </a>
              <a href="#" className="p-2 rounded-full bg-bg-tertiary hover:bg-accent hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="p-2 rounded-full bg-bg-tertiary hover:bg-accent hover:text-white transition-colors">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bg-tertiary mt-8 pt-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} MakalahKu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}