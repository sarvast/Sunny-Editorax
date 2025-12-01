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

        {/* Embedded portfolio videos: vertical shorts first, wider videos below */}
        <div className="w-full">
          {/* Vertical Short (9:16) */}
          <div className="grid grid-cols-1 gap-6 place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black pt-[177.78%]">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="ITl8-9I0IP8"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black pt-[177.78%]">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="eeypiH0MP7w"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black pt-[177.78%]">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="RbOFBuzeVKs"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black pt-[177.78%]">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="TIeluvOgSSI"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black pt-[177.78%]">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="v61-EODLiq4"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Wider videos below */}
          <div className="mt-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
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
                      playerVars: { autoplay: 1, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                    onReady={(event) => {
                      try {
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mx-auto max-w-4xl"
            >
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg bg-black">
                <div className="absolute inset-0">
                  <YouTube
                    videoId="cKx1VzVYw5c"
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                    }}
                  />
                </div>
              </div>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="mx-auto max-w-4xl"
              >
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg bg-black">
                  <div className="absolute inset-0">
                    <YouTube
                      videoId="dvGidwOa9yU"
                      className="w-full h-full"
                      iframeClassName="w-full h-full"
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mx-auto max-w-4xl"
              >
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg bg-black">
                  <div className="absolute inset-0">
                    <YouTube
                      videoId="vPDqYLUYR4Q"
                      className="w-full h-full"
                      iframeClassName="w-full h-full"
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
                      }}
                    />
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
