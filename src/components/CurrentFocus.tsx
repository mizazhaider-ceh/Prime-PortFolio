import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaRocket } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 },
  }),
};

// Helper function to highlight keywords
const highlightKeywords = (text: string) => {
  const keywords: [string, string][] = [
    // Longer phrases first to prevent overlap
    ['Infrastructure engineering', 'text-blue-400'],
    ['Security engineering', 'text-red-400'],
    ['vulnerability scanning', 'text-red-400'],
    ['Cybersecurity Essentials', 'text-cyan-400'],
    ['hardening checklists', 'text-emerald-400'],
    ['AI-powered frameworks', 'text-purple-400'],
    ['AI-assisted mentors', 'text-purple-400'],
    ['offensive security', 'text-red-400'],
    ['open-source tools', 'text-cyan-400'],
    ['LLM-based tools', 'text-pink-400'],
    ['global community', 'text-blue-400'],
    ['Computer Science', 'text-cyan-400'],
    ['The PenTrix', 'text-emerald-400'],
    ['Democratizing', 'text-emerald-400'],
    ['Collaboration', 'text-indigo-400'],
    ['AI security', 'text-purple-400'],
    ['JavaScript', 'text-yellow-400'],
    ['DevSecOps', 'text-cyan-400'],
    ['networking', 'text-yellow-400'],
    ['roadmaps', 'text-blue-400'],
    ['servers', 'text-orange-400'],
    ['vulns', 'text-red-400'],
    ['Linux', 'text-orange-400'],
    ['Windows', 'text-blue-400'],
    ['HTML', 'text-orange-400'],
    ['CSS', 'text-cyan-400'],
    ['SQL', 'text-pink-400'],
    ['JSON', 'text-green-400'],
    ['Vanilla', 'text-yellow-400'],
    ['DOM', 'text-purple-400'],
  ];

  let result = text;
  keywords.forEach(([keyword, colorClass]) => {
    // Escape special regex characters
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
    result = result.replace(regex, `<span class="${colorClass}">$1</span>`);
  });
  return result;
};

const roles = [
  {
    icon: <FaShieldAlt className="text-white text-lg" />,
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
    title: 'Junior DevSecOps & AI Security Engineer',
    org: 'Damno Solutions CBAM',
    meta: 'Nov 2025 – Present | Belgium (Remote)',
    intro: 'Below are some of my key responsibilities and achievements:',
    bullets: [
      'DevSecOps – I combine dev, security, and ops to validate and harden environments and pipelines',
      'AI security – I build and use LLM-based tools for vulnerability scanning and API/cost optimization.',
      'Infrastructure engineering – I work on servers, networking, and staging/production readiness.',
      'Security engineering – I find and fix vulns, create hardening checklists, and design secure access paths',
      'Collaboration – I take the tickets, keep stakeholders updated, and turn complex setups into clear, documented steps the whole team can reuse.',
    ],
  },
  {
    icon: <FaGraduationCap className="text-white text-lg" />,
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    title: "Bachelor's in Cybersecurity",
    org: 'HOWEST University',
    meta: 'Sep 2025 – Present | Belgium',
    intro: 'FIRST SEMESTER RESULTS (Jan 2026):',
    bullets: [
      'CGPA: 16.40/20 (≈3.47/4.0)',
      '30/30 ECTS credits earned',
      'All courses passed first attempt',
    ],
    extra: {
      heading: 'COURSES:',
      items: [
        'Cybersecurity Essentials',
        'Computer Architecture and Operating Systems (Linux/Windows)',
        'Programming (JavaScript)',
        'Web Frontend (HTML/CSS/Vanilla JS)',
        'Databases ( SQL + JSON )',
        '100+ Labs, Projects & Practical Work',
      ],
    },
  },
  {
    icon: <FaRocket className="text-white text-lg" />,
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    title: 'Founder – The PenTrix',
    org: 'Self-Founded | Cybersecurity Initiative',
    meta: '',
    sections: [
      {
        heading: 'MISSION:',
        bullets: [
          'Democratizing cybersecurity education through structured learning paths, open-source tools, and AI-powered frameworks.',
        ],
      },
      {
        heading: "WHAT I'M BUILDING:",
        bullets: [
          'Designing The PenTrix as a full platform with roadmaps, labs, and AI-assisted mentors for beginners and intermediate learners.',
          'Publishing practical content on offensive security, DevSecOps, and AI in cybersecurity so others can follow a clear path instead of getting lost in random resources.',
        ],
      },
      {
        heading: 'IMPACT:',
        bullets: [
          'Built frameworks, tools, and resources used by global community',
        ],
      },
    ],
  },
];

const previousEducation = [
  {
    title: 'Intermediate (I.C.S) – Grade : A+',
    org: 'DAWN SCIENCE COLLEGE, Barnala | 2022 – 2024',
    bullets: [
      'Foundation in C++ programming & problem-solving',
      'Class Representative & Cricket/Football teams',
    ],
  },
  {
    title: 'Matriculation – Computer Science',
    org: 'GOVT. HIGH SCHOOL FOR BOYS, Hazara Mughlan | 2020 – 2022',
    bullets: [
      'Top academic honors in Computer Science',
      'Class Monitor & Senior Organizer',
    ],
  },
];

export default function CurrentFocus() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-heading)] font-cyber tracking-tight mb-3 sm:mb-4">
            CURRENT FOCUS
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Building security solutions, pursuing excellence in academics, and leading community initiatives
          </p>
        </motion.div>

        {/* Three Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-xl border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50 transition-all duration-300 p-5 sm:p-6 flex flex-col group"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg ${role.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-heading)] font-cyber leading-tight mb-1">
                {role.title}
              </h3>

              {/* Org & Meta */}
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mb-3">
                {role.org}
                {role.meta && <span className="block">{role.meta}</span>}
              </p>

              {/* Standard intro + bullets */}
              {role.intro && (
                <>
                  <p className="text-xs sm:text-sm font-bold text-[var(--color-text-heading)] mb-2 uppercase tracking-wide">
                    {role.intro}
                  </p>
                  <ul className="space-y-1.5 mb-3 text-xs sm:text-sm text-[var(--color-text-secondary)] list-disc list-inside">
                    {role.bullets?.map((b, idx) => (
                      <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(b) }} />
                    ))}
                  </ul>
                </>
              )}

              {/* Extra section (courses) */}
              {role.extra && (
                <>
                  <p className="text-xs sm:text-sm font-bold text-[var(--color-text-heading)] mb-2 uppercase tracking-wide">
                    {role.extra.heading}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--color-text-secondary)] list-disc list-inside">
                    {role.extra.items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }} />
                    ))}
                  </ul>
                </>
              )}

              {/* Multi-section layout (PenTrix) */}
              {role.sections?.map((sec, si) => (
                <div key={si} className={si > 0 ? 'mt-3' : ''}>
                  <p className="text-xs sm:text-sm font-bold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide">
                    {sec.heading}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--color-text-secondary)] list-disc list-inside">
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(b) }} />
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Previous Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-heading)] mb-6 sm:mb-8">
            Previous Education
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] rounded-full mb-6 sm:mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {previousEducation.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass-card rounded-xl border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/40 transition-all p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[var(--color-text-heading)] font-cyber leading-tight">
                      {edu.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5 mb-2">
                      {edu.org}
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-[var(--color-text-secondary)] list-disc list-inside">
                      {edu.bullets.map((b, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: highlightKeywords(b) }} />
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
