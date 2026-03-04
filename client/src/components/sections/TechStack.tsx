import { motion } from 'framer-motion'
import { techCategories } from '../../data/content'

export default function TechStack() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 dot-pattern" />

      {/* Ambient orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6">
            Tech Stack
          </span>
          <h2 className="section-title text-white mb-4">
            Technology We <span className="text-gradient">Specialize</span> In
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get the perfect technology setup for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 card-hover h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <h3 className="text-white font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(148, 163, 184, 0.5)' }}
                        className="inline-flex items-center px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-gray-800 transition-colors cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
