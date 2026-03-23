import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2 } from 'lucide-react';

const techCategories = [
  {
    label: 'Frontend',
    color: 'from-blue-500/20 to-indigo-500/10',
    dotColor: 'bg-blue-400',
    techs: [
      { name: 'React', level: 98 },
      { name: 'TypeScript', level: 96 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 82 },
      { name: 'Tailwind CSS', level: 97 },
    ],
  },
  {
    label: 'Backend',
    color: 'from-violet-500/20 to-purple-500/10',
    dotColor: 'bg-violet-400',
    techs: [
      { name: 'Node.js', level: 97 },
      { name: 'Spring Boot', level: 94 },
      { name: 'Django', level: 90 },
      { name: '.NET Core', level: 88 },
      { name: 'GraphQL', level: 85 },
    ],
  },
  {
    label: 'Mobile',
    color: 'from-pink-500/20 to-rose-500/10',
    dotColor: 'bg-pink-400',
    techs: [
      { name: 'React Native', level: 95 },
      { name: 'Flutter', level: 90 },
      { name: 'Swift / iOS', level: 87 },
      { name: 'Kotlin / Android', level: 88 },
    ],
  },
  {
    label: 'Databases',
    color: 'from-emerald-500/20 to-teal-500/10',
    dotColor: 'bg-emerald-400',
    techs: [
      { name: 'PostgreSQL', level: 96 },
      { name: 'MongoDB', level: 94 },
      { name: 'MySQL', level: 92 },
      { name: 'Redis', level: 88 },
      { name: 'Firebase', level: 83 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'from-cyan-500/20 to-sky-500/10',
    dotColor: 'bg-cyan-400',
    techs: [
      { name: 'AWS', level: 93 },
      { name: 'GCP', level: 90 },
      { name: 'Azure', level: 87 },
      { name: 'Kubernetes', level: 88 },
      { name: 'Docker', level: 96 },
      { name: 'DigitalOcean', level: 92 },
    ],
  },
  {
    label: 'Architecture & Practices',
    color: 'from-amber-500/20 to-orange-500/10',
    dotColor: 'bg-amber-400',
    techs: [
      { name: 'Microservices', level: 95 },
      { name: 'CI/CD Pipelines', level: 93 },
      { name: 'REST & GraphQL APIs', level: 97 },
      { name: 'SOLID Principles', level: 96 },
      { name: 'TDD / BDD', level: 88 },
    ],
  },
];

// Flat marquee list for the scroll band
const allTechs = [
  'React', 'Node.js', 'Spring Boot', 'Django', '.NET Core',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
  'React Native', 'Flutter', 'Swift', 'Kotlin',
  'AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'DigitalOcean',
  'TypeScript', 'GraphQL', 'Microservices', 'CI/CD', 'Next.js',
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech" className="py-16 md:py-24 lg:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-5">
            <span className="section-badge">
              <Code2 size={12} />
              Technology Stack
            </span>
          </div>
          <h2 className="section-title mb-5">
            Mastery Across{' '}
            <span className="gradient-text">Every Stack</span>
          </h2>
          <p className="section-desc mx-auto">
            Our team holds deep expertise across 25+ technologies — from frontend
            to infrastructure. We select the right tool for every challenge.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${cat.color}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`} />
                <span className="font-display font-600 text-[0.9rem] text-white">
                  {cat.label}
                </span>
              </div>
              <div className="space-y-3.5">
                {cat.techs.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-300 text-sm">{tech.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: ci * 0.1 + 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee tech band */}
        <div className="relative overflow-hidden py-5 border-y border-white/[0.06]">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium px-4 py-2 glass rounded-lg border border-white/[0.06] flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
