import { motion } from "framer-motion";
import { Droplets } from "lucide-react";

const PuritySection = () => {
  return (
    <section id="purity" className="relative section-padding overflow-hidden">
      {/* Water shimmer background */}
      <div className="absolute inset-0 water-shimmer" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-glow-blue/20 mb-8"
        >
          <Droplets className="w-7 h-7 text-glow-blue" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl text-metallic-light mb-6"
        >
          Inside Purity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-16"
        >
          The interior of every Fontaine bottle features an electropolished
          surface that prevents metallic taste and bacterial buildup. Pure water
          stays pure — the way nature intended.
        </motion.p>

        {/* Animated water flow visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card"
        >
          {/* Animated water layers */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-x-0 rounded-full"
              style={{
                bottom: `${20 + i * 15}%`,
                height: "40%",
                background: `radial-gradient(ellipse at center, hsl(215 80% 55% / ${0.08 - i * 0.02}), transparent)`,
              }}
              animate={{
                y: [0, -10, 0],
                scaleX: [1, 1.02, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 rounded-full border border-glow-blue/20 flex items-center justify-center mb-4"
            >
              <Droplets className="w-10 h-10 text-glow-blue/60" />
            </motion.div>
            <p className="text-metallic-light/70 tracking-widest uppercase text-xs">
              Zero contamination
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PuritySection;
