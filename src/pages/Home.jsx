import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  Heart,
  Leaf,
  Users,
  Star,
  Award,
  Clock,
  Shield,
  ArrowRight,
  Play,
  Quote,
  CheckCircle,
  Flower2,
} from "lucide-react";

const Home = () => {
  const [filter, setFilter] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  const videoRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Wellness Spa (Women)",
      subtitle: "Relax, Rejuvenate & Rediscover Yourself",
      description:
        "Premium spa therapies that restore balance and glow — from therapeutic massages to mindful facials.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/wellness-spa",
      category: "Wellness Spa",
      features: [
        "Therapeutic Massage",
        "Facial Treatments",
        "Body Therapies",
        "Ayurvedic Healing",
      ],
    },
    {
      id: 2,
      title: "Unisex Salon",
      subtitle: "Redefine Your Style, Elevate Your Confidence",
      description:
        "Modern cuts, color artistry, and grooming for all — crafted by expert stylists.",
      image:
        "https://images.unsplash.com/photo-1520637736862-4d197d17c80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/salon",
      category: "Unisex Salon",
      features: [
        "Hair Styling",
        "Color Treatments",
        "Grooming",
        "Specialized Care",
      ],
    },
    {
      id: 3,
      title: "Makeup",
      subtitle: "Unveil the Beauty, Shine with Confidence",
      description:
        "Signature looks for bridal, events, and editorials — designed to enhance your natural elegance.",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/makeup",
      category: "Makeup",
      features: [
        "Bridal Makeup",
        "Event Styling",
        "Photography",
        "Special Occasions",
      ],
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Treatments",
      description:
        "Luxury spa experiences using finest natural products and advanced techniques",
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Wellness",
      description:
        "Complete well-being approach nurturing both physical and mental health",
      color: "from-warm-400 to-warm-600",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Organic",
      description:
        "Organic treatments that are safe for you and environmentally conscious",
      color: "from-accent-400 to-accent-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Therapists",
      description:
        "Certified professionals with years of experience in exceptional service",
      color: "from-secondary-400 to-secondary-600",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Premium Services",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Expert Therapists",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      content:
        "Nagomi has transformed my self-care routine. The serene atmosphere and expert treatments make every visit a rejuvenating experience.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9a0f4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Anjali Verma",
      role: "Spa Enthusiast",
      content:
        "The Japanese-inspired philosophy and authentic treatments at Nagomi create a perfect harmony of relaxation and wellness.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Meera Gupta",
      role: "Beauty Lover",
      content:
        "From spa treatments to salon services, Nagomi offers everything under one roof with exceptional quality and care.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const whyChoosePoints = [
    "Expert therapists & stylists",
    "Women-exclusive wellness spa + unisex salon",
    "Authentic Japanese-inspired rituals",
    "Premium quality products",
    "Personalized care for every client",
    "Relaxing, zen-inspired ambience",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Ensure video plays smoothly and continuously
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        video.play().catch(e => {
          console.log('Video autoplay failed after load:', e);
        });
      };

      const handleError = (e) => {
        console.error('Video failed to load:', e);
        setVideoError(true);
      };

      const handlePause = () => {
        // Attempt to resume playback if paused unexpectedly
        if (video.paused && !video.ended) {
          setTimeout(() => {
            video.play().catch(e => {
              console.log('Video resume failed:', e);
            });
          }, 100);
        }
      };

      const handleVisibilityChange = () => {
        // Resume video when page becomes visible again
        if (!document.hidden && video.paused && !video.ended) {
          video.play().catch(e => {
            console.log('Video resume on visibility change failed:', e);
          });
        }
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('pause', handlePause);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Ensure video stays muted and playing
      video.muted = true;
      video.play().catch(e => {
        console.log('Video autoplay failed:', e);
      });

      // Continuous check to ensure video stays playing
      const playCheckInterval = setInterval(() => {
        if (video.paused && !video.ended && !document.hidden) {
          video.play().catch(e => {
            console.log('Video continuous play check failed:', e);
          });
        }
      }, 1000);

      return () => {
        clearInterval(playCheckInterval);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('pause', handlePause);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          {videoError ? (
            // Fallback static background if video fails
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
              }}
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              controls={false}
              poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
              {/* Fallback message if video fails */}
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary-900/60"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-primary-300/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4"
          >
            <div className="flex items-center gap-3 justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <Flower2 className="w-10 h-10 text-primary-300" />
              </motion.div>
              <span className="inline-block bg-primary-500/20 backdrop-blur-sm text-primary-200 px-6 py-2 rounded-full text-sm font-medium tracking-wide">
                Bihar's Premier Wellness Destination
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-title mb-6 backdrop-blur-sm rounded-2xl p-4 inline-block"
          >
            Transform Your Self-Care
            <br />
            Journey with Nagomi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-subtitle mb-10 text-white rounded-xl p-4 inline-block max-w-3xl"
          >
            Discover the art of mindful wellness in Bihar's premier sanctuary.
            Where ancient Japanese rituals meet modern luxury, creating moments
            of pure tranquility and radiant beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center "
          >
            <Link
              to="/about-us"
              className="btn-primary group flex flex-row items-center hover:!text-black"
            >
              <span className="relative z-10">Discover Our Story</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <button className="btn-secondary group flex flex-row items-center hover:!text-black">
              <Play className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Watch Our Story</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Soft Era Section (Revamped) */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-warm-50">
        {/* Background Accents using Book Appointment gradient tones */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-gradient-to-br from-primary-500/25 to-primary-700/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-gradient-to-tr from-primary-500/20 to-primary-700/25 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2.5 rounded-full mb-6 shadow-glow">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-display tracking-wide">
                Welcome to your soft era
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900 mb-6">
              Nagomi — Bihar’s New Ritual of Calm.
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Discover a modern sanctuary where beauty meets serenity and
              self-care turns into soul-care. Inspired by the Japanese
              philosophy of harmony and graceful living, Nagomi offers spa
              therapies, grooming, and styling designed to help you pause,
              reset, and glow.
            </p>

            {/* Quick value chips from site data */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                "Expert therapists & stylists",
                "Women-exclusive spa",
                "Japanese-inspired rituals",
                "Premium products",
                "Personalized care",
                "Zen-inspired ambience",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-xl px-4 py-3 shadow-soft"
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-700" />
                  <span className="text-sm text-gray-700 font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us" className="btn-primary">
                Book Appointment
              </Link>
              <Link to="/about-us" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Elegant stacked cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Premium glass card with the three pillars */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-300/40 to-primary-600/30 rounded-full blur-2xl" />
              <h3 className="section-heading">
                This isn’t just a salon. Not just only spa.
              </h3>
              <p className="text-gray-600 mb-6">
                It’s a movement — a mood — a modern sanctuary for those who
                crave more than surface beauty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "One ritual",
                    sub: "Mindful practices that center you",
                    color: "from-rose-500 to-pink-600",
                    icon: <Flower2 className="w-6 h-6" />,
                  },
                  {
                    title: "One experience",
                    sub: "A holistic journey of transformation",
                    color: "from-purple-500 to-indigo-600",
                    icon: <Heart className="w-6 h-6" />,
                  },
                  {
                    title: "One step closer",
                    sub: "Discover your authentic beauty",
                    color: "from-emerald-500 to-teal-600",
                    icon: <Sparkles className="w-6 h-6" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl p-5 bg-white/80 backdrop-blur-md border border-white/60 shadow-soft hover:shadow-glow transition-all duration-500"
                  >
                    <div
                      className={`mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl text-white shadow-soft bg-gradient-to-r ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini stats aligned with site */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  n: "10+",
                  l: "Expert Therapists",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  n: "100%",
                  l: "Satisfaction Rate",
                  color: "from-emerald-400 to-emerald-600",
                },
                {
                  n: "15+",
                  l: "Premium Treatments",
                  color: "from-purple-400 to-purple-600",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center rounded-2xl p-6 bg-white/90 border border-white/60 shadow-soft"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${s.color}`}
                  >
                    <span className="font-bold">{s.n}</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-warm-50 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">Why Choose Nagomi</h2>
            <p className="section-subtitle">
              Experience the perfect blend of traditional wisdom and modern
              luxury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="floating-card p-8 text-center group"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-soft-lg group-hover:shadow-glow`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="section-heading text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive wellness and beauty solutions under one roof
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mt-12">
              {["All", "Wellness Spa", "Unisex Salon", "Makeup"].map(
                (category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                      filter === category
                        ? "bg-primary-500 text-white shadow-soft-lg"
                        : "bg-white text-gray-700 hover:bg-primary-50 border border-gray-200 hover:border-primary-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(
                (service) => filter === "All" || service.category === filter
              )
              .map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card group"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay-warm opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute top-6 right-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="btn-ghost w-full text-center group-hover:bg-primary-500 group-hover:text-white"
                    >
                      Explore Services
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nagomi Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white sheen-container">
        {/* Decorative gradient blooms + subtle pattern using Book Appointment tones */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-32 w-[36rem] h-[36rem] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(40rem_40rem_at_20%_20%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(30rem_30rem_at_80%_70%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Narrative + feature tiles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white px-6 py-2.5 rounded-full mb-6 shadow-soft">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-display tracking-wide">Why choose us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-lux font-bold leading-tight mb-2">
              Why Choose Nagomi
            </h2>
            <div className="section-decorative-line w-28 h-1 mb-6 ml-0" />
            <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl">
              Luxury, care, and craft — brought together in a serene,
              Japanese-inspired space. We pair premium products with mindful
              rituals so every visit feels restorative and elevating.
            </p>

            {/* Feature tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden tilt-hover"
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl text-white shadow-soft bg-gradient-to-r from-white/30 to-white/10">
                    <span className="icon-rot spin">{f.icon}</span>
                  </div>
                  <div className="font-semibold tracking-tight">{f.title}</div>
                  <div className="text-sm text-white/80 leading-relaxed">
                    {f.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="btn-secondary border-white text-black hover:bg-white hover:text-black"
              >
                Book Appointment
              </Link>
              <Link
                to="/about-us"
                className="btn-ghost text-black border-white"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Premium glass panel with gradient border, stats + value chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Gradient border wrapper */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/40 overflow-hidden">
              <div className="rounded-3xl bg-white/10 backdrop-blur-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">By the numbers</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {stats.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 mb-2">
                        {s.icon}
                      </div>
                      <div className="text-2xl font-bold">{s.number}</div>
                      <div className="text-xs text-white/80">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="group flex items-center gap-2 text-white/90">
                    <span className="icon-rot">
                      <Shield className="w-5 h-5" />
                    </span>{" "}
                    <span className="text-sm">Hygiene First</span>
                  </div>
                  <div className="group flex items-center gap-2 text-white/90">
                    <span className="icon-rot">
                      <Award className="w-5 h-5" />
                    </span>{" "}
                    <span className="text-sm">Certified Team</span>
                  </div>
                  <div className="group flex items-center gap-2 text-white/90">
                    <span className="icon-rot">
                      <Clock className="w-5 h-5" />
                    </span>{" "}
                    <span className="text-sm">On-time Service</span>
                  </div>
                </div>

                {/* Value chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChoosePoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/95 text-gray-800 rounded-xl px-4 py-3 shadow-soft"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-warm-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real experiences from our valued clients
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="floating-card p-12 text-center"
              >
                <Quote className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-200"
                  />
                  <div className="text-left">
                    <h4 className="font-serif font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-500 scale-125"
                      : "bg-primary-200 hover:bg-primary-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action
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
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Book your appointment today and experience the transformative power 
              of Japanese-inspired wellness in the heart of Bihar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact-us" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Book Your Appointment
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
