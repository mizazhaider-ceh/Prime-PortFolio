import { motion } from 'framer-motion';
import { FaShieldAlt, FaBriefcase, FaUserSecret, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ExperienceItem {
  icon: IconType;
  iconBg: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  highlights?: string[];
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    icon: FaShieldAlt,
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
    title: 'Junior DevSecOps & AI Security Engineer',
    company: 'Damno Solutions CBAM',
    type: 'Part-time',
    duration: 'Nov 2025 - Present · 4 mos',
    location: 'Belgium · Remote',
    description: 'Securing multi-region cloud infrastructure and the CBAM platform while advancing AI-driven security automation for a greener, sustainable future. 🌍🔐🤖',
    highlights: [
      'Hardening CI/CD pipelines & Kubernetes containers across EMEA/APAC ☁️',
      'Building LLM-powered vulnerability scanners & AI-assisted SAST/SCA tools',
      'Conducting security-focused code reviews, penetration testing, and bug bounty assessments 💻',
      'Delivered production-ready pipelines, fixed critical RCE & SQLi vulnerabilities',
      'Optimizing APIs achieving 95% cost reduction',
    ],
  },
  {
    icon: FaUserSecret,
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    title: 'Offensive Security Intern',
    company: 'Rhombix Technologies',
    type: 'Internship',
    duration: 'Mar 2025 - May 2025 · 3 mos',
    location: 'Remote',
    description: 'Cybersecurity enthusiast bolstering network defense skills by developing a basic sniffer and reinforcing user awareness through comprehensive phishing training initiatives.',
    skills: ['Python', 'Social Engineering', 'Network Security', '+10 skills'],
  },
  {
    icon: FaBriefcase,
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    title: 'Cyber Security Intern',
    company: 'Prodigy InfoTech',
    type: 'Internship',
    duration: 'Jan 2025 - Apr 2025 · 4 mos',
    location: 'Remote',
    description: 'Applied cybersecurity intern leveraging ethical hacking and penetration testing skills along with programming and AI utilization to develop security solutions and tools.',
    skills: ['Python', 'Networking', 'Penetration Testing', '+11 skills'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--color-accent-secondary)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-heading)] font-cyber tracking-tight mb-3 sm:mb-4">
            EXPERIENCE
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Professional journey in cybersecurity, DevSecOps, and AI-driven security solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-xl border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50 transition-all duration-300 p-5 sm:p-6 md:p-8 group"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${exp.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                  {<exp.icon className="text-2xl sm:text-3xl text-white" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title & Company */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-heading)] font-cyber leading-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-accent)] font-semibold mb-2">
                    {exp.company} · {exp.type}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--color-text-secondary)] mb-3 sm:mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[var(--color-accent)]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[var(--color-accent)]" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights (for main job) */}
                  {exp.highlights && (
                    <div className="mb-4">
                      <p className="text-xs sm:text-sm font-bold text-[var(--color-text-heading)] mb-2 uppercase tracking-wide">
                        Key Highlights:
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-[var(--color-accent)] shrink-0">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Tags */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
