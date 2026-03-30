import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="section-padding flex items-center justify-center"
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl text-metallic-light mb-6"
        >
          Redefine Hydration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground mb-10 text-lg"
        >
          Elevate every sip with Fontaine.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-premium-filled text-base px-12 py-4"
        >
          Buy Now
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
