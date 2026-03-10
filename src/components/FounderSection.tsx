import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 md:p-12 glow-border relative overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Avatar placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
            <span className="text-5xl font-black gradient-text">S</span>
          </div>

          <div>
            <Quote className="text-primary/40 mb-4" size={32} />
            <p className="text-foreground/90 leading-relaxed mb-6 text-sm sm:text-base">
              "I got tired of watching local businesses get drained by agencies
              that took months to deliver basic campaigns. I started UCHAI MEDIA
              with one rule: Deliver world-class, high-end results, and do it
              faster than anyone else thought possible."
            </p>
            <div>
              <h3 className="text-lg font-bold">Sushant</h3>
              <p className="text-sm text-muted-foreground">
                Founder & Lead Strategist, UCHAI MEDIA
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
