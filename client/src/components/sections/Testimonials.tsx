import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-bg" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent/6 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
              className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6"
            >
              Testimonials
            </motion.span>
            <h2 className="section-title text-white mb-4">Client Reviews</h2>
            <div className="flex items-center gap-4">
              <motion.span
                className="text-5xl font-extrabold text-gradient"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
              >
                4.9
              </motion.span>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 200 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{testimonials.length} reviews</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="p-2 rounded-xl glass hover:border-primary/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="p-2 rounded-xl glass hover:border-primary/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[340px] snap-start"
            >
              <motion.div
                className="glass rounded-2xl p-6 card-hover h-full relative overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(99,102,241,0.15)',
                  borderColor: 'rgba(99,102,241,0.3)',
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-sm font-semibold text-white">{review.author}</p>
                    <p className="text-xs text-gray-500">{review.company}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <motion.span
                        className="w-2 h-2 bg-neon-green rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          boxShadow: ['0 0 0px rgba(52,211,153,0.4)', '0 0 10px rgba(52,211,153,0.8)', '0 0 0px rgba(52,211,153,0.4)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <span className="text-xs text-neon-green font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
