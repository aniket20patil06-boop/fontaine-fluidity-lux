import { motion } from "framer-motion";
import bottleImg from "@/assets/bottle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-navy">
      {/* Radial glow */}
      <div className="absolute inset-0 gradient-radial-glow" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-metallic-light mb-4"
        >
          FONTAINE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-muted-foreground tracking-[0.3em] uppercase text-sm md:text-base mb-12"
        >
          Where Purity Meets Perfection
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="relative mb-12"
        >
          {/* Glow behind bottle */}
          <div className="absolute inset-0 -inset-x-12 rounded-full bg-glow-blue/10 blur-3xl animate-pulse-glow" />
          <motion.img
            src={bottleImg}
            alt="Fontaine Premium Stainless Steel Water Bottle"
            className="relative w-[280px] md:w-[420px] lg:w-[520px] object-contain drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.a
          href="#product"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="btn-premium"
        >
          Explore
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-metallic/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-metallic/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
