import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Zap,
  Clock,
  Shield,
  Globe,
} from 'lucide-react'

const steps = [
  { id: 1, label: 'You', icon: User },
  { id: 2, label: 'Company', icon: Building2 },
  { id: 3, label: 'Details', icon: MessageSquare },
]

const industries = [
  'E-commerce',
  'SaaS',
  'Healthcare',
  'Finance',
  'Real Estate',
  'Education',
  'Logistics',
  'Other',
]

const budgets = [
  'Under $5K',
  '$5K - $15K',
  '$15K - $50K',
  '$50K+',
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    budget: '',
    message: '',
    services: [] as string[],
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const canProceed = () => {
    if (step === 1) return form.name.trim() && form.email.trim()
    if (step === 2) return true
    return form.message.trim()
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-8 glow-border">
              <Sparkles className="w-3 h-3" /> Get Started
            </span>
            <h1 className="section-title text-white mb-4">
              Free <span className="text-gradient">Consultation</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Tell us about your business and we'll show you exactly how AI and automation
              can transform your operations.
            </p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              {[
                { icon: Clock, text: 'Response in 24h' },
                { icon: Shield, text: 'NDA Available' },
                { icon: Globe, text: 'Worldwide' },
                { icon: Zap, text: '100% Free' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 glass-light rounded-full text-xs text-gray-400"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 grid-bg" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center glow-border"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 mb-6">
                    We've received your message and will be in touch within 24 hours.
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <p className="text-sm text-gray-500">What happens next:</p>
                    {[
                      'Our team reviews your requirements',
                      'We prepare a custom analysis',
                      'You receive a detailed proposal within 48h',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-neon-green">{i + 1}</span>
                        </div>
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <div className="glass rounded-2xl p-8 glow-border">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-8">
                    {steps.map((s, i) => (
                      <div key={s.id} className="flex items-center">
                        <motion.button
                          onClick={() => s.id < step && setStep(s.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                            step === s.id
                              ? 'bg-primary/20 border border-primary/30 text-primary'
                              : step > s.id
                                ? 'bg-neon-green/10 border border-neon-green/30 text-neon-green cursor-pointer'
                                : 'bg-white/5 border border-white/10 text-gray-500'
                          }`}
                          whileHover={s.id < step ? { scale: 1.05 } : {}}
                        >
                          {step > s.id ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            <s.icon className="w-3.5 h-3.5" />
                          )}
                          <span className="hidden sm:inline">{s.label}</span>
                        </motion.button>
                        {i < steps.length - 1 && (
                          <div
                            className={`w-8 sm:w-16 h-px mx-2 transition-colors duration-300 ${
                              step > s.id ? 'bg-neon-green/30' : 'bg-white/10'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {/* Step 1: Personal Info */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5"
                        >
                          <h3 className="text-lg font-bold text-white mb-1">About You</h3>
                          <p className="text-sm text-gray-500 mb-6">Let's start with the basics.</p>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                              <input
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="John Doe"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                              <input
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Phone (Optional)
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Company Info */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5"
                        >
                          <h3 className="text-lg font-bold text-white mb-1">Your Company</h3>
                          <p className="text-sm text-gray-500 mb-6">
                            Help us understand your business better.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Company Name
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                              <input
                                type="text"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Acme Inc."
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3">
                              Industry
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {industries.map((ind) => (
                                <motion.button
                                  key={ind}
                                  type="button"
                                  onClick={() => setForm({ ...form, industry: ind })}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                                    form.industry === ind
                                      ? 'bg-primary/20 border border-primary/40 text-primary'
                                      : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/20'
                                  }`}
                                >
                                  {ind}
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3">
                              Budget Range
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {budgets.map((b) => (
                                <motion.button
                                  key={b}
                                  type="button"
                                  onClick={() => setForm({ ...form, budget: b })}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                                    form.budget === b
                                      ? 'bg-primary/20 border border-primary/40 text-primary'
                                      : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/20'
                                  }`}
                                >
                                  {b}
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3">
                              Services Interested In
                            </label>
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                'AI Agents & Chatbots',
                                'Workflow Automation',
                                'CRM & Sales Automation',
                                'Custom Integrations',
                              ].map((service) => (
                                <motion.button
                                  key={service}
                                  type="button"
                                  onClick={() => toggleService(service)}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300 ${
                                    form.services.includes(service)
                                      ? 'bg-primary/20 border border-primary/40 text-primary'
                                      : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/20'
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                      form.services.includes(service)
                                        ? 'bg-primary border-primary'
                                        : 'border-gray-600'
                                    }`}
                                  >
                                    {form.services.includes(service) && (
                                      <CheckCircle className="w-3 h-3 text-white" />
                                    )}
                                  </div>
                                  {service}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Message */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5"
                        >
                          <h3 className="text-lg font-bold text-white mb-1">Project Details</h3>
                          <p className="text-sm text-gray-500 mb-6">
                            Tell us about your challenges and goals.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Tell Us About Your Business *
                            </label>
                            <textarea
                              required
                              rows={6}
                              value={form.message}
                              onChange={(e) => setForm({ ...form, message: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                              placeholder="What are your biggest operational challenges? What processes would you like to automate?"
                            />
                          </div>

                          {/* Summary */}
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                              Summary
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-gray-500">Name:</span>{' '}
                                <span className="text-white">{form.name || '—'}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Email:</span>{' '}
                                <span className="text-white">{form.email || '—'}</span>
                              </div>
                              {form.company && (
                                <div>
                                  <span className="text-gray-500">Company:</span>{' '}
                                  <span className="text-white">{form.company}</span>
                                </div>
                              )}
                              {form.industry && (
                                <div>
                                  <span className="text-gray-500">Industry:</span>{' '}
                                  <span className="text-white">{form.industry}</span>
                                </div>
                              )}
                              {form.budget && (
                                <div>
                                  <span className="text-gray-500">Budget:</span>{' '}
                                  <span className="text-white">{form.budget}</span>
                                </div>
                              )}
                              {form.services.length > 0 && (
                                <div className="col-span-2">
                                  <span className="text-gray-500">Services:</span>{' '}
                                  <span className="text-white">{form.services.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {status === 'error' && (
                            <p className="text-red-400 text-sm">
                              Something went wrong. Please try again.
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                      {step > 1 ? (
                        <motion.button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          whileHover={{ scale: 1.02, x: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <motion.button
                          type="button"
                          onClick={() => canProceed() && setStep(step + 1)}
                          disabled={!canProceed()}
                          whileHover={canProceed() ? { scale: 1.02, x: 2 } : {}}
                          whileTap={canProceed() ? { scale: 0.98 } : {}}
                          className="flex items-center gap-2 btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={status === 'loading' || !canProceed()}
                          whileHover={canProceed() ? { scale: 1.02 } : {}}
                          whileTap={canProceed() ? { scale: 0.98 } : {}}
                          className="flex items-center gap-2 btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          {status === 'loading' ? (
                            <>
                              <motion.div
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8 glow-border">
                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Discovery Call',
                      desc: 'A 30-minute call to understand your business',
                      time: 'Day 1',
                    },
                    {
                      title: 'Custom Analysis',
                      desc: 'We audit your current operations and workflows',
                      time: 'Day 2-3',
                    },
                    {
                      title: 'Strategy Proposal',
                      desc: 'Specific AI & automation recommendations',
                      time: 'Day 4-5',
                    },
                    {
                      title: 'ROI Projection',
                      desc: 'Clear timeline and expected results',
                      time: 'Day 5',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-4 items-start group"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          <span className="text-xs font-bold text-primary">{i + 1}</span>
                        </div>
                        {i < 3 && (
                          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-primary/20 to-transparent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <span className="text-[10px] font-medium text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h4 className="font-bold text-white mb-6">Contact Information</h4>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'hello@servenode.ai', href: 'mailto:hello@servenode.ai' },
                    { icon: Phone, label: '+1 (555) 000-0000', href: 'tel:+15550000000' },
                    { icon: MapPin, label: 'Remote-first, serving clients worldwide' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-300 text-sm hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8 glow-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative">
                  <h4 className="font-bold text-white mb-4">Why Choose ServeNode.AI?</h4>
                  <ul className="space-y-3">
                    {[
                      'Guaranteed results in our contracts',
                      'Full-stack technology expertise',
                      'Dedicated project manager',
                      'Post-launch support & monitoring',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
