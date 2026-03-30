import { motion } from "framer-motion";
import { Shield, Thermometer, Droplets, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Stainless Steel",
    desc: "18/8 surgical-grade steel for unmatched durability and taste purity.",
  },
  {
    icon: Thermometer,
    title: "Temperature Retention",
    desc: "Double-wall vacuum insulation keeps drinks cold for 24h or hot for 12h.",
  },
  {
    icon: Droplets,
    title: "Leak Proof Design",
    desc: "Precision-machined cap with medical-grade silicone seal. Zero leaks.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Eliminate 1,460 plastic bottles per year. Carbon-neutral manufacturing.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-metallic-light mb-4">
            Engineered to Perfection
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every detail designed with purpose. Every feature built for
            excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:border-glow-blue/20"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-glow-blue/10 group-hover:bg-glow-blue/20 transition-colors duration-300">
                <f.icon className="w-5 h-5 text-glow-blue" />
              </div>
              <h3 className="font-display text-lg text-metallic-light mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
