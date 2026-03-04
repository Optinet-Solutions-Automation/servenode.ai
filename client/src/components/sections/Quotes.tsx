import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { quotes } from '../../data/content'

export default function Quotes() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % quotes.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((c) => (c + 1) % quotes.length)
  const prev = () => setCurrent((c) => (c - 1 + quotes.length) % quotes.length)

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />

      {/* Animated neon orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-primary/8 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-accent/8 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6"
          >
            Philosophy
          </motion.span>
          <h2 className="section-title text-white">Core Values & Beliefs</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative glass rounded-3xl p-12 md:p-20 min-h-[320px] flex items-center glow-border overflow-hidden">
            {/* Animated background quote mark */}
            <motion.div
              className="absolute top-6 left-8 text-[200px] font-serif text-primary/5 leading-none select-none"
              animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              "
            </motion.div>

            {/* Corner accent lines */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-primary to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3], width: ['3rem', '5rem', '3rem'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-0 left-0 h-20 w-[2px] bg-gradient-to-b from-primary to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3], height: ['3rem', '5rem', '3rem'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-[2px] bg-gradient-to-l from-accent to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3], width: ['3rem', '5rem', '3rem'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-20 w-[2px] bg-gradient-to-t from-accent to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3], height: ['3rem', '5rem', '3rem'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40, filter: 'blur(16px)', scale: 0.95, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, filter: 'blur(16px)', scale: 0.95, rotateX: -10 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-center w-full relative"
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                  "{quotes[current].text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(148,163,184,0.3)' }}
                whileTap={{ scale: 0.85 }}
                onClick={prev}
                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              </motion.button>

              <div className="flex gap-2">
                {quotes.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === current ? 'w-8 bg-primary' : 'w-2 bg-gray-700 hover:bg-gray-600'
                    }`}
                    animate={i === current ? {
                      boxShadow: ['0 0 4px rgba(148,163,184,0.4)', '0 0 12px rgba(148,163,184,0.7)', '0 0 4px rgba(148,163,184,0.4)'],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(148,163,184,0.3)' }}
                whileTap={{ scale: 0.85 }}
                onClick={next}
                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
