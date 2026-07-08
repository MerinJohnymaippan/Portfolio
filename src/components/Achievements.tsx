import { Trophy, Award, Mic, Zap, Users, Star } from 'lucide-react';
import { achievements } from '../data/portfolio';

const iconMap: Record<string, any> = {
  trophy: Trophy,
  award: Award,
  mic: Mic,
  zap: Zap,
  users: Users,
  star: Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="glow-orb w-80 h-80 bottom-20 right-10" style={{ background: '#06B6D4' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Achievements & <span className="gradient-text">Awards</span></h2>
          <p className="section-subtitle">Recognition and milestones in my journey</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="glass-card p-6 reveal group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide tech-tag mb-2 inline-block">{item.category}</span>
                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
