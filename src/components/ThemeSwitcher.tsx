import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

type Theme = 'prime-dark' | 'light';

interface ThemeOption {
  id: Theme;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const themes: ThemeOption[] = [
  { 
    id: 'prime-dark', 
    name: 'Prime Dark', 
    icon: FaMoon,
    description: 'Tactical command center'
  },
  { 
    id: 'light', 
    name: 'Ivory Light', 
    icon: FaSun,
    description: 'Premium elegance'
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('prime-dark');
  const [isOpen, setIsOpen] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    if (theme === 'prime-dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme)!;
  const CurrentIcon = currentThemeData.icon;

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--glass-bg)] backdrop-blur-md hover:border-[var(--color-accent)] transition-all duration-300 group"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch theme"
      >
        <motion.div
          animate={{ rotate: currentTheme === 'prime-dark' ? [0, 5, -5, 0] : 360 }}
          transition={{ duration: currentTheme === 'prime-dark' ? 3 : 0.5, repeat: currentTheme === 'prime-dark' ? Infinity : 0 }}
        >
          <CurrentIcon className="text-lg text-[var(--color-accent)]" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 z-50 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-2xl"
            >
              <div className="p-2">
                <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)]">
                  <FaSun className="text-[var(--color-accent)]" />
                  Select Theme
                </div>
                
                <div className="mt-1 space-y-1">
                  {themes.map((theme) => {
                    const Icon = theme.icon;
                    const isActive = currentTheme === theme.id;
                    
                    return (
                      <motion.button
                        key={theme.id}
                        onClick={() => handleThemeChange(theme.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left group ${
                          isActive 
                            ? 'bg-[var(--color-accent-dim)] border border-[var(--color-accent)]' 
                            : 'hover:bg-[var(--color-accent-dim)] border border-transparent'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`p-2 rounded-md ${isActive ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-bg-tertiary)]'} transition-colors`}>
                          <Icon className={`text-sm ${isActive ? 'text-[var(--color-bg-primary)]' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)]'} transition-colors`} />
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'}`}>
                            {theme.name}
                          </div>
                          <div className="text-xs text-[var(--color-text-secondary)]">
                            {theme.description}
                          </div>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
