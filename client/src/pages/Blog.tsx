import { motion } from 'framer-motion'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-xs font-medium text-accent uppercase tracking-wider mb-8 glow-border">
              <Sparkles className="w-3 h-3" /> Resources
            </span>
            <h1 className="section-title text-white mb-4">
              Blog & <span className="text-gradient">Insights</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Expert insights on AI, automation, and business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden card-hover glow-border h-full">
                {/* Placeholder image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 via-surface to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-3xl font-bold text-primary/20">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-mono">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
