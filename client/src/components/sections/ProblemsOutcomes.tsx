import { motion } from 'framer-motion'
import { ArrowRight, X, CheckCircle, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems } from '../../data/content'

export default function ProblemsOutcomes() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 dot-pattern" />

      {/* Animated neon orbs */}
      <motion.div
        className="absolute top-20 -left-32 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 -right-32 w-[450px] h-[450px] bg-neon-green/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6"
          >
            Impact
          </motion.span>
          <h2 className="section-title text-white mb-4">
            We Find Constraints, Then <span className="text-gradient">Solve Them</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every automation compounds results over time, for a flywheel of profitability
            and competitive advantage.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-3 mb-4"
            >
              <motion.div
                className="glass rounded-xl px-6 py-3 text-center border-red-500/20 border"
                whileHover={{ borderColor: 'rgba(239,68,68,0.5)', boxShadow: '0 0 20px rgba(239,68,68,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Problems</span>
              </motion.div>
              <motion.div
                className="glass rounded-xl px-6 py-3 text-center border-primary/20 border"
                whileHover={{ borderColor: 'rgba(99,102,241,0.5)', boxShadow: '0 0 20px rgba(99,102,241,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Solutions</span>
              </motion.div>
              <motion.div
                className="glass rounded-xl px-6 py-3 text-center border-neon-green/20 border"
                whileHover={{ borderColor: 'rgba(52,211,153,0.5)', boxShadow: '0 0 20px rgba(52,211,153,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-bold text-neon-green uppercase tracking-wider">Outcomes</span>
              </motion.div>
            </motion.div>

            {/* Rows */}
            {problems.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 gap-3 mb-2"
              >
                <motion.div
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border-red-500/10 border"
                  whileHover={{
                    borderColor: 'rgba(239,68,68,0.4)',
                    boxShadow: '0 0 25px rgba(239,68,68,0.1)',
                    x: 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  >
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-gray-300">{row.problem}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border-primary/10 border"
                  whileHover={{
                    borderColor: 'rgba(99,102,241,0.4)',
                    boxShadow: '0 0 25px rgba(99,102,241,0.1)',
                    x: 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-gray-300">{row.solution}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border-neon-green/10 border"
                  whileHover={{
                    borderColor: 'rgba(52,211,153,0.4)',
                    boxShadow: '0 0 25px rgba(52,211,153,0.1)',
                    x: 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                  >
                    <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-gray-300">{row.outcome}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/contact" className="group relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-neon rounded-xl blur-lg opacity-30"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.03, 1] }}
              whileHover={{ opacity: 0.7, scale: 1.05 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative btn-primary"
            >
              Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
