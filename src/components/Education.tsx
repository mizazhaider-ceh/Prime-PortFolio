import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaRocket } from 'react-icons/fa';

const cardsData = [
  {
    icon: FaShieldAlt,
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    title: 'Junior DevSecOps   &  AI Security Engineer',
    subtitle: 'Damno Solutions CBAM | Nov 2025 - Present | Belgium (Remote)',
    sections: [
      {
        heading: 'Below are some of my key responsibilities and achievements:',
        items: [
          'DevSecOps – I combine dev, security, and ops to validate and harden environments and pipelines',
          'AI security – I build and use LLM-based tools for vulnerability scanning and API/cost optimization.',
          'Infrastructure engineering – I work on servers, networking, and staging/production readiness.',
          'Security engineering – I find and fix vulns, create hardening checklists, and design secure access paths',
          'Collaboration – I take the tickets, keep stakeholders updated, and turn complex setups into clear, documented steps the whole team can reuse.'

          
        ]
      }
    ],
    tags: []
  },
  {
    icon: FaGraduationCap,
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    title: "Bachelor's in Cybersecurity",
    subtitle: 'HOWEST University | Sep 2025 - Present | Belgium',
    sections: [
      {
        heading: 'FIRST SEMESTER RESULTS (Jan 2026):',
        items: [
          'CGPA: 16.40/20 (≈3.47/4.0)',
          '30/30 ECTS credits earned',
          'All courses passed first attempt'
        ]
      },
      {
        heading: 'COURSES:',
        items: [
          'Cybersecurity Essentials',
          'Computer Architecture and Operating Systems (Linux/Windows)',
          'Programming (JavaScript)',
          'Web Frontend (HTML/CSS/Vanilla JS)',
          'Databases ( SQL + JSON )',
          '100+ Labs, Projects & Practical Work',
        ]
      }
    ],
    tags: []
  },
  {
    icon: FaRocket,
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    title: 'Founder - The PenTrix',
    subtitle: 'Self-Founded | Cybersecurity Initiative',
    sections: [
      {
        heading: 'MISSION:',
        items: [
          'Democratizing cybersecurity education through structured learning paths, open-source tools, and AI-powered frameworks.'
        ]
      },
       {
        heading: 'WHAT I’M BUILDING:',
        items: [
          'Designing The PenTrix as a full platform with roadmaps, labs, and AI‑assisted mentors for beginners and intermediate learners.',
          'Publishing practical content on offensive security, DevSecOps, and AI in cybersecurity so others can follow a clear path instead of getting lost in random resources.'
        ]
      },
      {
        heading: 'IMPACT:',
        items: [
          'Built frameworks, tools, and resources used by global community'
        ]
      }
    ],
    tags: []
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent-secondary)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent)] tracking-wide mb-4">
            CURRENT FOCUS
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Building security solutions, pursuing excellence in academics, and leading community initiatives
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.35, ease: 'easeOut' }
              }}
              className="relative bg-[var(--color-bg-secondary)] rounded-2xl p-6 transition-all duration-500 group overflow-hidden"
              style={{
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[var(--color-border)] via-transparent to-[var(--color-border)] group-hover:from-[var(--color-accent)] group-hover:via-[var(--color-accent-secondary)] group-hover:to-[var(--color-accent)] transition-all duration-500 -z-10" />
              <div className="absolute inset-[1px] rounded-2xl bg-[var(--color-bg-secondary)] -z-[5]" />
              
              {/* Hover glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent-secondary)]/0 group-hover:from-[var(--color-accent)]/10 group-hover:to-[var(--color-accent-secondary)]/10 blur-xl transition-all duration-500 -z-20" />
              
              {/* Shine sweep */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out]" />
              </div>
              {/* Icon */}
              <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                <card.icon />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-accent)] mb-2 leading-tight">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                {card.subtitle}
              </p>

              {/* Sections */}
              {card.sections.map((section, sIndex) => (
                <div key={sIndex} className="mb-5 last:mb-0">
                  <h4 className="text-sm font-bold text-[var(--color-accent)] mb-3 tracking-wide">
                    {section.heading}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                        <span className="text-[var(--color-accent)] shrink-0 mt-0.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Tags */}
              {card.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[var(--color-border)]">
                  {card.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1.5 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Education - Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-[var(--color-text-heading)] mb-8">
            Previous Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Education cards */}
            <div className="relative bg-[var(--color-bg-secondary)]/50 rounded-xl p-6 group overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[var(--color-border)] via-transparent to-[var(--color-border)] group-hover:from-[var(--color-accent)]/50 group-hover:to-[var(--color-accent-secondary)]/50 transition-all duration-500 -z-10" />
              <div className="absolute inset-[1px] rounded-xl bg-[var(--color-bg-secondary)]/50 -z-[5]" />
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-heading)] mb-1">
                    Intermediate (I.C.S) ~ Grade : A+
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    DAWN SCIENCE COLLEGE, Barnala | 2022 - 2024
                  </p>
                  <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                    <li>• Foundation in C++ programming & problem-solving</li>
                    <li>• Class Representative & Cricket/Football teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Matriculation Card */}
            <div className="relative bg-[var(--color-bg-secondary)]/50 rounded-xl p-6 group overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[var(--color-border)] via-transparent to-[var(--color-border)] group-hover:from-[var(--color-accent)]/50 group-hover:to-[var(--color-accent-secondary)]/50 transition-all duration-500 -z-10" />
              <div className="absolute inset-[1px] rounded-xl bg-[var(--color-bg-secondary)]/50 -z-[5]" />
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-heading)] mb-1">
                    Matriculation - Computer Science
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    GOVT. HIGH SCHOOL FOR BOYS, Hazara Mughlan | 2020 - 2022
                  </p>
                  <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                    <li>• Top academic honors in Computer Science</li>
                    <li>• Class Monitor & Senior Organizer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
