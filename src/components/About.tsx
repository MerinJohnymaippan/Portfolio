import { GraduationCap, Briefcase, Award, Target, BookOpen, Sparkles } from 'lucide-react';
import { personal, stats, education } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="glass-card p-6 text-center reveal">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const highlights = [
    { icon: GraduationCap, title: 'Education', text: 'B.Tech CSE (AI) — CGPA 9.27' },
    { icon: Briefcase, title: 'Experience', text: 'AI Engineer I + 2 internships' },
    { icon: Award, title: 'Achievements', text: 'International conference presenter' },
    { icon: Target, title: 'Objective', text: 'Build production-grade AI systems' },
  ];

  const expertise = [
    'Machine Learning & Deep Learning',
    'Computer Vision (YOLO, OpenCV)',
    'NLP & Large Language Models',
    'RAG Pipelines & Agentic AI',
    'Model Fine-tuning (LoRA)',
    'Vector Databases (FAISS)',
    'Python, TensorFlow, PyTorch',
    'FastAPI, Flask, REST APIs',
    'Docker & Cloud Deployment',
    'SQL & NoSQL Databases',
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Get to know my background and journey</p>
        </div>

        {/* Summary */}
        <div className="glass-card p-8 md:p-12 mb-12 reveal">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins' }}>Professional Summary</h3>
              <p className="leading-relaxed text-base whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                {personal.aboutSummary}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                <item.icon size={22} style={{ color: 'var(--primary)' }} />
                <div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>

        {/* Expertise */}
        <div className="glass-card p-8 md:p-12 mb-12 reveal">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} style={{ color: 'var(--primary)' }} />
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Poppins' }}>Areas of Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span key={item} className="tech-tag">{item}</span>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} style={{ color: 'var(--primary)' }} />
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Poppins' }}>Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="timeline-item glass-card p-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>{edu.field}</p>
                  </div>
                  <span className="tech-tag">{edu.duration}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {edu.institution}, {edu.location}
                </p>
                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                  <span className="font-semibold">CGPA: <span style={{ color: 'var(--primary)' }}>{edu.cgpa}</span></span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Coursework</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.coursework.map((c) => (
                      <span key={c} className="tech-tag">{c}</span>
                    ))}
                  </div>
                </div>
                {edu.achievements.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Achievements</span>
                    <ul className="mt-2 space-y-1">
                      {edu.achievements.map((a) => (
                        <li key={a} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                          <Award size={14} style={{ color: 'var(--accent)' }} /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
