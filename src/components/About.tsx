import { motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-container">
        <div className="matrix-pattern">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="matrix-column" />
          ))}
        </div>
        <div className="matrix-pattern">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="matrix-column" />
          ))}
        </div>
        <div className="matrix-pattern">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="matrix-column" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <FaShieldAlt className="text-[var(--color-accent)] text-2xl" />
            <span className="text-sm font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">About Me</span>
            <FaShieldAlt className="text-[var(--color-accent)] text-2xl" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-heading)] mb-4 md:mb-6 px-4">
            Securing the Digital Future with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]">
             CyberSecurity & AI & Innovation
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed px-4">
            A passionate cybersecurity professional merging offensive security expertise 
            with cutting-edge artificial intelligence to build safer digital ecosystems.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          
          {/* Left Column - Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-4 sm:p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-500 max-w-md mx-auto lg:mx-0">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] rounded-2xl blur-lg opacity-50" />
                <div className="relative w-full max-w-[320px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[var(--color-border)]">
                  <img 
                    src="/images/profile.png" 
                    alt="Muhammad Izaz Haider - Professional Cybersecurity Portfolio Photo" 
                    className="w-full h-full object-cover object-center"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                    }}
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="427"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-accent-secondary)]/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[var(--color-accent)]">MIH</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 text-center lg:text-left">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-heading)] mb-1">
                    Muhammad Izaz Haider
                  </h3>
                  <p className="text-[var(--color-accent)] font-mono text-xs">
                    @mizazhaider-ceh
                  </p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)] justify-center lg:justify-start">
                    <FaGraduationCap className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-xs">BSc Cybersecurity @ Howest University</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)] justify-center lg:justify-start">
                    <FaRocket className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-xs">Founder & CEO, PenTrix</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)] justify-center lg:justify-start">
                    <FaShieldAlt className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-xs">Pentester | DevSecOps | Security Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio Story */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-[var(--color-border)] h-full hover:border-[var(--color-accent)]/50 transition-all duration-500">
              <div className="space-y-4 md:space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base sm:text-lg"
                >
                  I'm a <span className="text-[var(--color-accent)] font-bold text-lg sm:text-xl">cybersecurity innovator</span> with over <span className="text-[var(--color-text-heading)] font-semibold">4 years</span> of hands-on experience in offensive security, Development, AI integration. My journey began with a fascination for ethical hacking and has evolved into pioneering{' '}
                  <span className="text-[var(--color-accent)] font-bold">AI-powered security solutions</span>.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="border-l-4 border-[var(--color-accent)] pl-4 sm:pl-6 py-2 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent rounded-r-lg"
                >
                  <p className="text-base sm:text-lg">
                    Currently pursuing my <span className="text-[var(--color-text-heading)] font-bold text-lg sm:text-xl">BSc in Cybersecurity</span> at Howest University, Belgium, I've maintained a stellar <span className="text-[var(--color-accent)] font-bold text-lg sm:text-xl">16.4 GPA</span> while simultaneously working as a DevSecOps Engineer. My academic excellence is matched by real-world impact – I've developed <span className="text-[var(--color-accent)] font-bold">Various Tools,Platforms and Projects</span>
                  </p>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg"
                >
                  As the <span className="text-[var(--color-text-heading)] font-bold text-lg sm:text-xl">Founder & CEO of PenTrix</span>, I'm building an educational platform that democratizes cybersecurity knowledge. My work bridges the gap between traditional penetration testing and modern AI capabilities, creating tools that are both powerful and accessible.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-accent-secondary)]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[var(--color-accent)]/20"
                >
                  <p className="text-base sm:text-lg">
                    With <span className="text-[var(--color-accent)] font-bold text-lg sm:text-xl">50+ industry certifications</span> and a proven track record of delivering projects and completing tasks at <span className="text-[var(--color-text-heading)] font-bold">high‑impact</span>, I bring a unique combination of technical expertise, innovation, and dedication to every challenge I undertake.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
