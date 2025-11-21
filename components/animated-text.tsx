'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn' | 'typewriter'
  delay?: number
  duration?: number
}

export function AnimatedText({
  children,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  duration = 0.6
}: AnimatedTextProps) {
  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay }
    },
    slideUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration, delay, ease: 'easeOut' }
    },
    slideDown: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration, delay, ease: 'easeOut' }
    },
    scaleIn: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration, delay, ease: 'easeOut' }
    }
  }

  const selectedVariant = variants[variant as keyof typeof variants]

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={selectedVariant.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterText({
  text,
  className = '',
  delay = 0,
  speed = 0.05
}: TypewriterTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * speed),
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: 'primary' | 'accent' | 'video'
}

export function GradientText({
  children,
  className = '',
  gradient = 'primary'
}: GradientTextProps) {
  const gradients = {
    primary: 'bg-gradient-to-r from-primary-400 to-primary-600',
    accent: 'bg-gradient-to-r from-accent-400 to-accent-600',
    video: 'bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500'
  }

  return (
    <span className={`${gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}