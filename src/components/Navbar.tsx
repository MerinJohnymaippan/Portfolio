import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.href.substring(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled ? 'var(--glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg" style={{ fontFamily: 'Poppins' }}>
            <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
              <Code2 size={20} />
            </span>
            <span className="gradient-text">Merin</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: 'var(--text)', background: 'var(--bg-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all"
              style={{ color: 'var(--text)', background: 'var(--bg-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg"
              style={{ color: 'var(--text)' }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col pt-20 px-6 gap-4 ${
          mobileOpen ? 'open' : ''
        }`}
        style={{ background: 'var(--bg)', boxShadow: '-10px 0 40px var(--shadow)' }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="nav-link text-lg"
          >
            {link.label}
          </a>
        ))}
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
