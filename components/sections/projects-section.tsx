"use client"

import { useState } from "react"
import { motion } from "framer-motion"
// ProjectFilter removed per user request
import YouTube from "react-youtube"

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")

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

        {/* Embedded portfolio video (plays inline, attempts to set high playback quality) */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg bg-black">
              <div className="absolute inset-0">
                <YouTube
                  videoId="5C7Pkk8w9Uk"
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      rel: 0,
                      modestbranding: 1,
                      playsinline: 1,
                    },
                  }}
                  onReady={(event) => {
                    try {
                      // Try to set a high playback quality. Not guaranteed across all browsers/devices.
                      const player = event.target
                      if (player && typeof player.setPlaybackQuality === "function") {
                        player.setPlaybackQuality("hd1080")
                      }
                      player.playVideo()
                    } catch (e) {
                      // ignore
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
