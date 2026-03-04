import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
}

const quickReplies = [
  { text: 'What services do you offer?', icon: Zap },
  { text: 'I need AI automation', icon: Bot },
  { text: 'Book a free consultation', icon: Sparkles },
]

const botResponses: Record<string, string> = {
  'what services do you offer?':
    "We specialize in AI Solutions, Workflow Automation, CRM Systems, and Custom Integrations. We've helped 400+ businesses automate their operations and save over 100,000 hours. Want me to connect you with our team for a detailed walkthrough?",
  'i need ai automation':
    "Great choice! Our AI automation solutions can transform your business operations. We offer custom AI agents, workflow automation, and intelligent integrations. Let's schedule a free consultation to discuss your specific needs. Shall I redirect you to our booking page?",
  'book a free consultation':
    "Absolutely! You can book a free 30-minute consultation where we'll analyze your current operations and show you exactly how AI can help. Head over to our Contact page or I can help you right here. What's your name and email?",
  default:
    "Thanks for your message! Our team typically responds within a few hours. For immediate assistance, you can book a free consultation on our Contact page, or ask me about our services, pricing, or case studies.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const [key, value] of Object.entries(botResponses)) {
    if (key === 'default') continue
    if (lower.includes(key) || key.includes(lower)) return value
  }
  if (lower.includes('pricing') || lower.includes('cost') || lower.includes('price')) {
    return "Our pricing is customized based on your specific needs and scale. We offer packages starting from process audits to full-scale AI implementation. Book a free consultation to get a personalized quote!"
  }
  if (lower.includes('case stud') || lower.includes('result') || lower.includes('example')) {
    return "We have amazing results! For example, we helped a logistics company achieve 340% ROI in 6 months, and an e-commerce brand save 120+ hours/month. Check out our Case Studies page for detailed breakdowns."
  }
  return botResponses.default
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm ServeNode's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEnd = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = getResponse(text)
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: response, sender: 'bot', timestamp: new Date() },
      ])
    }, 800 + Math.random() * 700)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#94a3b8] to-[#cbd5e1] flex items-center justify-center shadow-lg shadow-[#94a3b8]/30 hover:shadow-[#94a3b8]/50 transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      >
        {/* Pulse ring */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#94a3b8] to-[#cbd5e1]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
            style={{ background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(20px)' }}
          >
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-[#94a3b8]/10 to-[#cbd5e1]/10" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#94a3b8] to-[#cbd5e1] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#34d399] rounded-full border-2 border-[#18181b]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">ServeNode AI</p>
                  <p className="text-xs text-[#34d399]">Online now</p>
                </div>
                <motion.div
                  className="ml-auto flex items-center gap-1.5 px-2.5 py-1 bg-[#34d399]/10 rounded-full"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                  <span className="text-[10px] font-medium text-[#34d399]">AI Powered</span>
                </motion.div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#94a3b8]/20 to-[#cbd5e1]/20 border border-[#94a3b8]/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-[#94a3b8]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#94a3b8] to-[#64748b] text-white rounded-br-md'
                        : 'bg-white/5 border border-white/5 text-gray-300 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-end"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#94a3b8]/20 to-[#cbd5e1]/20 border border-[#94a3b8]/30 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-[#94a3b8]" />
                  </div>
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-[#94a3b8]/50 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEnd} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && !typing && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((qr) => (
                  <motion.button
                    key={qr.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => sendMessage(qr.text)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#94a3b8]/10 border border-[#94a3b8]/20 text-[#94a3b8] text-xs font-medium rounded-full hover:bg-[#94a3b8]/20 hover:border-[#94a3b8]/40 transition-all duration-300"
                  >
                    <qr.icon className="w-3 h-3" />
                    {qr.text}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(input)
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 outline-none focus:border-[#94a3b8]/50 focus:ring-1 focus:ring-[#94a3b8]/20 transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#94a3b8] to-[#cbd5e1] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </form>
              <p className="text-[10px] text-gray-600 mt-2 text-center">
                Powered by ServeNode AI · Typically replies instantly
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
