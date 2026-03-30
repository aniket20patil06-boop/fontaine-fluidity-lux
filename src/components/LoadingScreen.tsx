import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-navy"
        >
          {/* Ripple circles */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full border border-glow-blue/30 ripple-1" />
            <div className="absolute w-16 h-16 rounded-full border border-glow-blue/20 ripple-2" />
            <div className="absolute w-16 h-16 rounded-full border border-glow-blue/10 ripple-3" />
            {/* Droplet */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-glow-blue/60"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-metallic-light tracking-[0.4em] uppercase text-sm font-display"
          >
            Fontaine
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
