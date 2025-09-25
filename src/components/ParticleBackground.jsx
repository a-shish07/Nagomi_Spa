import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = ({ density = 50, colors = ['#cbab80', '#d68962', '#d1c78f'] }) => {
  const particles = useMemo(() => {
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.1,
    }))
  }, [density, colors])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary-200/30 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24 border border-warm-300/20 rotate-45"
        animate={{
          rotate: [45, 405],
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-300/20 to-warm-300/20 rounded-lg"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-12 h-12 border-2 border-accent-300/25 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-radial from-primary-300/10 via-primary-200/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-warm-300/8 via-warm-200/4 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default ParticleBackground