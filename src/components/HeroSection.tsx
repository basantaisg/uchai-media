import { motion } from "framer-motion";
import { ArrowRight, Zap, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          Next-Gen Marketing in Nepal 🇳🇵
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Outpace the Competition.
          <br />
          <span className="gradient-text">Without the Bloat.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Traditional agencies in Nepal overcharge and underdeliver. UCHAI MEDIA
          was built to break the mold. We deliver high-end, hyper-fast marketing
          and visual assets that actually move the needle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/uchai-media/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow px-8 py-3.5 rounded-full font-semibold text-primary-foreground flex items-center gap-2"
          >
            <Calendar size={18} /> Book a Strategy Call <ArrowRight size={18} />
          </a>
          <a
            href="#results"
            className="btn-glass px-8 py-3.5 rounded-full font-semibold text-foreground flex items-center gap-2"
          >
            <Zap size={18} /> See Our Speed
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
