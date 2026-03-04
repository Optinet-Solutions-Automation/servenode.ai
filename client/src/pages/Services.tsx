import { motion } from 'framer-motion'
import { ArrowRight, Brain, Workflow, LayoutDashboard, BarChart3, CheckCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services as servicesData, techCategories } from '../data/content'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-8 h-8" />,
  workflow: <Workflow className="w-8 h-8" />,
  layout: <LayoutDashboard className="w-8 h-8" />,
  chart: <BarChart3 className="w-8 h-8" />,
}

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-8 glow-border">
              <Sparkles className="w-3 h-3" /> Our Services
            </span>
            <h1 className="section-title text-white mb-4">
              AI Solutions & Automation for{' '}
              <span className="text-gradient">Every Business</span>
            </h1>
            <p className="section-subtitle mx-auto">
              From strategy to implementation, we handle the entire technology stack
              so you can focus on growing your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 card-hover h-full glow-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 grid-bg" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies We <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We're platform-agnostic, choosing the best tools for your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-gray-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-white mb-4">
            Ready to Transform Your <span className="text-gradient">Operations</span>?
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Book a free consultation and we'll show you exactly how we can automate your business.
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
