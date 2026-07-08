import { useState } from 'react';
import { Github, ExternalLink, Search, X, Target, Lightbulb, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = projects.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="glow-orb w-96 h-96 top-40 left-0" style={{ background: '#2563EB' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">AI and software solutions I've built</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative mb-10 reveal">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="Search projects by title, description, or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
            }}
          />
        </div>

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: 'var(--text-secondary)' }}>
            No projects found. Try a different search or filter.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden reveal flex flex-col"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {project.category.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-full text-xs font-medium text-white" style={{ background: 'rgba(37, 99, 235, 0.8)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: 'var(--primary)' }}>{project.subtitle}</p>
                  <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', color: 'white' }}
                    >
                      View Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text)' }}
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text)' }}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--bg-secondary)', color: 'var(--text)' }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded-xl mb-6" />

            <h3 className="text-2xl font-bold mb-1">{selected.title}</h3>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--primary)' }}>{selected.subtitle}</p>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selected.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold mb-1 flex items-center gap-2"><Target size={16} style={{ color: 'var(--primary)' }} /> Problem</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{selected.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1 flex items-center gap-2"><Lightbulb size={16} style={{ color: 'var(--accent)' }} /> Solution</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{selected.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Features</h4>
                <ul className="grid grid-cols-2 gap-1.5">
                  {selected.features.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={12} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 flex items-center gap-2"><AlertCircle size={16} style={{ color: 'var(--primary)' }} /> Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                <h4 className="text-sm font-bold mb-1 flex items-center gap-2"><TrendingUp size={16} style={{ color: 'var(--primary)' }} /> Outcome</h4>
                <p className="text-sm" style={{ color: 'var(--primary)' }}>{selected.outcome}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
                <Github size={18} /> View on GitHub
              </a>
              {selected.demo && (
                <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
