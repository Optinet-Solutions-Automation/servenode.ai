import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { phases } from '../../data/content'

const phaseIcons = ['01', '02', '03', '04']

export default function Approach() {
  const containerRef = useRef(null)
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Deep dark background layers */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-400/10 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-300/10 rounded-full blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ opacity: bgOpacity }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block px-5 py-2 glass rounded-full text-xs font-medium text-slate-300 uppercase tracking-[0.2em] mb-8 glow-border"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              //
            </motion.span>{' '}
            Our Methodology
          </motion.span>

          <h2 className="section-title text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our Proven Approach to{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gradient"
            >
              Transform
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {' '}Your Operations
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="section-subtitle mx-auto"
          >
            A systematic 4-phase methodology that delivers measurable results every time.
          </motion.p>

          {/* Decorative line under subtitle */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 mx-auto mt-8"
          />
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-800/50">
            <motion.div
              className="w-full bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400"
              style={{ height: lineHeight }}
            />
            {/* Glowing dot that follows the line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 blur-sm"
              style={{ top: lineHeight }}
            />
          </div>

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setActivePhase(index)}
                onHoverEnd={() => setActivePhase(null)}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                    className="relative"
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-slate-400/50"
                      animate={activePhase === index ? {
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-14 h-14 rounded-full bg-[#18181b] border-2 border-slate-400 flex items-center justify-center shadow-lg shadow-slate-400/30 glow-border">
                      <span className="text-sm font-bold text-gradient">{phaseIcons[index]}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative glass rounded-2xl p-8 card-hover glow-border group"
                  >
                    {/* Animated corner brackets */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-slate-400/0 group-hover:border-slate-400/60 transition-all duration-700" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-slate-300/0 group-hover:border-slate-300/60 transition-all duration-700" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-slate-300/0 group-hover:border-slate-300/60 transition-all duration-700" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-slate-400/0 group-hover:border-slate-400/60 transition-all duration-700" />

                    {/* Hover glow */}
                    <motion.div
                      className="absolute -inset-px rounded-2xl bg-gradient-to-r from-slate-400/0 via-slate-300/0 to-slate-400/0 group-hover:from-slate-400/10 group-hover:via-slate-300/10 group-hover:to-slate-400/10 transition-all duration-700 -z-10"
                    />

                    <div className="flex items-center gap-4 mb-5">
                      <motion.span
                        className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em]"
                        animate={activePhase === index ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Phase {phase.number}
                      </motion.span>
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-400/40 to-transparent" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-500">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{phase.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((d, dIndex) => (
                        <motion.span
                          key={d}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + dIndex * 0.1 }}
                          className="inline-flex items-center px-3 py-1.5 bg-slate-400/10 rounded-full text-xs font-medium text-slate-300 border border-slate-400/20 hover:border-slate-400/50 hover:bg-slate-400/20 transition-all duration-300"
                        >
                          {d}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-24"
        >
          <Link to="/contact" className="group relative inline-block">
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <span className="relative btn-primary">
              Free Consultation{' '}
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
