import { motion } from 'framer-motion';
import { FaCertificate, FaMedal, FaTrophy, FaAward, FaShieldAlt } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const certifications = [
  { 
    name: "Certified Network Security Practitioner", 
    abbr: "CNSP",
    org: "The SecOps Group", 
    id: "10756390", 
    badge: "Merit",
    icon: FaMedal,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    name: "CompTIA PenTest+ Specialization", 
    abbr: "PenTest+",
    org: "Packt", 
    id: "6A9YE5CD28S2",
    icon: FaCertificate,
    color: "from-red-400 to-pink-500"
  },
  { 
    name: "Certified Ethical Hacking v12", 
    abbr: "CEH",
    org: "LearnKartS", 
    id: "D4IJ4W9WWMGX",
    icon: FaTrophy,
    color: "from-green-400 to-emerald-500"
  },
  { 
    name: "Google AI Essentials", 
    abbr: "AI",
    org: "Google", 
    id: "WPVJT3JQEMGT",
    icon: SiGoogle,
    color: "from-blue-400 to-cyan-500"
  },
  { 
    name: "AI Agents & Agentic AI", 
    abbr: "Agentic AI",
    org: "Vanderbilt University", 
    id: "H8Q886HEG7RP",
    icon: FaAward,
    color: "from-purple-400 to-violet-500"
  },
  { 
    name: "Application Security for Developers", 
    abbr: "AppSec",
    org: "IBM", 
    id: "RS93ZODN6CMN",
    icon: FaShieldAlt,
    color: "from-indigo-400 to-blue-500"
  },
  { 
    name: "Advanced Python Scripting", 
    abbr: "Python",
    org: "InfoSEC", 
    id: "0ITT9HKQTTLL",
    icon: FaCertificate,
    color: "from-teal-400 to-cyan-500"
  },
  { 
    name: "Linux 101 & Fundamentals", 
    abbr: "Linux",
    org: "TCM Security", 
    id: "cert_llr11yn4",
    icon: FaMedal,
    color: "from-amber-400 to-yellow-500"
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 bg-[var(--color-bg-secondary)] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[var(--color-accent)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[var(--color-accent-secondary)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-12 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaTrophy className="text-3xl text-[var(--color-accent)]" />
          </motion.div>
          <span className="text-sm font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
            Professional Achievements
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-heading)] font-cyber mb-4 md:mb-6"
        >
          50+ Certifications.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]">
            Zero Excuses.
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl"
        >
          Proof that I'm always learning. From fundamentals to advanced offensive security and AI architecture.
        </motion.p>
      </div>

      {/* Marquee Container with 3D effects */}
      <div className="relative w-full overflow-hidden py-6 md:py-10">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent z-10" />

        <motion.div 
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 50
          }}
        >
          {[...certifications, ...certifications, ...certifications].map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="inline-block w-[320px] sm:w-[380px] md:w-[400px] glass-card p-5 md:p-7 rounded-2xl border border-[var(--color-border)]/40 hover:border-[var(--color-accent)] transition-all duration-500 shrink-0 whitespace-normal group relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${cert.color}`} />
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  {/* Header with icon and badge */}
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`text-3xl md:text-4xl bg-gradient-to-br ${cert.color} bg-clip-text text-transparent`}
                    >
                      <Icon />
                    </motion.div>
                    {cert.badge && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-lg border border-yellow-500/20 backdrop-blur-sm"
                      >
                        ⭐ {cert.badge}
                      </motion.span>
                    )}
                  </div>

                  {/* Cert name and abbreviation */}
                  <div className="mb-3">
                    <motion.h3 
                      className="font-bold text-lg md:text-xl text-[var(--color-text-heading)] mb-1.5 group-hover:text-[var(--color-accent)] transition-colors leading-snug"
                      whileHover={{ x: 5 }}
                    >
                      {cert.name}
                    </motion.h3>
                    <p className={`text-xs font-mono font-bold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                      {cert.abbr}
                    </p>
                  </div>

                  {/* Organization */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                      {cert.org}
                    </p>
                  </div>

                  {/* Credential ID */}
                  <div className="pt-3 border-t border-[var(--color-border)]/50">
                    <p className="text-xs font-mono text-[var(--color-text-secondary)]/70 group-hover:text-[var(--color-text-secondary)] transition-colors">
                      ID: {cert.id}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* View all button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8 md:mt-12 relative z-10"
      >
        <motion.button 
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group px-6 md:px-8 py-3 md:py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-mono rounded-xl hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/40 text-sm md:text-base"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <FaMedal className="text-xl" />
          </motion.div>
          View All 50+ Certifications
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
