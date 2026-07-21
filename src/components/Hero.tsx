import { useEffect, useRef } from 'react';
import { Download, FolderOpen, Mail, Linkedin, Github, Mail as Email, Brain } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useTyping } from '../hooks/useTyping';

export default function Hero() {
  const typedText = useTyping(personal.roles, 80, 40, 1800);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      el.style.setProperty('--parallax-x', `${x}px`);
      el.style.setProperty('--parallax-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Email, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-96 h-96 -top-20 -left-20" style={{ background: '#2563EB' }} />
      <div className="glow-orb w-80 h-80 top-40 right-10" style={{ background: '#06B6D4' }} />
      <div className="glow-orb w-72 h-72 bottom-0 left-1/3" style={{ background: '#8B5CF6' }} />

      {/* Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${Math.random() > 0.5 ? '37, 99, 235' : '6, 182, 212'}, ${Math.random() * 0.4 + 0.2})`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-card" style={{ borderRadius: '50px' }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3" style={{ fontFamily: 'Poppins', lineHeight: '1.1' }}>
            Hi, I'm <span className="gradient-text">Merin</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-6 h-10" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--primary)' }}>{typedText}</span>
            <span className="animate-pulse" style={{ color: 'var(--accent)' }}>|</span>
          </div>

          <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {personal.heroSummary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href={personal.resumePDF} download className="btn-primary">
              <Download size={18} /> Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              <FolderOpen size={18} /> View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center transition-all hover:scale-110"
                style={{ color: 'var(--primary)' }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div
            className="relative animate-float"
            style={{
              transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0))',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', padding: '4px' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: 'var(--bg)' }}>
                  <img
                    src={personal.photo}
                    alt="Merin Johny"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Brain size={20} style={{ color: 'var(--primary)' }} />
                  <div>
                    <div className="text-xs font-bold">AI Engineer</div>
                    <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>ML & DL</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'var(--border)' }}>
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: 'var(--primary)' }} />
        </div>
      </div>
    </section>
  );
}
