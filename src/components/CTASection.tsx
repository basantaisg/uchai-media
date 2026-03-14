import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-10 md:p-16 text-center glow-border relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Ready to scale at the
            <br />
            <span className="gradient-text">speed of light?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get a free audit of your current marketing and discover what UCHAI
            MEDIA can do for your brand.
          </p>
          <a
            href="#"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-primary-foreground text-lg"
          >
            Claim Your Free Audit <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
