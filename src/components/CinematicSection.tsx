import { motion } from "framer-motion";

const CinematicSection = () => {
  return (
    <section
      id="experience"
      className="relative h-[70vh] md:h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Video background (using animated gradient as cinematic stand-in) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-navy" />
        {/* Animated water-like layers */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at ${30 + i * 15}% ${40 + i * 10}%, hsl(215 80% 55% / ${0.06 - i * 0.01}), transparent 60%)`,
            }}
            animate={{
              x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 20 * (i % 2 === 0 ? -1 : 1), 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-muted-foreground tracking-[0.4em] uppercase text-sm mb-4"
        >
          A Cinematic Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-metallic-light"
        >
          Experience
          <br />
          <span className="text-glow-blue">Purity</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default CinematicSection;
