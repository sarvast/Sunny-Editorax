"use client"

import { motion } from "framer-motion"

export default function HolographicAvatar() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Holographic Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-purple-400/40"
      />

      {/* Avatar Container */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute inset-4 rounded-full glass-morphism flex items-center justify-center overflow-hidden"
      >
        {/* Load user avatar if available at /avatar.jpg. On error, hide image so emoji fallback shows. */}
        <img
          src="/avatar.jpg"
          alt="Sunny DP"
          className="w-full h-full object-cover rounded-full absolute inset-0"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement
            el.style.display = "none"
          }}
        />

        {/* Fallback avatar shown if image isn't available */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
          <div className="text-4xl">👨‍💻</div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
    </div>
  )
}
