import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setHovering(!!isInteractive);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
          width: hovering ? '30px' : '20px',
          height: hovering ? '30px' : '20px',
          marginLeft: hovering ? '-5px' : '0',
          marginTop: hovering ? '-5px' : '0',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
          transform: hovering ? 'scale(1.5)' : 'scale(1)',
          borderColor: hovering ? 'rgba(6, 182, 212, 0.5)' : 'rgba(37, 99, 235, 0.3)',
        }}
      />
    </>
  );
}
