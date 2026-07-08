import { Brain, Code, Layers, Cloud, Users, Server } from 'lucide-react';
import { skills } from '../data/portfolio';

const categoryIcons: Record<string, any> = {
  'AI & Machine Learning': Brain,
  'Programming Languages': Code,
  'Frameworks & Libraries': Layers,
  'Software Engineering': Server,
  'Cloud & DevOps': Cloud,
  'Soft Skills': Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="glow-orb w-96 h-96 top-20 right-0" style={{ background: '#06B6D4' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <div
                key={category}
                className="glass-card p-6 reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins' }}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill.name} className="tech-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
