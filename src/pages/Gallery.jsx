import React, { useEffect, useState } from "react";
import { Heart, Diamond, Leaf, Star, Sparkles, Camera, Eye, ArrowRight, Clock, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  // Default offset: 96 days, 12 hours, 12 minutes from first visit
  const DEFAULT_OFFSET_MS = (96 * 24 * 60 * 60 + 12 * 60 * 60 + 12 * 60) * 1000;

  const getTargetDate = () => {
    try {
      const stored = localStorage.getItem('galleryCountdownTarget');
      if (stored) {
        const t = parseInt(stored, 10);
        if (!isNaN(t)) return new Date(t);
      }
    } catch (_) {}
    const target = new Date(Date.now() + DEFAULT_OFFSET_MS);
    try { localStorage.setItem('galleryCountdownTarget', target.getTime().toString()); } catch (_) {}
    return target;
  };

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [targetDate, setTargetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(getTargetDate()));
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Preview gallery images
  const previewImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Spa Treatments",
      title: "Serene Treatment Room",
      description: "Experience tranquility in our wellness sanctuary"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Interior Design",
      title: "Zen-Inspired Ambiance",
      description: "Peaceful spaces designed for inner harmony"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1520637736862-4d197d17c80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Salon Services",
      title: "Modern Styling Studio",
      description: "Contemporary beauty services in elegant setting"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Makeup Services",
      title: "Professional Makeup Station",
      description: "Expert artistry for your special moments"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Wellness Journey",
      title: "Holistic Wellness",
      description: "Complete rejuvenation for mind, body, and soul"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Natural Products",
      title: "Organic Beauty",
      description: "Premium natural and organic treatments"
    }
  ];

  const categories = ['All', 'Spa Treatments', 'Interior Design', 'Salon Services', 'Makeup Services', 'Wellness Journey', 'Natural Products'];

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Visual Stories",
      description: "Capturing serene moments of transformation and beauty",
      color: "from-primary-400 to-primary-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healing Journey",
      description: "Therapeutic sessions that nurture your soul",
      color: "from-warm-400 to-warm-600"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Beauty",
      description: "Organic treatments for inner and outer glow",
      color: "from-accent-400 to-accent-600"
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Luxury Experience",
      description: "Premium services in a tranquil environment",
      color: "from-secondary-400 to-secondary-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Wellness Rituals",
      description: "Ancient practices for modern wellness",
      color: "from-primary-500 to-warm-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Mindful Moments",
      description: "Creating space for peace and reflection",
      color: "from-accent-500 to-primary-500"
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? previewImages 
    : previewImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-900/50 to-warm-900/60"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
          
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-48 h-48 border border-primary-300/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-primary-500/20 backdrop-blur-sm text-primary-200 px-6 py-2 rounded-full text-sm font-medium tracking-wide">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex"
              >
                <Camera className="w-5 h-5 text-primary-200" />
              </motion.div>
              <span>Visual Stories of Serenity</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-title mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 inline-block"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-subtitle mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 inline-block"
          >
            Unveiling the serene beauty of Nagomi — where every moment tells a story
            of tranquility and transformation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-full shadow-glow"
          >
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-serif font-semibold">Opening Soon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-warm-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm text-primary-100 px-6 py-2 rounded-full text-sm font-medium tracking-wide mb-6">
              <Calendar className="w-4 h-4 inline mr-2" />
              Launch Countdown
            </div>
            <h2 className="section-title bg-white/90 backdrop-blur-sm rounded-2xl p-4 inline-block">Opening In</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto font-mono tracking-wide">
              {`${timeLeft.days || 0} Days ${timeLeft.hours || 0} Hours ${timeLeft.minutes || 0} Minutes ${timeLeft.seconds || 0} Seconds`}
            </p>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mt-2">
              Be among the first to experience Bihar's most luxurious wellness destination
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: timeLeft.days || 0, label: "Days", icon: <Calendar className="w-6 h-6" /> },
                  { value: timeLeft.hours || 0, label: "Hours", icon: <Clock className="w-6 h-6" /> },
                  { value: timeLeft.minutes || 0, label: "Minutes", icon: <Clock className="w-6 h-6" /> },
                  { value: timeLeft.seconds || 0, label: "Seconds", icon: <Clock className="w-6 h-6" /> }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="floating-card p-6 bg-white text-gray-900 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-primary-600 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 font-serif text-primary-700">
                      {item.value}
                    </div>
                    <div className="text-sm md:text-base font-medium text-gray-600">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              What's Coming Your Way
            </h2>
            <p className="section-subtitle">
              Experience the perfect harmony of luxury, wellness, and Japanese-inspired tranquility
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="floating-card p-8 text-center group"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-soft-lg group-hover:shadow-glow`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="section-heading text-center">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-warm-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-10 h-10 text-primary-200" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Be the First to Experience Nagomi
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our exclusive list to receive updates about our grand opening and special launch offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Notify Me
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
