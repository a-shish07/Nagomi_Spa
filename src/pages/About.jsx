import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Shield, Sparkles, Leaf, Star, Diamond, Flower2 } from 'lucide-react'

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Sparkles className="w-16 h-16 text-white mb-6" />,
      title: "Premium Treatment",
      description: "Experience luxury spa treatments using the finest natural products and advanced techniques.",
      gradient: "from-amber-400 to-amber-600",
      bgIcon: "🌟"
    },
    {
      icon: <Heart className="w-16 h-16 text-white mb-6" />,
      title: "Holistic Wellness",
      description: "We focus on your complete well-being, nurturing both your physical and mental health.",
      gradient: "from-rose-400 to-rose-600",
      bgIcon: "💖"
    },
    {
      icon: <Leaf className="w-16 h-16 text-white mb-6" />,
      title: "Natural & Organic",
      description: "All our treatments use organic products that are safe for you and the environment.",
      gradient: "from-emerald-400 to-emerald-600",
      bgIcon: "🌿"
    },
    {
      icon: <Users className="w-16 h-16 text-white mb-6" />,
      title: "Expert Therapist",
      description: "Our certified professionals have years of experience in providing exceptional spa services.",
      gradient: "from-blue-400 to-blue-600",
      bgIcon: "👥"
    }
  ]

  const stats = [
    { number: "10+", label: "Expert Therapist", icon: "👩‍⚕️", color: "from-purple-500 to-purple-700" },
    { number: "100%", label: "Satisfaction Rate", icon: "⭐", color: "from-yellow-500 to-orange-600" },
    { number: "15+", label: "Premium Treatment", icon: "💎", color: "from-pink-500 to-purple-600" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-200 via-primary-50 to-warm-200">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Interactive gradient orb */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-3xl">
                🌸
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-title text-white mb-6 relative"
          >
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              About Nagomi
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-lg blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-subtitle text-amber-100 mb-12"
          >
            Bihar's New Ritual of Calm & Transformation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Japanese Philosophy', 'Premium Wellness', 'Soul Care'].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
            <motion.div
              className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main About Content */}
      <section className="py-32 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-xl" />
              
              <motion.h2 
                className="section-heading text-5xl md:text-6xl mb-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
                  This isn't just a salon.
                </span>
                <br />
                <span className="text-gray-600 text-3xl md:text-4xl font-light italic">
                  Not just only spa.
                </span>
                
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-400 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              
              <motion.div 
                className="text-lg leading-relaxed space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 text-xl leading-relaxed"
                >
                  <span className="text-2xl font-bold">Nagomi</span> is a movement — a mood — a modern sanctuary for those who crave more than just surface beauty. Rooted in the Japanese philosophy of Nagomi — meaning peace, harmony and graceful living — we bring you a space where beauty meets stillness and self-care becomes soul-care.
                </motion.p>
                
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                >
                  {["One ritual.", "One experience.", "One step closer to yourself."].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-3 h-3 bg-gradient-to-r from-primary-500 to-amber-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-400 to-amber-400 rounded-full blur-sm"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        />
                      </div>
                      <span className="text-lg text-gray-700 font-medium group-hover:text-primary-600 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group perspective-1000"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15 
                }}
              >
                <img
                  src="/images/about-main.jpg"
                  alt="Nagomi Interior"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/cbab80/ffffff?text=Nagomi+Interior'
                  }}
                />
                
                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🌸
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-32 relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl" />
            
            <motion.h2 
              className="section-title mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-primary-600 via-amber-500 to-primary-600 bg-clip-text text-transparent">
                Nagomi — Bihar's New Ritual of Calm
              </span>
            </motion.h2>
            
            <motion.p 
              className="section-subtitle text-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover a modern sanctuary where beauty meets serenity and self-care turns into soul-care. Inspired by the Japanese philosophy of harmony and graceful living, Nagomi offers spa therapies, grooming, and styling designed to help you pause, reset, and glow. Step into a space that blends global luxury with a local soul — your journey to calm and confidence begins here.
            </motion.p>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative premium-card p-8 text-center overflow-hidden">
                  <div className="absolute -top-10 -right-10 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    {stat.icon}
                  </div>
                  
                  <motion.div 
                    className={`text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-gray-600 text-lg font-medium mb-4">{stat.label}</div>
                  
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-warm-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title ">What Makes Us Special</h2>
            <p className="section-subtitle">
              Discover the essence of Nagomi through our core values and exceptional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a sanctuary where beauty meets mindfulness, offering holistic wellness experiences that nurture both body and soul. We are committed to providing exceptional spa and salon services inspired by the Japanese philosophy of harmony and peace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Bihar's leading wellness destination, where every guest experiences transformation through our authentic Japanese-inspired rituals, premium treatments, and personalized care in an atmosphere of tranquility and elegance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About