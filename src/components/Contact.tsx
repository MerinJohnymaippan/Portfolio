import { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Download, CheckCircle2 } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'c630addf-3060-4117-be3b-81674c321632';

    if (!accessKey) {
      alert('Web3Forms access key is not configured.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert('Submission failed: ' + result.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socials = [
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personal.github, label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="glow-orb w-96 h-96 top-0 left-1/4" style={{ background: '#2563EB' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's build something intelligent together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="reveal-left space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-medium hover:underline" style={{ color: 'var(--primary)' }}>{info.value}</a>
                      ) : (
                        <div className="text-sm font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Poppins' }}>Follow Me</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
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

            <a href={personal.resumePDF} download className="btn-primary w-full justify-center">
              <Download size={18} /> Download Resume
            </a>
          </div>

          {/* Contact form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="btn-primary w-full justify-center disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full loading-spinner" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
