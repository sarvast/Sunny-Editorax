"use client"
import { motion } from "framer-motion"
// InteractiveTimeline removed per user request
import LiveGitHubWidget from "@/components/widgets/live-github-widget"
import CurrentlyLearningWidget from "@/components/widgets/currently-learning-widget"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">About SUNNY SHARMA</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            SUNNY EDITORAX is a specialist in short-form social video — Instagram Reels, YouTube Shorts and TikTok. I
            focus on fast storytelling, rhythm-based edits, and vertical-first visuals that increase watch time and
            engagement for creators and brands.
          </p>
        </motion.div>

        {/* Services Cards (added per request) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/3 border border-white/5 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Instagram Reels</h3>
              <p className="text-white/80 text-sm">Trendy, engaging short-form content optimized for maximum reach and engagement.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/3 border border-white/5 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">▶️</div>
              <h3 className="text-xl font-semibold mb-2">YouTube Shorts</h3>
              <p className="text-white/80 text-sm">Viral-ready vertical videos designed to capture attention and drive subscribers.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/3 border border-white/5 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-2">TikTok Videos</h3>
              <p className="text-white/80 text-sm">Creative, trend-focused content with popular effects and transitions.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/3 border border-white/5 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold mb-2">All Projects</h3>
              <p className="text-white/80 text-sm">Browse projects by category: Frontend, Backend, AI/ML, and more — curated for clients.</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 liquid-gradient font-sora">Pricing</h3>
            <p className="text-white/80 text-lg">Professional video editing services starting from just $3 USD</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">$3 USD</div>
                <div className="text-white/80 mb-4">Starting Price</div>
                <div className="text-sm text-white/60">
                  • Instagram Reels<br/>
                  • YouTube Shorts<br/>
                  • TikTok Videos<br/>
                  • Fast Turnaround<br/>
                  • Professional Quality
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive timeline removed */}

        {/* Dynamic Widgets */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <LiveGitHubWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <CurrentlyLearningWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
