import { ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolio';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const socials = [
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="pt-16 pb-8 relative" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3 gradient-text" style={{ fontFamily: 'Poppins' }}>Merin Johny</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              AI Engineer specializing in machine learning, deep learning, and building intelligent systems that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'var(--bg)', color: 'var(--primary)', border: '1px solid var(--border)' }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{personal.email}</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Merin Johny. Made with <Heart size={14} style={{ color: '#EF4444' }} fill="currentColor" /> and React.
          </p>
          <a
            href="#home"
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', color: 'white' }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
