import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { teamMembers } from '../../data/content'

export default function Team() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const visible = teamMembers.slice(startIndex, startIndex + visibleCount)

  const next = () => setStartIndex((i) => Math.min(i + 1, teamMembers.length - visibleCount))
  const prev = () => setStartIndex((i) => Math.max(i - 1, 0))

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6">
              The Team
            </span>
            <h2 className="section-title text-white mb-4">
              Like Hiring a COO & Senior AI Engineer
            </h2>
            <p className="section-subtitle">For a fraction of the cost.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-600 font-mono">
              {String(startIndex + 1).padStart(2, '0')}/{String(teamMembers.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                disabled={startIndex === 0}
                className="p-2 rounded-xl glass hover:border-primary/30 transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                disabled={startIndex >= teamMembers.length - visibleCount}
                className="p-2 rounded-xl glass hover:border-primary/30 transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visible.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 card-hover h-full relative overflow-hidden">
                  {/* Ambient glow on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mb-5">
                      <span className="text-2xl font-bold text-gradient">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                      {member.badge}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
