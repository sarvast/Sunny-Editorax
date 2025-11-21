'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'

interface VideoPlayerProps {
  src?: string
  youtubeId?: string
  thumbnail?: string
  title?: string
  className?: string
  aspectRatio?: '16/9' | '9/16' | 'square'
  autoPlay?: boolean
  controls?: boolean
}

export function VideoPlayer({
  src,
  youtubeId,
  thumbnail,
  title,
  className = '',
  aspectRatio = '16/9',
  autoPlay = false,
  controls = true
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isYouTubeReady, setIsYouTubeReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '9/16': 'aspect-[9/16]',
    'square': 'aspect-square'
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (showControls && isPlaying) {
      timeout = setTimeout(() => setShowControls(false), 3000)
    }
    return () => clearTimeout(timeout)
  }, [showControls, isPlaying])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        containerRef.current.requestFullscreen()
      }
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
  }

  if (youtubeId) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-dark-500 ${aspectRatioClasses[aspectRatio]} ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&controls=${controls ? 1 : 0}&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          YouTube
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg bg-dark-500 group cursor-pointer ${aspectRatioClasses[aspectRatio]} ${className}`}
      onMouseMove={handleMouseMove}
      onClick={togglePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={thumbnail}
        className="absolute inset-0 w-full h-full object-cover"
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => setIsYouTubeReady(true)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Play Button Overlay */}
      {!isPlaying && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-primary-500 hover:bg-primary-600 rounded-full p-4 transition-colors">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </motion.div>
      )}

      {/* Custom Controls */}
      {controls && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" fill="currentColor" />
                )}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              {title && (
                <span className="text-sm font-medium truncate max-w-48">
                  {title}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0
                  }
                }}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFullscreen()
                }}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Loading State */}
      {!isYouTubeReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-500">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-500 border-t-transparent" />
        </div>
      )}
    </div>
  )
}