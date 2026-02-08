import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollTop / docHeight) * 100;
          
          setScrolled(scrollTop > 50);
          setScrollProgress(progress);
          
          // Detect active section
          const sections = navLinks.map(link => document.querySelector(link.href));
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(navLinks[i].href);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-[var(--color-accent)] z-[100] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-heavy shadow-2xl py-3 backdrop-blur-2xl border-b border-[var(--color-accent)]/20' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Animated Logo */}
          <motion.a 
            href="#" 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="flex items-center gap-2 sm:gap-3"
            >
              {/* Shield Icon with Gradient */}
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  {/* Shield Shape */}
                  <path d="M20 2 L35 8 L35 20 C35 28 20 36 20 36 C20 36 5 28 5 20 L5 8 L20 2 Z" 
                    fill="url(#logoGradient)" 
                    stroke="#06b6d4" 
                    strokeWidth="2"/>
                  {/* Security Lock in Center */}
                  <rect x="16" y="15" width="8" height="10" rx="1" fill="#000" opacity="0.9"/>
                  <circle cx="20" cy="13" r="3" fill="none" stroke="#000" strokeWidth="2" opacity="0.9"/>
                  {/* Keyhole */}
                  <circle cx="20" cy="19" r="1.5" fill="#06b6d4"/>
                  <rect x="19.5" y="19" width="1" height="3" fill="#06b6d4"/>
                </svg>
              </motion.div>
              
              {/* Text Logo */}
              <div className="flex flex-col leading-none">
                <motion.span 
                  className="text-lg sm:text-xl md:text-2xl font-bold font-cyber text-[var(--color-accent)]"
                  whileHover={{ 
                    textShadow: '0 0 20px rgba(6, 182, 212, 0.8)'
                  }}
                >
                  Muhammad Izaz Haider
                </motion.span>
                <span className="hidden sm:block text-[10px] sm:text-xs font-mono text-[var(--color-accent-secondary)] opacity-70">
                  Pentester | AI & Security Engineer | DevSecOps
                </span>
              </div>
            </motion.div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-mono transition-all duration-300 rounded-lg group ${
                  activeSection === link.href 
                    ? 'text-[var(--color-accent)]' 
                    : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active indicator */}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-[var(--color-accent)] font-bold text-xs">0{i + 1}.</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </span>
                
                {/* Underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {/* Social Links */}
            <motion.a 
              href="https://github.com/mizazhaider-ceh?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/muhammad-izaz-haider-091639314/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>

            <div className="w-px h-6 bg-[var(--color-text-secondary)]/30" />
            
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3 sm:gap-4">
            <ThemeSwitcher />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl text-[var(--color-accent)] rounded-lg border-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm glass-heavy shadow-2xl z-50 flex flex-col p-6 sm:p-8 overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-2xl text-[var(--color-accent)] rounded-lg border-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <HiX />
              </motion.button>

              {/* Mobile Logo */}
              <motion.div 
                className="text-3xl font-bold font-cyber text-[var(--color-accent)] mb-8 mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Muhammad Izaz Haider
              </motion.div>

              {/* Mobile Nav Links */}
              <div className="flex-1 flex flex-col gap-2 mb-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`relative group px-4 py-4 rounded-xl font-mono transition-all ${
                      activeSection === link.href
                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        : 'text-[var(--color-text-primary)] hover:bg-[var(--color-accent)]/5'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--color-accent)] font-bold text-sm">0{i + 1}.</span>
                      <span className="text-lg group-hover:text-[var(--color-accent)] transition-colors">{link.name}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {activeSection === link.href && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--color-accent)] rounded-r"
                        layoutId="mobileActive"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <motion.div 
                className="flex items-center gap-6 mb-6 pb-6 border-b border-[var(--color-text-secondary)]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="https://github.com/mizazhaider" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/mizazhaider" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <FaLinkedin />
                </a>
              </motion.div>

              {/* Mobile Resume Button */}
              <motion.a 
                href="/resume.pdf" 
                target="_blank"
                className="w-full px-6 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] font-mono font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-[var(--color-accent)]/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiDownload className="text-xl" />
                Download Resume
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
