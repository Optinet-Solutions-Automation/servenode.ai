import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.9, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Animated gradient sweep across grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.05) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] pointer-events-none z-20"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.15), rgba(99,102,241,0.15), transparent)',
      }}
      animate={{
        top: ['-2px', '100%'],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

const headlineWords = ['We', 'Systemize', '&', 'Automate', 'Businesses', 'for', 'Profitable', 'Scale']

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const rotateX = useTransform(springY, [-300, 300], [5, -5])
  const rotateY = useTransform(springX, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030712 0%, #0f172a 50%, #030712 100%)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Grid pattern background */}
      <GridPattern />

      {/* Gradient Orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-indigo-500/20 -top-40 -right-40" />
      <FloatingOrb className="w-[500px] h-[500px] bg-cyan-500/15 -bottom-40 -left-40" delay={2} />
      <FloatingOrb className="w-[300px] h-[300px] bg-indigo-400/10 top-1/3 left-1/4" delay={4} />
      <FloatingOrb className="w-[200px] h-[200px] bg-cyan-400/10 top-1/4 right-1/3" delay={6} />

      <ParticleField />

      {/* Scan line */}
      <ScanLine />

      {/* Radial glow at center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-indigo-300 border border-indigo-500/20"
            style={{
              background: 'rgba(99,102,241,0.08)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 20px rgba(99,102,241,0.1), inset 0 0 20px rgba(99,102,241,0.05)',
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>#1 AI Solutions Agency</span>
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>

        {/* Headline with word-by-word animation */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] mb-8 tracking-tight">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                word === 'Businesses'
                  ? ''
                  : word === 'Automate'
                  ? ''
                  : 'text-white'
              }`}
              style={
                word === 'Businesses'
                  ? {
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.4))',
                    }
                  : word === 'Automate'
                  ? {
                      background: 'linear-gradient(135deg, #22d3ee, #6366f1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.4))',
                    }
                  : {}
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We audit your business, organize your operations and install AI automations
          to crush constraints and skyrocket team productivity.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="group relative">
            <motion.div
              className="absolute -inset-1 rounded-xl blur-lg"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #06b6d4, #22d3ee)',
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span
              className="relative inline-flex items-center gap-2 text-base font-semibold px-10 py-4 rounded-xl text-white"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 0 30px rgba(99,102,241,0.3)',
              }}
            >
              Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-20"
        >
          {['Certified AI Partner', 'Top Rated Agency', '5-Star Reviews'].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(99,102,241,0.15)',
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800/50"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <motion.span
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              />
              <span className="text-xs font-medium text-gray-400">{badge}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-indigo-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
