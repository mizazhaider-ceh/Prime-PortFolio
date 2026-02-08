import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGlobeEurope } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    
    try {
      const formData = new FormData(form.current);
      const response = await fetch('https://formspree.io/f/xldjdnlr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        if (form.current) form.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto mb-12 md:mb-20">
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] font-cyber mb-4">Let's Build The Future</h2>
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">Open to DevSecOps, Security Automation, and AI Security Roles</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left Side - Form */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass-card p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]" />
          
          <h3 className="text-2xl font-bold text-[var(--color-text-heading)] mb-8 font-cyber">Initialize Connection</h3>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6" action="https://formspree.io/f/xldjdnlr" method="POST">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-mono text-[var(--color-accent)] mb-2 group-focus-within:text-[var(--color-accent-secondary)] transition-colors">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                required
                className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg p-4 text-[var(--color-text-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono"
                placeholder="root"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-mono text-[var(--color-accent)] mb-2 group-focus-within:text-[var(--color-accent-secondary)] transition-colors">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required
                className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg p-4 text-[var(--color-text-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono"
                placeholder="user@example.com"
              />
            </div>
            <div className="group">
              <label htmlFor="subject" className="block text-sm font-mono text-[var(--color-accent)] mb-2 group-focus-within:text-[var(--color-accent-secondary)] transition-colors">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject"
                required
                className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg p-4 text-[var(--color-text-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono"
                placeholder="Collaboration Opportunity"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-mono text-[var(--color-accent)] mb-2 group-focus-within:text-[var(--color-accent-secondary)] transition-colors">Message</label>
              <textarea 
                name="message"
                id="message"
                rows={5}
                required
                className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg p-4 text-[var(--color-text-heading)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-mono"
                placeholder="> Enter message..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className="w-full py-4 bg-[var(--color-accent-dim)] border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-mono font-bold hover:bg-[var(--color-accent)]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {status === 'idle' && <><FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Send Message</>}
              {status === 'sending' && 'Transmitting...'}
              {status === 'success' && 'Message Received!'}
              {status === 'error' && 'Transmission Failed'}
            </button>
          </form>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between space-y-12"
        >
          <div className="space-y-8">
            <div className="p-6 glass rounded-xl hover:border-[var(--color-accent)] transition-colors card-hover">
               <h4 className="text-[var(--color-accent)] font-mono mb-2 text-sm">Location</h4>
               <div className="flex items-center gap-4 text-[var(--color-text-heading)] text-xl font-bold">
                 <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                   <FaMapMarkerAlt className="text-[var(--color-accent)] flex-shrink-0" />
                 </motion.div>
                 Belgium (Wortegem)
               </div>
               <p className="text-[var(--color-text-secondary)] mt-2 text-sm pl-9">Open to Remote & Hybrid</p>
            </div>

            <div className="p-6 glass rounded-xl hover:border-[var(--color-accent)] transition-colors card-hover">
               <h4 className="text-[var(--color-accent)] font-mono mb-2 text-sm">Contact</h4>
               <div className="flex items-center gap-4 text-[var(--color-text-heading)] text-lg font-bold break-all">
                 <motion.div
                   animate={{ rotate: [0, 10, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                 >
                   <FaEnvelope className="text-[var(--color-accent-secondary)] flex-shrink-0" />
                 </motion.div>
                 mizazhaiderceh@gmail.com
               </div>
            </div>

            <div className="p-6 glass rounded-xl hover:border-[var(--color-accent)] transition-colors card-hover">
               <h4 className="text-[var(--color-accent)] font-mono mb-2 text-sm">Socials</h4>
               <div className="flex gap-6 text-3xl text-[var(--color-text-secondary)]">
                  <motion.a
                    href="https://github.com/mizazhaider-ceh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                    className="hover:text-[var(--color-accent)] transition-all"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/izaz-haider"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -5 }}
                    className="hover:text-[var(--color-accent)] transition-all"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                    className="hover:text-[var(--color-accent)] transition-all"
                  >
                    <FaMedium />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.3, rotate: -360, y: -5 }}
                    className="hover:text-[var(--color-accent)] transition-all"
                  >
                    <FaTwitter />
                  </motion.a>
               </div>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden glass border border-[var(--color-border-subtle)] flex items-center justify-center group">
             {/* Simulated Cyber Map */}
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:16px_16px] group-hover:opacity-50 transition-opacity" />
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
             
             <div className="text-center relative z-10">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               >
                 <FaGlobeEurope className="text-6xl text-[var(--color-text-secondary)] mx-auto mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-500" />
               </motion.div>
               <p className="font-cyber font-bold text-[var(--color-text-primary)]">Global Mindset</p>
               <p className="text-xs text-[var(--color-accent)] font-mono">Pakistan → Belgium</p>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
