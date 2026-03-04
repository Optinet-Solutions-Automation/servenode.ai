import { motion } from 'framer-motion'
import { useState } from 'react'
import { clientLogos } from '../../data/content'

export default function LogoCarousel() {
  const doubled = [...clientLogos, ...clientLogos]
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deep dark background with grid */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Animated horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Top/bottom neon border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />

      {/* Fade edges - dark */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-slate-400/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-px bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mb-6"
          />
          <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.3em]">
            Trusted by{' '}
            <span className="text-gradient">innovative companies</span>
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="animate-scroll flex items-center gap-10 whitespace-nowrap">
          {doubled.map((logo, i) => (
            <motion.div
              key={`${logo}-${i}`}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative flex-shrink-0 h-14 px-10 flex items-center justify-center glass rounded-xl group cursor-default glow-border"
            >
              {/* Hover glow effect */}
              {hoveredIndex === i && (
                <motion.div
                  layoutId="logo-glow"
                  className="absolute -inset-1 bg-gradient-to-r from-slate-400/20 via-slate-300/20 to-slate-400/20 rounded-xl blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <span className="relative text-gray-500 group-hover:text-slate-300 font-semibold text-sm transition-colors duration-500 drop-shadow-[0_0_8px_rgba(6,182,212,0)]  group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                {logo}
              </span>

              {/* Corner accents on hover */}
              <motion.div
                className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-300/0 group-hover:border-slate-300/60 transition-all duration-500"
              />
              <motion.div
                className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-400/0 group-hover:border-slate-400/60 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
