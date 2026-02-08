import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaBrain, FaCode, FaTools, FaReact, FaDatabase, FaServer, FaUserShield } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Easy to extend - just add new categories here!
interface SkillCategory {
  name: string;
  icon: IconType;
  color: string;
  iconColor: string;
  textColor: string;
  skills: Array<{ name: string; level?: number; color: string }>;
}

const skillsData: SkillCategory[] = [
  {
    name: "Offensive Security",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    iconColor: "text-red-400",
    textColor: "text-red-400",
    skills: [
      { name: "Penetration Testing", level: 95, color: "text-red-400" },
      { name: "Web Pentesting", level: 93, color: "text-yellow-400" },
      { name: "System Pentesting", level: 91, color: "text-red-300" },
      { name: "Network Pentesting", level: 92, color: "text-orange-300" },
      { name: "AI x Cybersecurity", level: 89, color: "text-purple-400" }
    ]
  },
  {
    name: "Defensive Security",
    icon: FaLock,
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400",
    textColor: "text-blue-400",
    skills: [
      { name: "DevSecOps", level: 92, color: "text-blue-400" },
      { name: "CI/CD Security", level: 88, color: "text-cyan-400" },
      { name: "Cloud Security", level: 85, color: "text-blue-300" },
      { name: "Incident Response", level: 87, color: "text-sky-400" },
      { name: "Security Automation", level: 93, color: "text-cyan-300" }
    ]
  },
  {
    name: "AI & Automation",
    icon: FaBrain,
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400",
    textColor: "text-purple-400",
    skills: [
      { name: "AI Security", level: 90, color: "text-purple-400" },
      { name: "LLM Integration", level: 88, color: "text-pink-400" },
      { name: "Gemini AI", level: 92, color: "text-fuchsia-400" },
      { name: "RAG Technology", level: 89, color: "text-violet-400" },
      { name: "Prompt Engineering", level: 91, color: "text-purple-300" }
    ]
  },
  {
    name: "Programming",
    icon: FaCode,
    color: "from-cyan-500 to-green-500",
    iconColor: "text-cyan-400",
    textColor: "text-cyan-400",
    skills: [
      { name: "Python", level: 95, color: "text-blue-400" },
      { name: "JavaScript", level: 90, color: "text-yellow-400" },
      { name: "Bash", level: 88, color: "text-green-400" },
      { name: "C++", level: 82, color: "text-cyan-300" },
      { name: "C", level: 80, color: "text-blue-300" }
    ]
  },
  {
    name: "Tools & Frameworks",
    icon: FaTools,
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-400",
    textColor: "text-green-400",
    skills: [
      { name: "Git/GitHub", level: 95, color: "text-purple-400" },
      { name: "Nmap", level: 94, color: "text-cyan-400" },
      { name: "Kali Linux", level: 93, color: "text-blue-400" },
      { name: "Burp Suite", level: 92, color: "text-orange-400" },
      { name: "Metasploit", level: 90, color: "text-red-400" }
    ]
  },
  {
    name: "Web Development",
    icon: FaReact,
    color: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-400",
    textColor: "text-indigo-400",
    skills: [
      { name: "React", level: 93, color: "text-cyan-400" },
      { name: "Next.js", level: 92, color: "text-white" },
      { name: "HTML5", level: 95, color: "text-orange-400" },
      { name: "CSS3", level: 93, color: "text-blue-400" },
      { name: "Vanilla JS/DOM", level: 91, color: "text-yellow-400" }
    ]
  },
  {
    name: "Database & Backend",
    icon: FaDatabase,
    color: "from-yellow-500 to-orange-500",
    iconColor: "text-yellow-400",
    textColor: "text-yellow-400",
    skills: [
      { name: "FastAPI", level: 91, color: "text-teal-400" },
      { name: "SQL Server", level: 88, color: "text-red-400" },
      { name: "JSON", level: 95, color: "text-yellow-300" },
      { name: "Redis", level: 82, color: "text-red-500" },
      { name: "PostgreSQL", level: 90, color: "text-blue-400" }
    ]
  },
  {
    name: "System Administration",
    icon: FaServer,
    color: "from-slate-500 to-gray-600",
    iconColor: "text-slate-400",
    textColor: "text-slate-400",
    skills: [
      { name: "Linux Admin", level: 93, color: "text-yellow-400" },
      { name: "Windows Server", level: 85, color: "text-blue-500" },
      { name: "Shell Scripting", level: 90, color: "text-green-400" },
      { name: "System Security", level: 88, color: "text-red-400" },
      { name: "Docker", level: 87, color: "text-cyan-400" }
    ]
  },
  {
    name: "Security Engineering",
    icon: FaUserShield,
    color: "from-amber-500 to-red-500",
    iconColor: "text-amber-400",
    textColor: "text-amber-400",
    skills: [
      { name: "Cryptography", level: 90, color: "text-amber-400" },
      { name: "Threat Modeling", level: 92, color: "text-orange-400" },
      { name: "Secure Coding", level: 93, color: "text-red-400" },
      { name: "Risk Assessment", level: 88, color: "text-yellow-400" },
      { name: "Security Auditing", level: 91, color: "text-orange-300" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
    } 
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Animated 3D background elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <motion.div 
          className="absolute top-10 left-20 w-32 h-32 bg-[var(--color-accent)] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--color-accent-secondary)] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-text-heading)] mb-3 sm:mb-4 md:mb-6 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]">
              Arsenal
            </span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)}+ Skills across {skillsData.length} categories • DevSecOps Engineer
          </motion.p>
        </motion.div>

        {/* Skills Grid - Fully Responsive */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 group overflow-hidden will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl p-[1.5px] sm:p-[2px] bg-gradient-to-br ${category.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              <div className="absolute inset-[1.5px] sm:inset-[2px] rounded-xl sm:rounded-2xl bg-[var(--color-bg-primary)] -z-[5]" />
              
              {/* Hover glow effect - Desktop only */}
              <div className={`hidden md:block absolute -inset-3 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-20`} />
              
              {/* Animated shine - Desktop only */}
              <motion.div
                className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                }}
                animate={{
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                {/* Icon + Category Header */}
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6"
                >
                  <motion.div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <category.icon className="text-xl sm:text-2xl text-white" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${category.textColor} font-mono group-hover:text-[var(--color-accent)] transition-colors leading-tight`}>
                      {category.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {category.skills.length} Skills
                    </p>
                  </div>
                </motion.div>

                {/* Skills list with progress bars */}
                <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5">
                  {category.skills.map((skill, i) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 + i * 0.02 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                        <motion.span 
                          className={`text-xs sm:text-sm md:text-base font-semibold ${skill.color} group-hover/skill:text-[var(--color-accent)] transition-colors font-mono truncate pr-2`}
                        >
                          {skill.name}
                        </motion.span>
                        {skill.level && (
                          <motion.span 
                            className="text-xs font-bold text-[var(--color-text-secondary)] group-hover/skill:text-[var(--color-accent)] transition-colors flex-shrink-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        )}
                      </div>
                      {/* Animated progress bar */}
                      <div className="w-full h-1.5 sm:h-2 bg-[var(--color-bg-secondary)] rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative will-change-transform`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level || 85}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: idx * 0.03 + i * 0.03,
                            ease: "easeOut" 
                          }}
                        >
                          {/* Animated shimmer on progress bar - Desktop only */}
                          <motion.div
                            className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills - Horizontal Compact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <motion.div
            className="relative glass-card rounded-xl p-4 sm:p-5 md:p-6 border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/40 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-secondary)] rounded-full" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-heading)] font-cyber">
                Soft Skills & Strengths
              </h3>
            </div>
            
            {/* Soft Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: 'Problem Solving', icon: '🧩', color: 'from-cyan-400 to-blue-500' },
                { name: 'Team Leadership', icon: '👥', color: 'from-purple-400 to-pink-500' },
                { name: 'Communication', icon: '💬', color: 'from-green-400 to-emerald-500' },
                { name: 'Critical Thinking', icon: '🎯', color: 'from-orange-400 to-red-500' },
                { name: 'Adaptability', icon: '🔄', color: 'from-yellow-400 to-orange-500' },
                { name: 'Time Management', icon: '⏱️', color: 'from-indigo-400 to-purple-500' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="relative group"
                >
                  <div className="glass-card rounded-lg p-3 sm:p-4 text-center border border-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/30 transition-all">
                    <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
                    <p className={`text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
