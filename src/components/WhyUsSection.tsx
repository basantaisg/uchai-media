import { motion } from "framer-motion";
import { XCircle, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const WhyUsSection = () => {
  return (
    <section id="origin" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <motion.h2
          custom={0}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
        >
          Why <span className="gradient-text">UCHAI</span> Rose to the Top.
        </motion.h2>
        <motion.p
          custom={1}
          variants={fadeUp}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          We didn't follow the playbook — we rewrote it.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 – The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 glow-border group hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
              <XCircle className="text-destructive" size={20} />
            </div>
            <h3 className="text-xl font-bold">The Old Way.</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Slow turnaround times, bloated retainer fees, and outdated strategies
            that look like they were made a decade ago. Most agencies in Nepal still
            operate on borrowed time and recycled ideas.
          </p>
        </motion.div>

        {/* Card 2 – The Uchai Way */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl p-8 glow-border group hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Rocket className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-bold">History in the Making.</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We stripped away the corporate nonsense. Super-fast delivery, elite-tier
            quality, and modern storytelling designed to dominate today's attention
            economy. Results that speak louder than promises.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
