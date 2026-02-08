import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaStar, FaExternalLinkAlt, FaTerminal, FaWindows, FaRobot, FaShieldAlt, FaGraduationCap, FaSearchengin, FaNetworkWired, FaGlobe, FaCode, FaBrain, FaKey, FaMap, FaBook, FaLock } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si';

const categories = ['All', 'AI Security', 'Offensive Security', 'DevSecOps', 'Education', 'Strategy & Tools'];

const projects = [
  // 🥇 TIER 1 — Must-Have Flagship Projects
  {
    title: "Prime-PenTrix",
    titleColor: "text-purple-400",
    icon: FaGraduationCap,
    iconBg: "from-purple-500 to-pink-500",
    category: "AI Security",
    categoryTag: "🥇 Full-Stack • AI/ML • RAG • TypeScript",
    description: "Most technically advanced project. Full-stack SaaS (Next.js 16 + React 19 + PostgreSQL + pgvector). RAG AI engine, multi-provider AI, spaced repetition quizzes, 24+ tools. Production-ready architecture.",
    tech: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Next.js 16", color: "text-white" },
      { name: "PostgreSQL", color: "text-blue-500" },
      { name: "pgvector", color: "text-purple-400" },
      { name: "RAG", color: "text-green-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Prime-PenTrix",
    featured: true
  },
  {
    title: "Ai-Terminal-X",
    titleColor: "text-cyan-400",
    icon: SiLinux,
    iconBg: "from-cyan-500 to-blue-600",
    category: "AI Security",
    categoryTag: "🥈 AI Security • Linux Automation • Viral",
    description: "Signature project with viral LinkedIn reach. AI-powered Linux terminal assistant that translates natural language into safe, executable commands. Featured in blog post. Shows creativity + practical AI integration.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "Gemini AI", color: "text-green-400" },
      { name: "Linux", color: "text-yellow-400" }
    ],
    stars: 32,
    github: "https://github.com/mizazhaider-ceh/Ai-Terminal-X",
    featured: true
  },
  {
    title: "Sentinel-Copilot-S2",
    titleColor: "text-green-400",
    icon: FaShieldAlt,
    iconBg: "from-green-500 to-emerald-500",
    category: "AI Security",
    categoryTag: "🥉 AI SecOps • 11,707 Lines • Architecture",
    description: "11,707 lines from scratch, zero templates. Hybrid RAG engine, 46 modular files, 24+ tools. AI security copilot for monitoring, threat analysis & response. Demonstrates large-scale system architecture mastery.",
    tech: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "FastAPI", color: "text-green-400" },
      { name: "RAG", color: "text-purple-400" },
      { name: "SecOps", color: "text-red-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Sentinel-Copilot-S2",
    featured: true
  },
  {
    title: "Sub-Hunter",
    titleColor: "text-teal-400",
    icon: FaGlobe,
    iconBg: "from-teal-500 to-cyan-500",
    category: "Offensive Security",
    categoryTag: "🏆 TIER 1 • Subdomain • VHost • Cloud Detection",
    description: "Professional-grade offensive security tool (v5.0). Subdomain takeover detection, VHost discovery, JS parsing, cloud detection. Rivals real-world commercial tools. Polished production quality.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "OSINT", color: "text-cyan-400" },
      { name: "Bug Bounty", color: "text-red-400" },
      { name: "DNS", color: "text-teal-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Subhunter",
    featured: true
  },
  {
    title: "PortBlitz",
    titleColor: "text-orange-400",
    icon: FaNetworkWired,
    iconBg: "from-orange-500 to-yellow-500",
    category: "Offensive Security",
    categoryTag: "🏆 TIER 1 • AsyncIO • CVE Correlation • TUI",
    description: "Demonstrates async programming mastery with 500+ concurrent connections. CVE correlation engine, interactive TUI, tool bridging. Shows low-level networking & performance optimization expertise.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "AsyncIO", color: "text-purple-400" },
      { name: "CVE", color: "text-red-400" },
      { name: "Scanning", color: "text-yellow-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/PortBlitz",
    featured: true
  },
  {
    title: "X-Recon",
    titleColor: "text-red-400",
    icon: FaNetworkWired,
    iconBg: "from-red-500 to-orange-500",
    category: "Offensive Security",
    categoryTag: "🏆 TIER 1 • CLI + AI + Web Dashboard",
    description: "Multi-interface recon platform: CLI + AI + Web Dashboard. FastAPI backend with cyberpunk UI. Modular architecture showcases full-stack + API design skills. Portfolio eye-candy with substance.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "FastAPI", color: "text-green-400" },
      { name: "AI", color: "text-purple-400" },
      { name: "Dashboard", color: "text-cyan-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/X-Recon",
    featured: true
  },

  // 🔥 NEW TIER 1 ADDITIONS
  {
    title: "Icarus-X",
    titleColor: "text-indigo-400",
    icon: FaTerminal,
    iconBg: "from-indigo-500 to-purple-600",
    category: "Offensive Security",
    categoryTag: "🚀 NEW • Unified Pentesting • 500+ Async • AI",
    description: "Unified AI-powered pentesting framework. One CLI, multiple modes, blazing fast. Async recon (500+ concurrent), mass target import, AI command suggestions (Gemini), wordlist manager, payload generator. Complete pentest workflow automation.",
    tech: [
      { name: "Python 3.11+", color: "text-blue-400" },
      { name: "AsyncIO", color: "text-purple-400" },
      { name: "Typer", color: "text-green-400" },
      { name: "Rich", color: "text-pink-400" },
      { name: "AI", color: "text-cyan-400" }
    ],
    stars: 15,
    github: "https://github.com/mizazhaider-ceh/icarus-x",
    featured: true
  },
  {
    title: "active-automation",
    titleColor: "text-lime-400",
    icon: FaTerminal,
    iconBg: "from-lime-500 to-green-600",
    category: "Offensive Security",
    categoryTag: "💣 1400+ Lines • Bash • 32+ Features • Nmap",
    description: "Comprehensive Nmap automation powerhouse. 1400+ lines of pure Bash, 32+ scanning features from basic to advanced. Aggressive scans, stealth modes, firewall evasion, vulnerability detection. Speed-optimized with custom timing. Beautiful CLI with animations.",
    tech: [
      { name: "Bash", color: "text-green-400" },
      { name: "Nmap", color: "text-red-400" },
      { name: "Automation", color: "text-lime-400" },
      { name: "CLI", color: "text-cyan-400" }
    ],
    stars: 28,
    github: "https://github.com/mizazhaider-ceh/active-automation",
    featured: true
  },

  // 🥈 TIER 2 — Strong Supporting Projects
  {
    title: "Intel-Scan Pro",
    titleColor: "text-cyan-400",
    icon: FaSearchengin,
    iconBg: "from-cyan-500 to-teal-500",
    category: "Offensive Security",
    categoryTag: "🥈 OSINT • Dual Interface • 200 Threads",
    description: "Complete OSINT recon framework with CLI (Rich) + Gradio web GUI. DNS lookup, WHOIS reports, high-performance subdomain scanning (200 threads). Multi-format export (TXT/JSON/Markdown). Production-grade dual interface.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "Gradio", color: "text-orange-400" },
      { name: "Rich CLI", color: "text-green-400" },
      { name: "OSINT", color: "text-cyan-400" }
    ],
    stars: 12,
    github: "https://github.com/mizazhaider-ceh/Intel-Scan",
    featured: true
  },
  {
    title: "Ai-CMD-X",
    titleColor: "text-blue-400",
    icon: FaWindows,
    iconBg: "from-blue-500 to-cyan-500",
    category: "AI Security",
    categoryTag: "🥈 AI Automation • Windows • Quick Mode",
    description: "Windows counterpart to Ai-Terminal-X. AI-powered CMD assistant with Quick Mode, Interactive Mode, built-in learning, alias support, smart navigation. Boosts productivity with Gemini-driven command generation for PowerShell/CMD.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "Gemini AI", color: "text-green-400" },
      { name: "Windows", color: "text-cyan-400" },
      { name: "PowerShell", color: "text-blue-500" }
    ],
    stars: 8,
    github: "https://github.com/mizazhaider-ceh/Ai-CMD-X"
  },
  {
    title: "damno-security-core",
    titleColor: "text-orange-400",
    icon: FaLock,
    iconBg: "from-orange-500 to-red-600",
    category: "DevSecOps",
    categoryTag: "🥈 Rust • Cryptography • Low-Level Security",
    description: "Rare & highly impressive Rust cryptography library. AES-256-GCM, PBKDF2, SHA-256 implementations. Demonstrates low-level security engineering expertise. Perfect for DevSecOps roles requiring systems programming.",
    tech: [
      { name: "Rust", color: "text-orange-400" },
      { name: "Cryptography", color: "text-red-400" },
      { name: "Security", color: "text-yellow-400" },
      { name: "DevSecOps", color: "text-green-400" }
    ],
    stars: 6,
    github: "https://github.com/mizazhaider-ceh/damno-security-core"
  },
  {
    title: "CyberMap",
    titleColor: "text-blue-400",
    icon: FaMap,
    iconBg: "from-blue-500 to-indigo-500",
    category: "Education",
    categoryTag: "🥈 Live PWA • 18+ Roadmaps • Deployed",
    description: "Live deployed PWA on Vercel — proves you ship to production. 18+ cybersecurity career paths (Novice → Legend). Strong community value & educational leadership. Real-world deployment experience.",
    tech: [
      { name: "HTML5", color: "text-orange-400" },
      { name: "CSS3", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "PWA", color: "text-purple-400" }
    ],
    external: "https://cybermap.vercel.app"
  },
  {
    title: "Archetypes",
    titleColor: "text-violet-400",
    icon: FaBrain,
    iconBg: "from-violet-500 to-purple-500",
    category: "Strategy & Tools",
    categoryTag: "🥈 PWA • Second Brain • Bilingual RTL",
    description: "Strategic second brain PWA with mental models & power frameworks. Offline-first, bilingual RTL engine, AI mentor integration. Shows product thinking + leadership mindset beyond just security tools.",
    tech: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "PWA", color: "text-purple-400" },
      { name: "Strategy", color: "text-violet-400" },
      { name: "AI", color: "text-green-400" }
    ],
    external: "https://archetypes.vercel.app"
  },
  {
    title: "Study-Copilot",
    titleColor: "text-pink-400",
    icon: FaRobot,
    iconBg: "from-pink-500 to-rose-500",
    category: "AI Security",
    categoryTag: "🥈 Multi-Model AI • v2.1 • Rapid Iteration",
    description: "Multi-model AI learning assistant (Cerebras + Gemini). Document uploads, quiz generation, personalized study. Rapid iteration (v1→v2→v2.1). Shows ability to apply AI beyond pure security + product evolution.",
    tech: [
      { name: "Python", color: "text-blue-400" },
      { name: "AI", color: "text-green-400" },
      { name: "Tailwind", color: "text-cyan-400" },
      { name: "Education", color: "text-pink-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Study-Copilot"
  },
  {
    title: "Secure-First",
    titleColor: "text-emerald-400",
    icon: FaLock,
    iconBg: "from-emerald-500 to-green-500",
    category: "DevSecOps",
    categoryTag: "🥈 Security-by-Default • OWASP • Methodology",
    description: "Demonstrates security mindset & DevSecOps methodology. Security-by-default principles, OWASP-aligned secure coding, Zero Trust approach. Great for DevSecOps roles — shows you think about process, not just code.",
    tech: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "DevSecOps", color: "text-green-400" },
      { name: "OWASP", color: "text-red-400" },
      { name: "Zero Trust", color: "text-blue-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Secure-First"
  },
  {
    title: "Web-Security-Google-Dorking",
    titleColor: "text-yellow-400",
    icon: FaSearchengin,
    iconBg: "from-yellow-500 to-orange-600",
    category: "Offensive Security",
    categoryTag: "🥈 OSINT • 8 Writeups • Bug Bounty",
    description: "8 detailed professional writeups demonstrating Google Dorking techniques. Proves documentation & communication skills essential for pentest report writing. Real-world bug bounty methodology showcase.",
    tech: [
      { name: "OSINT", color: "text-cyan-400" },
      { name: "Google Dorking", color: "text-yellow-400" },
      { name: "Writeups", color: "text-pink-400" },
      { name: "Bug Bounty", color: "text-red-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Web-Security-Google-Dorking"
  },

  // Additional Projects
  {
    title: "passive-automation",
    titleColor: "text-green-400",
    icon: FaTerminal,
    iconBg: "from-green-500 to-lime-500",
    category: "Offensive Security",
    categoryTag: "Bash Automation • 10+ Tools • Passive Recon",
    description: "Bash automation script chaining 10+ OSINT tools for stealthy, no-touch reconnaissance. Zero target interaction. Perfect for bug bounty initial recon phase.",
    tech: [
      { name: "Bash", color: "text-green-400" },
      { name: "OSINT", color: "text-cyan-400" },
      { name: "Automation", color: "text-lime-400" }
    ],
    stars: 6,
    github: "https://github.com/mizazhaider-ceh/passive-automation"
  },

  // Education Projects (Cross-listed for educational value)
  {
    title: "Prime-PenTrix",
    titleColor: "text-purple-400",
    icon: FaGraduationCap,
    iconBg: "from-purple-500 to-pink-500",
    category: "Education",
    categoryTag: "🥇 AI Education • RAG Platform • CS Students",
    description: "Most technically advanced educational project. Full-stack SaaS (Next.js 16 + React 19 + PostgreSQL + pgvector). RAG AI engine for CS students, multi-provider AI, spaced repetition quizzes, 24+ learning tools. Production-ready architecture.",
    tech: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Next.js 16", color: "text-white" },
      { name: "PostgreSQL", color: "text-blue-500" },
      { name: "AI/ML", color: "text-purple-400" },
      { name: "Education", color: "text-green-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Prime-PenTrix"
  },
  {
    title: "Sentinel-Copilot-S2",
    titleColor: "text-green-400",
    icon: FaShieldAlt,
    iconBg: "from-green-500 to-emerald-500",
    category: "Education",
    categoryTag: "🥉 Security Learning • AI Copilot • 24+ Tools",
    description: "Educational AI security copilot with 11,707 lines of learning-focused code. Hybrid RAG engine teaches security concepts through interaction. 46 modular files, 24+ security tools. Perfect for learning threat analysis & incident response workflows.",
    tech: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "FastAPI", color: "text-green-400" },
      { name: "RAG", color: "text-purple-400" },
      { name: "Security Ed", color: "text-red-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Sentinel-Copilot-S2"
  },
  {
    title: "CSE 2700+ Questions",
    titleColor: "text-yellow-400",
    icon: FaBook,
    iconBg: "from-yellow-500 to-orange-500",
    category: "Education",
    categoryTag: "Exam Prep • 2700+ Q&A • Community",
    description: "2,700+ cybersecurity practice questions. Proof of depth, discipline & community contribution. Comprehensive exam preparation resource.",
    tech: [
      { name: "Markdown", color: "text-purple-400" },
      { name: "Education", color: "text-green-400" },
      { name: "Cybersecurity", color: "text-cyan-400" }
    ],
    github: "https://github.com/mizazhaider-ceh/Cybersecurity-Essentials-Prep"
  },
  {
    title: "KeyGen-X",
    titleColor: "text-amber-400",
    icon: FaKey,
    iconBg: "from-amber-500 to-yellow-500",
    category: "Strategy & Tools",
    categoryTag: "C++ • Python • Cryptography • Cross-Platform",
    description: "Cross-platform key generation & strength analysis. C++ + Python demonstrating lower-level security engineering skills. Cryptographic utilities toolkit.",
    tech: [
      { name: "C++", color: "text-blue-400" },
      { name: "Python", color: "text-yellow-400" },
      { name: "Crypto", color: "text-amber-400" }
    ],
    stars: 5,
    github: "https://github.com/mizazhaider-ceh/KeyGen-X"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Get category counts
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return projects.filter(p => p.featured).length; // Top 9 featured
    return projects.filter(p => p.category === cat).length;
  };

  // Filter projects by category - show only top 9 featured for "All"
  const filteredProjects = activeFilter === 'All' 
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-accent)] italic mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            {activeFilter === 'All' ? 'I did many projects, but here are the top 9. You can see all on GitHub!' : `${filteredProjects.length} Projects across ${activeFilter}`}
          </p>

          {/* Filter Buttons with Counts */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                  activeFilter === cat
                    ? 'bg-[var(--color-accent)] text-[var(--color-bg-primary)] border-[var(--color-accent)]'
                    : 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {cat}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeFilter === cat 
                    ? 'bg-[var(--color-bg-primary)]/20' 
                    : 'bg-[var(--color-bg-tertiary)]'
                }`}>
                  {getCategoryCount(cat)}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35 } }}
                className="relative bg-[var(--color-bg-secondary)] rounded-xl p-6 transition-all duration-500 flex flex-col group overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[var(--color-border)] via-transparent to-[var(--color-border)] group-hover:from-[var(--color-accent)] group-hover:via-[var(--color-accent-secondary)]/50 group-hover:to-[var(--color-accent)] transition-all duration-500 -z-10" />
                <div className="absolute inset-[1px] rounded-xl bg-[var(--color-bg-secondary)] -z-[5]" />
                
                {/* Hover glow */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent-secondary)]/0 group-hover:from-[var(--color-accent)]/10 group-hover:to-[var(--color-accent-secondary)]/5 blur-xl transition-all duration-500 -z-20" />
                {/* Icon and Title Row */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <project.icon className="text-white text-2xl" />
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex-grow min-w-0">
                    {/* Title with Star */}
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-bold ${project.titleColor} font-mono truncate`}>
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FaStar className="text-yellow-400 flex-shrink-0" />
                        </motion.div>
                      )}
                    </div>
                    {/* Category Tag */}
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-mono">
                      {project.categoryTag}
                    </p>
                  </div>
                  
                  {/* Stars Count */}
                  {project.stars && (
                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-mono flex-shrink-0">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <FaStar className="text-xs" />
                      </motion.div>
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`${t.color} text-xs font-mono px-2 py-1 bg-[var(--color-bg-tertiary)] rounded-md border border-[var(--color-border)]`}>
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-3 border-t border-[var(--color-border)]">
                  {project.github && (
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-mono hover:underline"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaGithub className="text-sm" />
                      </motion.div>
                      View on GitHub
                    </motion.a>
                  )}
                  {project.external && (
                    <motion.a 
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-mono hover:underline"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </motion.div>
                      View Live
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/mizazhaider-ceh" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
          >
            View All Projects on GitHub
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
