import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ background: 'var(--bg)' }}
    >
      <div className="relative mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white animate-pulse-glow"
          style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
        >
          <Code2 size={32} />
        </div>
      </div>
      <div className="text-xl font-bold gradient-text mb-4" style={{ fontFamily: 'Poppins' }}>
        Merin Johny
      </div>
      <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <div className="h-full w-1/4 loader-bar rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #06B6D4)' }} />
      </div>
    </div>
  );
}
