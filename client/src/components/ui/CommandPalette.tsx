import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, FileText, Briefcase, Users, Mail, Home, BookOpen, Command } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CommandItem {
  id: string
  label: string
  description: string
  icon: typeof Home
  action: string
  category: string
}

const commands: CommandItem[] = [
  { id: 'home', label: 'Home', description: 'Go to homepage', icon: Home, action: '/', category: 'Pages' },
  { id: 'services', label: 'Services', description: 'View our AI & automation services', icon: Briefcase, action: '/services', category: 'Pages' },
  { id: 'case-studies', label: 'Case Studies', description: 'See client results & transformations', icon: FileText, action: '/case-studies', category: 'Pages' },
  { id: 'about', label: 'About Us', description: 'Learn about our team & mission', icon: Users, action: '/about', category: 'Pages' },
  { id: 'blog', label: 'Blog', description: 'Read our latest insights', icon: BookOpen, action: '/blog', category: 'Pages' },
  { id: 'contact', label: 'Contact', description: 'Book a free consultation', icon: Mail, action: '/contact', category: 'Pages' },
  { id: 'ai-automation', label: 'AI Automation', description: 'Custom AI agents & workflow automation', icon: Briefcase, action: '/services', category: 'Services' },
  { id: 'crm', label: 'CRM Systems', description: 'CRM setup & optimization', icon: Briefcase, action: '/services', category: 'Services' },
  { id: 'integrations', label: 'Custom Integrations', description: 'Connect your apps seamlessly', icon: Briefcase, action: '/services', category: 'Services' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const filtered = query
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  const grouped = filtered.reduce(
    (acc, cmd) => {
      if (!acc[cmd.category]) acc[cmd.category] = []
      acc[cmd.category].push(cmd)
      return acc
    },
    {} as Record<string, CommandItem[]>
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const executeCommand = (cmd: CommandItem) => {
    navigate(cmd.action)
    setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      executeCommand(filtered[selectedIndex])
    }
  }

  return (
    <>
      {/* Keyboard hint in navbar area (invisible, just for accessibility) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[560px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
              style={{ background: 'rgba(15, 23, 42, 0.97)', backdropFilter: 'blur(20px)' }}
            >
              {/* Glow top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />

              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, services, actions..."
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-gray-500 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-5 py-8 text-center">
                    <p className="text-gray-500 text-sm">No results found</p>
                    <p className="text-gray-600 text-xs mt-1">Try a different search term</p>
                  </div>
                ) : (
                  Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                      <p className="px-5 py-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                        {category}
                      </p>
                      {items.map((cmd) => {
                        const globalIndex = filtered.indexOf(cmd)
                        const isSelected = globalIndex === selectedIndex
                        return (
                          <motion.button
                            key={cmd.id}
                            onClick={() => executeCommand(cmd)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-all duration-150 ${
                              isSelected
                                ? 'bg-[#6366f1]/10 text-white'
                                : 'text-gray-400 hover:bg-white/5'
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#6366f1]/20 border border-[#6366f1]/30'
                                  : 'bg-white/5 border border-white/5'
                              }`}
                            >
                              <cmd.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{cmd.label}</p>
                              <p className="text-xs text-gray-500 truncate">{cmd.description}</p>
                            </div>
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-[#6366f1] flex-shrink-0" />
                            )}
                          </motion.button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-5 py-3 border-t border-white/5 text-[10px] text-gray-600">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded font-mono">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded font-mono">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded font-mono">Esc</kbd>
                  Close
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cmd+K hint button (shown in navbar) */}
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:border-white/20 transition-all duration-300"
      >
        <Command className="w-3.5 h-3.5" />
        <span>Search</span>
        <kbd className="ml-1 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono">
          ⌘K
        </kbd>
      </button>
    </>
  )
}
