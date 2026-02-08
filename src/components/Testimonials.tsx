import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Muhammad approaches security engineering with a rare blend of technical depth and strategic thinking. He doesn't just look for vulnerabilities — he analyzes systems holistically, designs secure architectures, and consistently documents his work to production-grade standards. On the CBAM platform, he has contributed significantly to secure ingestion APIs, async validation infrastructure, and DevSecOps pipeline hardening — always combining security-first principles with strong collaboration and ownership.",
    author: "Jo Van Montfort",
    role: "Founder, DigiaCarbon",
    icon: FaLinkedin,
    highlight: true
  },
  {
    quote: "100+ hands-on labs completed. CTF challenges, real penetration tests, and practical security audits.",
    author: "Skills Portfolio",
    role: "Practical Experience",
    icon: FaStar,
    highlight: false
  },
  {
    quote: "Pakistan to Belgium cybersecurity journey - proof that talent knows no geography. The Next-Gen Technologist.",
    author: "PakSphere Recognition",
    role: "Tech Community Pakistan",
    icon: FaStar,
    highlight: false
  },
  {
    quote: "Graduated with 16.40/20 while working 20 hours per week. Exceptional time management and dedication.",
    author: "Academic Record",
    role: "Howest University",
    icon: FaStar,
    highlight: false
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] font-cyber mb-4">Words That Matter</h2>
        <p className="text-[var(--color-text-secondary)]">Feedback from mentors, employers, and the community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative glass p-8 rounded-xl border ${t.highlight ? 'border-[var(--color-accent)] glow' : 'border-[var(--color-border-subtle)]'} flex flex-col card-hover`}
          >
            <FaQuoteLeft className={`text-4xl mb-6 ${t.highlight ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)] opacity-20'}`} />
            
            <p className={`text-lg italic mb-8 leading-relaxed ${t.highlight ? 'text-[var(--color-text-heading)]' : 'text-[var(--color-text-primary)]'}`}>
              "{t.quote}"
            </p>
            
            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-[var(--color-border-subtle)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-xl text-[var(--color-accent)]">
                 <t.icon />
              </div>
              <div>
                <p className="font-bold text-[var(--color-text-heading)] font-cyber">{t.author}</p>
                <p className="text-sm text-[var(--color-accent)] font-mono">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
