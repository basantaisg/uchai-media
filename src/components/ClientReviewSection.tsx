import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import reviewRitesh from "@/assets/review-ritesh.png";
import reviewConsultancy from "@/assets/review-consultancy.png";

const reviews = [
  {
    name: "Ritesh",
    rating: 5,
    text: "I really liked the video. Uchai Media delivers exactly what they promise — fast, professional, and high quality. Couldn't ask for more!",
  },
  {
    name: "pkr_consultancy",
    rating: 5,
    text: "We really liked your work. Uchai Media is one of the best marketing agencies in Nepal. We will surely be in touch for more projects!",
  },
  {
    name: "Basanta",
    rating: 5,
    text: "Uchai Media completely transformed our social media presence. The content quality and turnaround speed is unmatched. Highly recommend them!",
  },
  {
    name: "Anya",
    rating: 5,
    text: "Working with Uchai Media was a game-changer. Their strategies brought real results and the team is incredibly responsive. Five stars all the way!",
  },
];

const chatScreenshots = [
  { src: reviewRitesh, alt: "WhatsApp review from Ritesh" },
  { src: reviewConsultancy, alt: "WhatsApp review from pkr_consultancy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ClientReviewSection = () => {
  return (
    <section id="reviews" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <MessageCircle size={14} />
          Real Messages. Real Results.
        </motion.div>
        <motion.h2
          custom={1}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
        >
          Client <span className="gradient-text">Reviews</span>
        </motion.h2>
        <motion.p custom={2} variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">
          Don't take our word for it — hear it straight from our clients.
        </motion.p>
      </motion.div>

      {/* Star Rating Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card rounded-2xl p-6 glow-border group hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              "{review.text}"
            </p>
            <p className="font-bold text-sm">— {review.name}</p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Screenshots */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
      >
        {chatScreenshots.map((shot, i) => (
          <motion.div
            key={shot.alt}
            custom={i}
            variants={fadeUp}
            className="glass-card rounded-2xl overflow-hidden p-3"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientReviewSection;
