import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bottleImg from "@/assets/bottle.jpg";

const ProductSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      id="product"
      className="relative section-padding gradient-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Bottle */}
        <motion.div
          style={{ rotateY, scale, opacity }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 gradient-radial-glow" />
          <motion.img
            src={bottleImg}
            alt="Fontaine bottle interactive view"
            className="relative w-[260px] md:w-[380px] object-contain drop-shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-metallic-light mb-6">
            Crafted for
            <br />
            <span className="text-glow-blue">Excellence</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Every Fontaine bottle is precision-engineered from premium 18/8
            stainless steel, delivering an unmatched drinking experience that
            preserves the pure essence of your beverage.
          </p>
          <div className="flex gap-8">
            {[
              { value: "24h", label: "Cold" },
              { value: "12h", label: "Hot" },
              { value: "750", label: "ML" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display text-metallic-light">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
