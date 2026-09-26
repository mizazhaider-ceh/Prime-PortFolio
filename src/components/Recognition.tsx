import { motion } from 'framer-motion';
import { FaTv, FaUserGraduate, FaFlask, FaStar, FaCertificate, FaBirthdayCake, FaTrophy, FaBug } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface AchievementImage {
  src: string;
  alt: string;
}

interface Achievement {
  type: string;
  icon: IconType;
  title: string;
  subtitle: string;
  details: string[];
  color: string;
  images?: AchievementImage[];
}

const achievements: Achievement[] = [
  {
    type: "CTF",
    icon: FaTrophy,
    title: "#1 in Web",
    subtitle: "CSCB 2026 · Junior Division",
    details: ["#1 on the Junior Web leaderboard", "1669 points in the Web category", "Belgium's national CTF, CSCB 2026"],
    color: "text-red-400 border-red-500/30",
    images: [
      { src: "/images/cscb-web-first.png", alt: "CSCB 2026 Web category leaderboard: Muhammad Izaz Haider ranked #1 in Junior with 1669 points" },
      { src: "/images/cscb-rankings.png", alt: "ECSC Rankings page showing the full Junior and Senior division scoreboards" },
    ],
  },
  {
    type: "CTF",
    icon: FaTrophy,
    title: "#3 Junior · #26/806",
    subtitle: "CSCB 2026 National CTF",
    details: ["#3 Junior Division, 6576 points, 26 solves", "26th place nationally out of 806 competitors", "Solve mix: Pwn 23%, RE 19%, Web 19%, Forensics 19%, Crypto 15%"],
    color: "text-red-400 border-red-500/30",
    images: [
      { src: "/images/cscb-junior-top3.png", alt: "Junior Division scoreboard: Muhammad Izaz Haider at #3 with 6576 points and 26 solves" },
      { src: "/images/cscb-26th-place.png", alt: "CSCB profile showing 26th place with 6701 points" },
      { src: "/images/cscb-solves-breakdown.png", alt: "Solve breakdown by category with score over time graph" },
    ],
  },
  {
    type: "Bug Bounty",
    icon: FaBug,
    title: "Recognized Hunter",
    subtitle: "YesWeHack · MIHX01",
    details: ["Verified handle MIHX01 on YesWeHack", "Official quarterly recognition for performance", "Exclusive swag: t-shirt, stickers, keychain"],
    color: "text-pink-400 border-pink-500/30",
    images: [
      { src: "/images/yeswehack-swag.png", alt: "YesWeHack achievement swag: No Bugs Left Behind t-shirt, stickers, poster and keychain" },
      { src: "/images/yeswehack-email.png", alt: "YesWeHack email recognizing and celebrating quarterly performance" },
    ],
  },
  {
    type: "Bug Bounty",
    icon: FaBug,
    title: "€500 Bounty",
    subtitle: "YesWeHack · Information Disclosure",
    details: ["Information Disclosure (CWE-200)", "CVSS 4.4, Medium severity", "Valid report, March 2026, +23 pts"],
    color: "text-pink-400 border-pink-500/30",
    images: [
      { src: "/images/bounty-eur500.png", alt: "YesWeHack bounty card: 500 euros for Information Disclosure, CWE-200, CVSS 4.4 Medium" },
    ],
  },
  {
    type: "Bug Bounty",
    icon: FaBug,
    title: "$80 Bounty",
    subtitle: "YesWeHack · Information Disclosure",
    details: ["Information Disclosure (CWE-200)", "Valid report, March 2026, +50 pts"],
    color: "text-pink-400 border-pink-500/30",
    images: [
      { src: "/images/bounty-usd80.png", alt: "YesWeHack bounty card: $80 for Information Disclosure, CWE-200" },
    ],
  },
  {
    type: "Academic",
    icon: FaUserGraduate,
    title: "60/60 ECTS",
    subtitle: "Howest University",
    details: ["First attempt, no retakes", "18/20 in Programming, Architecture, Web Backend", "17/20 across pentesting, CTF, Linux, networks"],
    color: "text-blue-400 border-blue-500/30"
  },
  {
    type: "Hands-On",
    icon: FaFlask,
    title: "100+ Labs",
    subtitle: "Practical Projects",
    details: ["CTF challenges & pentests", "Real-world security audits"],
    color: "text-green-400 border-green-500/30"
  },
  {
    type: "Community",
    icon: FaStar,
    title: "55+ Stars",
    subtitle: "GitHub Impact",
    details: ["38 stars on Ai-Terminal-X", "Active open source contrib"],
    color: "text-yellow-400 border-yellow-500/30"
  },
  {
    type: "Certs",
    icon: FaCertificate,
    title: "53 Certs",
    subtitle: "Continuous Learning",
    details: ["eJPTv2 + eWPT in progress", "IBM, Google, CodeRed, CompTIA"],
    color: "text-orange-400 border-orange-500/30"
  },
];

export default function Recognition() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-heading)] font-cyber mb-4">Talk is Cheap. Here's the Proof.</h2>
        <div className="h-1 w-20 bg-[var(--color-accent)] rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-8 rounded-xl border ${item.color} border-opacity-50 hover:border-opacity-100 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group card-hover`}
          >
            <div className={`absolute -right-6 -top-6 text-9xl opacity-5 ${item.color} rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
              <item.icon />
            </div>
            
            <div className={`text-4xl mb-6 ${item.color}`}>
              <item.icon />
            </div>

            <h3 className="text-3xl font-bold text-[var(--color-text-heading)] mb-1 font-cyber">{item.title}</h3>
            <p className="text-[var(--color-accent)] font-mono text-sm mb-6 uppercase tracking-wider">{item.subtitle}</p>

            <ul className="space-y-2 relative z-10">
              {item.details.map((detail, i) => (
                <li key={i} className="text-[var(--color-text-secondary)] flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color.split(' ')[0]}`} />
                  {detail}
                </li>
              ))}
            </ul>

            {item.images && item.images.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6 relative z-10">
                {item.images.map((img) => (
                  <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" aria-label={img.alt}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-20 md:h-24 w-auto rounded-lg border border-white/10 object-cover hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
