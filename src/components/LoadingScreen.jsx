import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Flower2, Heart, Leaf } from 'lucide-react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentIcon, setCurrentIcon] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const icons = [Sparkles, Flower2, Heart, Leaf]
  const loadingTexts = [
    "Preparing your wellness journey...",
    "Creating the perfect atmosphere...",
    "Awakening tranquility...",
    "Almost ready for serenity..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true)
          setTimeout(() => onComplete(), 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  useEffect(() => {
    const iconTimer = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length)
    }, 1000)

    return () => clearInterval(iconTimer)
  }, [icons.length])

  const CurrentIcon = icons[currentIcon]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-warm-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbab80' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-200/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-warm-300/20 rotate-45"
          animate={{ rotate: [45, 225], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/3 right-1/5 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-warm-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.3, 0.7, 0.3],
            x: [0, 30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Loading Content */}
        <div className="text-center relative z-10">
          {/* Logo Animation */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 120, damping: 15 }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-luxury relative"
                animate={{ 
                  boxShadow: [
                    "0 25px 80px -15px rgba(203, 171, 128, 0.4)",
                    "0 35px 100px -15px rgba(203, 171, 128, 0.6)",
                    "0 25px 80px -15px rgba(203, 171, 128, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIcon}
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CurrentIcon className="w-12 h-12 text-white" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary-400/50"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary-400/30"
                    animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
                NAGOMI
              </h1>
              <motion.p 
                className="text-primary-600 font-display text-lg tracking-widest"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                SPA & WELLNESS
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            className="w-80 max-w-sm mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative">
              <div className="w-full h-2 bg-primary-100/50 rounded-full backdrop-blur-sm overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full shadow-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress glow */}
              <motion.div
                className="absolute inset-0 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-30 blur-sm"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            <motion.p 
              className="text-primary-700 font-medium text-sm mt-4 tracking-wide"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round(progress)}% Complete
            </motion.p>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={Math.floor(progress / 25)}
                className="text-gray-600 font-light text-lg italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {loadingTexts[Math.floor(progress / 25)] || loadingTexts[3]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Completion Animation */}
          {isComplete && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 12 }}
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-luxury"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Heart className="w-16 h-16 text-white fill-current" />
                </motion.div>
                <motion.h2
                  className="text-3xl font-serif font-bold text-gray-900 mb-2"
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Welcome to Serenity
                </motion.h2>
                <motion.p
                  className="text-primary-600 font-light"
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Your journey begins now
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Floating particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-300/40 rounded-full"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + ((i % 3) * 20)}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen