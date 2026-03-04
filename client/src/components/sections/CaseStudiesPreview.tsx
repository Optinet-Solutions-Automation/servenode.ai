import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Quote, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { caseStudies } from '../../data/content'

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    rotateX.set((e.clientY - centerY) / 15)
    rotateY.set((centerX - e.clientX) / 15)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group"
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[150px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[130px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/20"
          style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 22}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-cyan-400 uppercase tracking-[0.2em] mb-8 glow-border"
            >
              <Sparkles className="w-3 h-3" />
              Case Studies
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="section-title text-white mb-4"
            >
              Client Work &{' '}
              <span className="text-gradient">Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="section-subtitle"
            >
              Real transformations from real businesses.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-20 h-px bg-gradient-to-r from-indigo-500 to-cyan-500 mt-6 origin-left"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((study, index) => (
            <TiltCard key={study.id} index={index}>
              <div className="relative glass rounded-2xl p-8 card-hover h-full glow-border overflow-hidden">
                {/* Animated border shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.15), transparent, rgba(6,182,212,0.15))',
                  }}
                />

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                />

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-700" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-700" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-700" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-700" />

                {/* Category */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-flex items-center px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold rounded-full mb-6 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
                >
                  <motion.span
                    className="absolute -left-px -top-px -right-px -bottom-px rounded-full border border-indigo-500/0 group-hover:border-indigo-500/30"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {study.category}
                </motion.span>

                {/* Headline */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-500 leading-tight">
                  {study.headline}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{study.description}</p>

                {/* Quote section */}
                <div className="relative border-t border-gray-700/50 pt-6 mt-auto">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-transparent origin-left"
                  />

                  <Quote className="w-5 h-5 text-indigo-500/40 mb-3" />
                  <p className="text-sm text-gray-300 italic mb-4 leading-relaxed">"{study.quote}"</p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-xs font-bold text-indigo-300">
                        {study.author.charAt(0)}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-xs font-semibold text-white">{study.author}</p>
                      <p className="text-xs text-gray-500">{study.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:gap-4 transition-all duration-500 group relative"
          >
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            />
            View All Case Studies{' '}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
