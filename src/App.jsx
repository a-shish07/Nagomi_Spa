import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import WellnessSpa from './pages/WellnessSpa'
import Makeup from './pages/Makeup'
import Men from './pages/Men'
import Women from './pages/Women'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [pageKey, setPageKey] = useState(0)
  const location = useLocation()

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Scroll to top and page transition effect on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    setPageKey(prev => prev + 1)
  }, [location])

  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Particle Background */}
            <ParticleBackground density={30} />
            
            {/* Header with entrance animation */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            >
              <Header />
            </motion.div>

            {/* Main Content */}
            <main className="relative">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={
                    <motion.div
                      key="home"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Home />
                    </motion.div>
                  } />
                  <Route path="/about-us" element={
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <About />
                    </motion.div>
                  } />
                  <Route path="/services" element={
                    <motion.div
                      key="services"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Services />
                    </motion.div>
                  } />
                  <Route path="/gallery" element={
                    <motion.div
                      key="gallery"
                      initial={{ opacity: 0, rotateY: 15 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: -15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Gallery />
                    </motion.div>
                  } />
                  <Route path="/wellness-spa" element={
                    <motion.div
                      key="wellness"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <WellnessSpa />
                    </motion.div>
                  } />
                  <Route path="/makeup" element={
                    <motion.div
                      key="makeup"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Makeup />
                    </motion.div>
                  } />
                  <Route path="/men" element={
                    <motion.div
                      key="men"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Men />
                    </motion.div>
                  } />
                  <Route path="/women" element={
                    <motion.div
                      key="women"
                      initial={{ opacity: 0, rotateY: 15 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: -15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Women />
                    </motion.div>
                  } />
                  <Route path="/contact-us" element={
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Contact />
                    </motion.div>
                  } />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Footer with entrance animation */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
            >
              <Footer />
            </motion.div>

            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global floating elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <motion.div
          className="absolute top-20 right-10 w-2 h-2 bg-primary-300/50 rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-10 w-3 h-3 bg-warm-300/40 rounded-full"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-accent-400/60 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
    </div>
  )
}

export default App