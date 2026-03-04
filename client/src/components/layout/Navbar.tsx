import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'AI & Automation', href: '/services' },
  { name: 'Workflow Automation', href: '/services' },
  { name: 'CRM Systems', href: '/services' },
  { name: 'Custom Integrations', href: '/services' },
]

const navLinks = [
  { name: 'About Us', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-[#6366f1]/5'
          : 'bg-transparent'
      }`}
    >
      {/* Animated top border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-[#6366f1]/30"
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] blur-md opacity-0 group-hover:opacity-60"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="relative text-white font-bold text-sm">S</span>
            </motion.div>
            <span className="text-xl font-bold text-white">
              ServeNode<span className="text-gradient">.AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-[#22d3ee] transition-all duration-300 rounded-lg hover:bg-white/5">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-56 glass rounded-xl py-2 shadow-2xl shadow-black/50 animated-border overflow-hidden"
                  >
                    {/* Dropdown glow accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />
                    {services.map((service, i) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                      >
                        <Link
                          to={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-200 hover:text-[#22d3ee] hover:bg-white/5 transition-all duration-300 hover:pl-6"
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-[#22d3ee] hover:bg-white/5'
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNavGlow"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#06b6d4] blur-sm rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="ml-4">
              <Link to="/contact" className="group relative inline-block">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-xl blur opacity-30 group-hover:opacity-70 transition-all duration-500"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative btn-primary text-xs px-5 py-2.5 inline-block"
                >
                  Free Consultation
                </motion.span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 90 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-[#22d3ee] transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#030712]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            {/* Mobile menu glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />

            <div className="px-4 py-6 space-y-1">
              {[{ name: 'Services', href: '/services' }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === link.href
                        ? 'text-white bg-white/5 glow-border'
                        : 'text-gray-400 hover:text-[#22d3ee] hover:bg-white/5 hover:pl-6'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-4"
              >
                <Link to="/contact" className="btn-primary w-full justify-center text-center block">
                  Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
