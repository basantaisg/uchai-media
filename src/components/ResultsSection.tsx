import { motion } from "framer-motion";
import portfolioGrid from "@/assets/portfolio-grid.png";
import portfolioGrid2 from "@/assets/portfolio-grid-2.png";
import analyticsTiktok from "@/assets/analytics-tiktok.png";
import analyticsInstagram from "@/assets/analytics-instagram.png";
import analyticsFacebook from "@/assets/analytics-facebook.png";

const stats = [
  { value: "75M+", label: "Total Views Generated" },
  { value: "23M", label: "Post Views (60 days)" },
  { value: "6M", label: "Instagram Views" },
  { value: "1.6M", label: "Facebook Views" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
          Numbers Don't <span className="gradient-text-accent">Lie.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real analytics. Real growth. No fluff.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 text-center glow-border"
          >
            <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{s.value}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Portfolio & Analytics Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.a
          href="https://www.tiktok.com/@professional.edu.pkr/video/7604381238987722000"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden glow-border block cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          <img src={portfolioGrid} alt="UCHAI Media portfolio - resort marketing" className="w-full h-full object-cover" />
        </motion.a>
        <motion.a
          href="https://www.tiktok.com/@professional.edu.pkr/video/7603669306328534288"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl overflow-hidden glow-border block cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          <img src={portfolioGrid2} alt="UCHAI Media portfolio - nightlife and dining" className="w-full h-full object-cover" />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-1 glow-border flex flex-col gap-1"
        >
          <img src={analyticsInstagram} alt="Instagram analytics" className="rounded-xl w-full object-cover flex-1" />
          <img src={analyticsTiktok} alt="TikTok analytics" className="rounded-xl w-full object-cover flex-1" />
          <img src={analyticsFacebook} alt="Facebook analytics" className="rounded-xl w-full object-cover flex-1" />
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
