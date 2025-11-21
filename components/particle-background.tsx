'use client'

import { useCallback } from 'react'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

interface ParticleBackgroundProps {
  id?: string
  className?: string
}

export function ParticleBackground({ id = 'tsparticles', className = '' }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id={id}
      init={particlesInit}
      className={`absolute inset-0 -z-10 ${className}`}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#f97316', '#0ea5e9', '#ffffff'],
          },
          links: {
            color: '#f97316',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

// Floating Circles Component
export function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent-500/10 rounded-full animate-float blur-xl [animation-delay:2s]" />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-primary-400/15 rounded-full animate-float blur-lg [animation-delay:4s]" />
      <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-accent-400/10 rounded-full animate-float blur-xl [animation-delay:1s]" />
      
      {/* Medium circles */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-primary-300/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent-300/25 rounded-full animate-bounce-slow" />
      
      {/* Small accent circles */}
      <div className="absolute top-1/4 right-1/2 w-16 h-16 bg-primary-600/30 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-accent-600/35 rounded-full animate-pulse" />
    </div>
  )
}