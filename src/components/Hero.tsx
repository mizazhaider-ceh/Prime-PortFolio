import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
      
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-accent-secondary)]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                          linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-border)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight"
              >
                <span className="text-[var(--color-text-heading)]">Muhammad</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-[var(--color-accent)]">
                  Izaz Haider
                </span>
              </motion.h1>
            </div>

            {/* Typewriter Role */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-12 sm:h-14 md:h-16"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--color-text-secondary)]">
                <Typewriter
                  words={[
                    'Penetration Tester',
                    'Security Engineer',
                    'Ai x Cybersecurity',
                    'DevSecOps Engineer',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  cursorColor='var(--color-accent)'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              19-year-old pentester and security engineer, now building 
              <span className="text-[var(--color-text-heading)] font-medium"> AI-powered solutions and securing real‑world infrastructure </span> 
            
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto justify-center"
                style={{ 
                  backgroundColor: '#06b6d4',
                  color: '#000000',
                  fontWeight: '900',
                  letterSpacing: '0.5px',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)'
                }}
              >
                <HiOutlineMail className="text-2xl" style={{ color: '#000000' }} />
                <span style={{ fontWeight: '900', color: '#000000' }}>Get In Touch</span>
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" style={{ color: '#000000' }} />
              </motion.a>
              
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-6 pt-6 justify-center lg:justify-start"
            >
              <span className="text-sm text-[var(--color-text-muted)] font-medium">Follow me</span>
              <div className="w-12 h-[1px] bg-[var(--color-border)]" />
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/mizazhaider-ceh?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/muhammad-izaz-haider-091639314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] rounded-full border border-[var(--color-border)] opacity-50" />
              <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[540px] lg:h-[540px] rounded-full border border-dashed border-[var(--color-border-subtle)] opacity-30 animate-spin" style={{ animationDuration: '30s' }} />
            </div>

            {/* Video Container */}
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/30 to-[var(--color-accent-secondary)]/30 rounded-3xl blur-3xl scale-75" />
              
              {/* Video Player */}
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border-4 border-[var(--color-accent)]/20 shadow-2xl shadow-[var(--color-accent)]/20 bg-[var(--color-bg-secondary)]">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                >
                  <source src="/images/robot.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Fallback */}
                <div className="hidden w-full h-full bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-accent-secondary)]/30 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[var(--color-accent)]">🤖</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
          />
        </div>
        <span className="text-xs font-medium text-[var(--color-text-muted)] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
