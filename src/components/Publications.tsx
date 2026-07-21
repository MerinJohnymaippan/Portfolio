import { BookOpen, Calendar, Award, ArrowRight } from 'lucide-react';
import { publications } from '../data/portfolio';

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 top-20 right-0" style={{ background: 'rgba(37, 99, 235, 0.15)' }} />
      <div className="glow-orb w-96 h-96 bottom-10 left-10" style={{ background: 'rgba(6, 182, 212, 0.1)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Publications & <span className="gradient-text">Conference Presentations</span></h2>
          <p className="section-subtitle">Research contributions and presented works</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {publications.map((pub, idx) => (
            <div
              key={pub.title}
              className="glass-card p-8 reveal flex flex-col justify-between group relative overflow-hidden border border-slate-200 dark:border-slate-800"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header: Icon, Conference & Date */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                       style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
                    <BookOpen size={22} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Calendar size={12} /> {pub.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300 leading-snug">
                  {pub.title}
                </h3>

                {/* Conference */}
                <p className="text-sm font-semibold mb-4 leading-relaxed flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Conference:</span>
                  <span>{pub.conference}</span>
                </p>

                {/* Description */}
                <p className="text-sm mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                  {pub.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {pub.highlights.map((highlight) => (
                      <span key={highlight} className="tech-tag text-xs font-medium px-2.5 py-1">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome / Footer */}
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                {pub.outcome && (
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-semibold bg-green-500/5 dark:bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/10">
                    <Award size={16} />
                    <span>{pub.outcome}</span>
                  </div>
                )}
                
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                  >
                    View Paper <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
