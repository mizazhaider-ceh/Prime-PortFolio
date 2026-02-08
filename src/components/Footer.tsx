import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="glass-heavy pt-16 pb-8 relative text-center md:text-left border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="text-2xl font-bold font-cyber text-[var(--color-text-heading)]">
              Muhammad Izaz Haider
            </div>
            <p className="text-[var(--color-text-secondary)] font-mono text-sm max-w-md">
              From Pakistan 🇵🇰 with ambition. To Belgium 🇧🇪 with purpose. <br/>
              Building the future of secure AI.
            </p>
          </div>

          <div className="flex gap-6 text-2xl text-[var(--color-text-secondary)]">
            <motion.a
              href="https://github.com/mizazhaider-ceh?tab=repositories"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              transition={{ duration: 0.5 }}
              className="hover:text-[var(--color-accent)] transition-all"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-izaz-haider-091639314/"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ duration: 0.3 }}
              className="hover:text-[var(--color-accent)] transition-all"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -360, y: -5 }}
              transition={{ duration: 0.5 }}
              className="hover:text-[var(--color-accent)] transition-all"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-[var(--color-border-subtle)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[var(--color-text-secondary)]">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 font-mono">
            {links.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[var(--color-accent)] transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-mono">&copy; 2026 Muhammad Izaz Haider</p>
            <span className="text-xs text-[var(--color-text-secondary)] opacity-70 font-mono flex items-center gap-1.5">
              Built with React <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <FaHeart className="text-red-500 text-[10px]" />
              </motion.span> Tailwind • Three.js
            </span>
          </div>

        </div>
      </div>

      <motion.button 
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all shadow-lg z-40 hidden md:block group glow"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowUp />
        </motion.div>
      </motion.button>
    </footer>
  );
}
