import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-glow-blue"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
