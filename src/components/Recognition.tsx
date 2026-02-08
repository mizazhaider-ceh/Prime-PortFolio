import { motion } from 'framer-motion';
import { FaTv, FaUserGraduate, FaFlask, FaStar, FaCertificate, FaBirthdayCake } from 'react-icons/fa';

const achievements = [
  {
    type: "Hands-On",
    icon: FaFlask,
    title: "100+ Labs",
    subtitle: "Practical Projects",
    details: ["CTF challenges & pentests", "Real-world security audits"],
    color: "text-green-400 border-green-500/30"
  },
  {
    type: "Academic",
    icon: FaUserGraduate,
    title: "16.40/20 CGPA",
    subtitle: "Howest University",
    details: ["30/30 ECTS first semester", "Working 20hrs/week"],
    color: "text-blue-400 border-blue-500/30"
  },
  {
    type: "Community",
    icon: FaStar,
    title: "55+ Stars",
    subtitle: "GitHub Impact",
    details: ["32 stars on Ai-Terminal-X", "Active open source contrib"],
    color: "text-yellow-400 border-yellow-500/30"
  },
  {
    type: "Media",
    icon: FaTv,
    title: "National TV",
    subtitle: "Recognition",
    details: ["'Next-Gen Technologist'", "ABN News Morning Show"],
    color: "text-purple-400 border-purple-500/30"
  },
  {
    type: "Certs",
    icon: FaCertificate,
    title: "50+ Certs",
    subtitle: "Continuous Learning",
    details: ["IBM, Google, CompTIA", "From fundamentals to advanced"],
    color: "text-orange-400 border-orange-500/30"
  },
  {
    type: "Personal",
    icon: FaBirthdayCake,
    title: "19 Years Old",
    subtitle: "The Beginning",
    details: ["Hired in first year", "Self-taught since age 14"],
    color: "text-cyan-400 border-cyan-500/30"
  }
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
