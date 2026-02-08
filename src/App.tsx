import { useEffect, useState } from 'react';

// Direct imports - let Vite handle code splitting
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentFocus from './components/CurrentFocus';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Recognition from './components/Recognition';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ThreeBackground, setThreeBackground] = useState<React.ComponentType | null>(null);

  // Remove CSS splash screen instantly when React mounts
  useEffect(() => {
    const splash = document.getElementById('splash');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 300);
    }

    // Unregister old service workers to prevent cache issues
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
    }

    // Check if desktop for Three.js
    const checkDesktop = window.innerWidth > 768;
    setIsDesktop(checkDesktop);
    
    // Only load Three.js on desktop
    if (checkDesktop) {
      import('./components/ThreeBackground').then(module => {
        setThreeBackground(() => module.default);
      });
    }
    
    const handleResize = () => {
      const nowDesktop = window.innerWidth > 768;
      setIsDesktop(nowDesktop);
      
      // Load Three.js if resized to desktop and not already loaded
      if (nowDesktop && !ThreeBackground) {
        import('./components/ThreeBackground').then(module => {
          setThreeBackground(() => module.default);
        });
      }
    };
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <main className="relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent-dim)] selection:text-[var(--color-accent)] overflow-x-hidden">
        {/* Three.js Background - only load and render on desktop */}
        {isDesktop && ThreeBackground && <ThreeBackground />}
        
        <Navbar />
        <Hero />
        <About />
        <CurrentFocus />
        <Projects />
        <Experience />
        <Skills />
        <Recognition />
        <Certifications />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
