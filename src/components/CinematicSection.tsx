import { motion } from "framer-motion";

const CinematicSection = () => {
  return (
    <section
      id="experience"
      className="relative h-[70vh] md:h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/brand-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-deep/60" />

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
