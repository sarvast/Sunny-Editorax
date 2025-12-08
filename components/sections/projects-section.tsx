"use client"

import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">Portfolio</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Browse a selection of short-form videos (Reels & Shorts) edited for creators and brands. Use the filter
            to view different styles and formats — grid and slider layouts are available for quick preview.
          </p>

          {/* Project filters removed */}
        </motion.div>

        {/* Local Video Player */}
        <div className="w-full max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative pt-[177.78%] rounded-lg overflow-hidden shadow-lg bg-black/50"
          >
            <div className="absolute inset-0">
              <video
                src="/edited-video.mp4"
                controls
                className="w-full h-full object-contain"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
