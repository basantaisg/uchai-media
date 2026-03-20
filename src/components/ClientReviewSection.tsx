import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import reviewRitesh from "@/assets/review-ritesh.png";
import reviewSarah from "@/assets/review-sarah.png";
import reviewDavid from "@/assets/review-david.png";
import reviewRamesh from "@/assets/review-ramesh.png";
import reviewSunita from "@/assets/review-sunita.png";

const reviews = [
  {
    name: "Ritesh",
    rating: 5,
    text: "I really liked the video. Uchai Media delivers exactly what they promise — fast, professional, and high quality. Couldn't ask for more!",
  },
  {
    name: "Sunita",
    rating: 5,
    text: "Mero boutique ko page ahile ekdam active chha ra sabai credit Uchai Media lai janchha. Post haru ko design, captions, ra customer lai attract garne tarika uniharuko ekdam unique chha. Kaam ma ekdam dedication dekhaunu hunchha. Aafno business lai digital platform ma grow garna chahanu hunchha bhane, Uchai Media is the best!",
  },
  {
    name: "Ramesh Thapa",
    rating: 5,
    text: "Uchai Media ko kaam ekdamai professional chha. Hami le hamro real estate project ko lagi video ra marketing ko kaam deko thiyum, ra result socheko vanda dherai ramro aayo. Team ekdam friendly chha, ra Nepali market ko trend uniharulai ramrari tha chha. Quality kaam chahine le Uchai Media lai nai samjhida hunchha.",
  },
  {
    name: "David (SAAS Founder)",
    rating: 5,
    text: "Uchai Media doesn't just make videos; they tell stories. We needed a way to explain a complex software product while keeping it human and engaging. The production quality, from lighting to editing, was top-tier. They are professional, responsive, and insanely creative. I wouldn't trust our visual branding to anyone else.",
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
  { src: reviewSarah, alt: "WhatsApp review from Sarah" },
  { src: reviewDavid, alt: "WhatsApp review from David" },
  { src: reviewRamesh, alt: "WhatsApp review from Ramesh Thapa" },
  { src: reviewSunita, alt: "WhatsApp review from Sunita" },
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
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
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
      >
        {chatScreenshots.map((shot, i) => (
          <motion.div
            key={shot.alt}
            custom={i}
            variants={fadeUp}
            className="glass-card rounded-2xl overflow-hidden p-2"
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
