'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { VideoPlayer } from './video-player'
import { motion } from 'framer-motion'
import { Play, ExternalLink, Calendar, Eye } from 'lucide-react'
import { useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface VideoItem {
  id: string
  title: string
  description?: string
  thumbnail: string
  youtubeId?: string
  src?: string
  views?: string
  date?: string
  category?: string
  duration?: string
}

interface VideoSliderProps {
  videos: VideoItem[]
  className?: string
  slidesPerView?: number
  autoPlay?: boolean
  showNavigation?: boolean
  showPagination?: boolean
  effect?: 'slide' | 'coverflow'
}

export function VideoSlider({
  videos,
  className = '',
  slidesPerView = 3,
  autoPlay = true,
  showNavigation = true,
  showPagination = true,
  effect = 'slide'
}: VideoSliderProps) {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

  const modules = [Navigation, Pagination]
  if (autoPlay) modules.push(Autoplay)
  if (effect === 'coverflow') modules.push(EffectCoverflow)

  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={modules}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoPlay ? {
          delay: 3000,
          disableOnInteraction: false,
        } : false}
        effect={effect}
        coverflowEffect={effect === 'coverflow' ? {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        } : undefined}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: 30,
          },
        }}
        className="video-slider"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Player */}
              <div className="relative overflow-hidden rounded-lg">
                <VideoPlayer
                  youtubeId={video.youtubeId}
                  src={video.src}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  aspectRatio="16/9"
                  className="w-full"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredVideo === video.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                >
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: hoveredVideo === video.id ? 1 : 0.8 }}
                      className="bg-primary-500 hover:bg-primary-600 rounded-full p-4 mb-4 transition-colors cursor-pointer"
                    >
                      <Play className="w-8 h-8" fill="currentColor" />
                    </motion.div>
                    <p className="text-sm font-medium">Watch Now</p>
                  </div>
                </motion.div>

                {/* Video Stats */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {video.duration && (
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </span>
                  )}
                  {video.category && (
                    <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.category}
                    </span>
                  )}
                </div>

                {/* External Link for YouTube */}
                {video.youtubeId && (
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Watch ${video.title} on YouTube`}
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Video Info */}
              <div className="pt-4">
                <h3 className="font-sora font-semibold text-lg text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                
                {video.description && (
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    {video.views && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                    )}
                    {video.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx global>{`
        .video-slider .swiper-button-next,
        .video-slider .swiper-button-prev {
          color: #f97316;
          background: rgba(0, 0, 0, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-top: -25px;
        }
        
        .video-slider .swiper-button-next:after,
        .video-slider .swiper-button-prev:after {
          font-size: 20px;
        }
        
        .video-slider .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.5;
        }
        
        .video-slider .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}