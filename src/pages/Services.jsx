import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const [filter, setFilter] = useState('All')

  const services = [
    {
      id: 1,
      title: "Wellness Spa (Women)",
      subtitle: "Relax, Rejuvenate & Rediscover Yourself",
      description:
        "Premium spa therapies that restore balance and glow — from therapeutic massages to mindful facials.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/wellness-spa",
      category: "Wellness Spa",
      features: [
        "Therapeutic Massage",
        "Facial & Skin Treatments",
        "Head & Scalp Therapies",
        "Body Therapies",
      ],
    },
    {
      id: 2,
      title: "Unisex Salon",
      subtitle: "Redefine Your Style, Elevate Your Confidence",
      description:
        "Modern cuts, color artistry, and grooming for all — crafted by expert stylists.",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        "Hair Styling",
        "Party Makeup",
      ],
    },
  ]

  const filterCategories = ['All', 'Wellness Spa', 'Unisex Salon', 'Makeup']

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(service => service.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero Section */}
     

      {/* Services Section */}
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
                    <h3 className="text-2xl font-serif font-bold mb-2 text-black">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-black mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-black"
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

      {/* Why Choose Our Services */}
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
            <h2 className="section-title bg-white/90 backdrop-blur-sm rounded-2xl p-4 inline-block">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mt-2">
              Experience the perfect blend of traditional wisdom and modern techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Expert Professionals",
                description: "Our certified therapists and stylists bring years of experience and expertise to every service."
              },
              {
                title: "Premium Products",
                description: "We use only the highest quality, organic and natural products for all treatments."
              },
              {
                title: "Personalized Care",
                description: "Each service is tailored to your individual needs and preferences."
              },
              {
                title: "Relaxing Environment",
                description: "Immerse yourself in our tranquil, Japanese-inspired ambiance."
              },
              {
                title: "Holistic Approach",
                description: "We focus on your complete well-being, not just external beauty."
              },
              {
                title: "Affordable Luxury",
                description: "Experience premium services at competitive prices with exceptional value."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="floating-card p-6 text-center group bg-gradient-to-br from-white/90 via-primary-50/50 to-warm-50/90 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact-us" className="btn-secondary">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services