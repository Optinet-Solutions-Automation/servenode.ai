import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { stats } from '../../data/content'

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const duration = 2000
      const steps = 80
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span className="tabular-nums">{count.toLocaleString()}{suffix}</span>
  )
}

function MagneticCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(springY, [-50, 50], [8, -8])
  const rotateY = useTransform(springX, [-50, 50], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #0f172a 50%, #030712 100%)' }}
    >
      {/* Background grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Floating ambient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 border border-cyan-500/20"
            style={{ background: 'rgba(6,182,212,0.06)' }}
          >
            <motion.span
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Proven Results
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <MagneticCard key={stat.label} index={index}>
              <div
                className="relative group rounded-2xl p-10 text-center overflow-hidden border border-gray-800/50 hover:border-indigo-500/30 transition-colors duration-500"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.1), transparent 70%)',
                  }}
                />

                {/* Top edge neon line */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)',
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: '60%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, ease: 'easeOut' }}
                />

                <div className="relative">
                  {/* Stat number */}
                  <motion.div
                    className="text-5xl md:text-6xl font-extrabold mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.3))',
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="w-8 h-[2px] mx-auto mb-3 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                    }}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 32, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  />

                  {/* Label */}
                  <p className="text-gray-500 font-medium tracking-wider text-sm uppercase">
                    {stat.label}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-indigo-500/20 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-indigo-500/20 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-indigo-500/20 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-indigo-500/20 rounded-br-2xl" />
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  )
}
