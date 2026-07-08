import { Calendar } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Professional credentials I've earned</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="glass-card p-6 reveal group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-110"
                  style={{ background: cert.color }}
                >
                  {cert.icon}
                </div>
                <div>
                  <div className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar size={12} /> {cert.date}
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-base mb-1 leading-tight">{cert.title}</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{cert.organization}</p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
