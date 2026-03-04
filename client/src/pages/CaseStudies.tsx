import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Sparkles } from 'lucide-react'
import { caseStudies } from '../data/content'

const categories = ['All', ...Array.from(new Set(caseStudies.map((c) => c.category)))]

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory)

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-8 glow-border">
              <Sparkles className="w-3 h-3" /> Case Studies
            </span>
            <h1 className="section-title text-white mb-4">
              View the Automations That{' '}
              <span className="text-gradient">Transformed</span> Our Clients
            </h1>
            <p className="section-subtitle mx-auto">
              Real results from real businesses — slashed labor costs, process excellence,
              and scaled revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass text-gray-400 hover:text-white hover:border-primary/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Case Study Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass rounded-2xl overflow-hidden card-hover glow-border h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full">
                        {study.category}
                      </span>
                      <span className="text-sm text-gray-600 font-mono">{study.client}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{study.headline}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{study.description}</p>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="glass rounded-xl p-4 border-red-500/10 border">
                        <p className="text-xs font-bold text-red-400 uppercase mb-2">Before</p>
                        {study.beforeMetrics.map((m, i) => (
                          <p key={i} className="text-xs text-gray-400 mb-1">• {m}</p>
                        ))}
                      </div>
                      <div className="glass rounded-xl p-4 border-neon-green/10 border">
                        <p className="text-xs font-bold text-neon-green uppercase mb-2">After</p>
                        {study.afterMetrics.map((m, i) => (
                          <p key={i} className="text-xs text-gray-400 mb-1">• {m}</p>
                        ))}
                      </div>
                    </div>

                    {/* Automations */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-3 tracking-wider">Automations Built</p>
                      <div className="flex flex-wrap gap-2">
                        {study.automations.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 glass rounded-lg text-xs text-gray-400"
                          >
                            <CheckCircle className="w-3 h-3 text-primary" /> {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="border-t border-white/5 pt-5">
                      <p className="text-sm text-gray-300 italic">"{study.quote}"</p>
                      <p className="text-xs font-semibold text-white mt-2">
                        — {study.author}, <span className="text-gray-500">{study.role}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
