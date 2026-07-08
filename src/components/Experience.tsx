import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className={`timeline-item glass-card p-6 md:p-8 reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-base font-semibold" style={{ color: 'var(--primary)' }}>
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="tech-tag flex items-center gap-1">
                    <Calendar size={12} /> {exp.duration}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Briefcase size={16} style={{ color: 'var(--accent)' }} /> Responsibilities
                </h4>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements.length > 0 && (
                <div className="mb-4 p-3 rounded-lg" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                  <h4 className="text-sm font-semibold mb-1">Key Achievement</h4>
                  {exp.achievements.map((a) => (
                    <p key={a} className="text-sm" style={{ color: 'var(--primary)' }}>{a}</p>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
