import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { advantages } from '../../data/content'

export default function Advantages() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-6">
              Why Us
            </span>
            <h2 className="section-title text-white mb-6">
              How We <span className="text-gradient">Outperform</span> Every Competitor
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We take a consultative approach so you don't miss out on hidden opportunities
              or fumble implementation — which drives measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div className="flex gap-4 items-start glass rounded-xl p-5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{adv}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
