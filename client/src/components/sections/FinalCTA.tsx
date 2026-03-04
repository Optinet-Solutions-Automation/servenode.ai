import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 dot-pattern" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/6 w-[300px] h-[300px] bg-neon/8 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 50, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Animated horizontal lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0, 0.5, 0], x: ['-100%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0, 0.5, 0], x: ['100%', '-100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ rotate: { duration: 4, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <Zap className="w-4 h-4 text-neon" />
            </motion.div>
            <span className="text-sm font-medium text-gray-400">Ready to transform?</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Reach{' '}
            <motion.span
              className="text-gradient"
              animate={{
                backgroundSize: ['100% 100%', '200% 100%', '100% 100%'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Operational Excellence
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            You're a few systems away from doubling your profit margins.
          </motion.p>

          <motion.div
            className="max-w-xl mx-auto mb-12 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <motion.div
              className="glass rounded-xl p-4 border-red-500/10 border"
              whileHover={{ borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 25px rgba(239,68,68,0.1)', x: -4 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-400 text-sm">
                <motion.span
                  className="text-red-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Without us:
                </motion.span>{' '}
                waste time, break things, get low adoption, miss hidden opportunities.
              </p>
            </motion.div>
            <motion.div
              className="glass rounded-xl p-4 border-neon-green/10 border"
              whileHover={{ borderColor: 'rgba(52,211,153,0.4)', boxShadow: '0 0 25px rgba(52,211,153,0.1)', x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-400 text-sm">
                <motion.span
                  className="text-neon-green font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  With us:
                </motion.span>{' '}
                actually solve problems, 10X faster, your team loves your new processes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/contact" className="group relative inline-block">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-neon rounded-2xl blur-xl opacity-40"
                animate={{
                  opacity: [0.25, 0.55, 0.25],
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                whileHover={{ opacity: 0.8, scale: 1.08 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                whileHover={{ scale: 1.07, boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}
                whileTap={{ scale: 0.96 }}
                className="relative btn-primary text-lg px-12 py-5"
              >
                Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
