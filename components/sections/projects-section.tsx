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

        {/* Local Video Player - Video-562.mp4 */}
        <div className="w-full max-w-sm mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative pt-[177.78%] rounded-lg overflow-hidden shadow-lg bg-black/50"
          >
            <div className="absolute inset-0">
              <video
                src="/Video-562.mp4"
                controls
                className="w-full h-full object-cover"
                preload="metadata"
                poster="/placeholder.jpg"
              >
                <source src="/Video-562.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>

        {/* YouTube Short - 2UuO2La-7DA */}
        <div className="w-full max-w-sm mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative pt-[177.78%] rounded-lg overflow-hidden shadow-lg bg-black/50"
          >
            <iframe
              src="https://www.youtube.com/embed/2UuO2La-7DA"
              className="absolute inset-0 w-full h-full"
              title="YouTube Short - 2UuO2La-7DA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>

        {/* Original Local Video Player */}
        <div className="w-full max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
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

        {/* YouTube Shorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {["qA4OqIquGQ4", "XVUImBknRUE", "ki8fboIiB5M", "4LbDsJZhTYc", "_JpUNyaboY4"].map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (0.1 * index), duration: 0.8 }}
              className="relative pt-[177.78%] rounded-lg overflow-hidden shadow-lg bg-black/50"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="absolute inset-0 w-full h-full"
                title={`YouTube Short ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
