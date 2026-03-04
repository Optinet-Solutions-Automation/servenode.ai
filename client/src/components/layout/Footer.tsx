import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  services: [
    { name: 'AI & Automation', href: '/services' },
    { name: 'Workflow Automation', href: '/services' },
    { name: 'CRM Systems', href: '/services' },
    { name: 'Custom Integrations', href: '/services' },
  ],
  company: [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Animated top glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />
      </motion.div>

      {/* Background ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-[#6366f1]/30"
              >
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] blur-md"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative text-white font-bold text-sm">S</span>
              </motion.div>
              <span className="text-xl font-bold text-white">
                ServeNode<span className="text-gradient">.AI</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Integrate your apps, install AI and automate your processes to end busywork
              and skyrocket productivity across your entire company.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-[#22d3ee] hover:border-[#6366f1]/30 hover:shadow-lg hover:shadow-[#6366f1]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div key={title} variants={itemVariants}>
              <h3 className="font-semibold text-xs uppercase tracking-[0.15em] text-gradient mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-500 text-sm hover:text-[#22d3ee] transition-all duration-300 hover:pl-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom divider */}
        <div className="relative mt-14 pt-8">
          {/* Animated divider line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-[#6366f1]/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} ServeNode.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 bg-[#34d399] rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
