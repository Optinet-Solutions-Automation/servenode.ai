import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teamMembers, advantages, quotes } from '../data/content'

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-8 glow-border">
              <Sparkles className="w-3 h-3" /> About Us
            </span>
            <h1 className="section-title text-white mb-6">
              We Build Systems That Let Businesses{' '}
              <span className="text-gradient">Scale</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              ServeNode.AI was founded on a simple belief: every business deserves access to
              world-class AI and automation. We combine deep technical expertise with strategic
              business consulting to deliver transformations that actually stick.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We exist to eliminate the busywork that holds businesses back. By combining AI,
                automation, and systematic thinking, we help companies operate at their full
                potential.
              </p>
              <div className="space-y-3">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-3 items-start glass rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-10 glow-border"
            >
              <blockquote className="text-xl text-white font-medium leading-relaxed mb-6">
                "{quotes[0].text}"
              </blockquote>
              <p className="text-sm font-semibold text-gradient">{quotes[0].author}</p>
              <p className="text-sm text-gray-500 mt-1">{quotes[0].role}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 grid-bg" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-4">Meet Our <span className="text-gradient">Team</span></h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals dedicated to transforming your operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 card-hover glow-border">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mb-5">
                    <span className="text-2xl font-bold text-gradient">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                    {member.badge}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-white mb-4">Ready to Work <span className="text-gradient">With Us</span>?</h2>
          <p className="section-subtitle mx-auto mb-10">
            Let's discuss how we can transform your business operations.
          </p>
          <Link to="/contact" className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-neon rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <span className="relative btn-primary text-base px-10 py-4">
              Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
