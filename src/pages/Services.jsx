import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Palette } from 'lucide-react'

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const services = [
    {
      id: 1,
      title: "Wellness Spa (Women)",
      subtitle: "Relax, Rejuvenate & Rediscover Yourself",
      description: "Experience our comprehensive wellness spa treatments designed exclusively for women. From traditional massages to modern skincare therapies, find your path to complete relaxation.",
      image: "/images/wellness-spa.jpg",
      link: "/wellness-spa",
      category: "Wellness Spa",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Full body massage therapy",
        "Facial treatments & skincare",
        "Aromatherapy sessions",
        "Body wraps & scrubs",
        "Stress relief treatments"
      ]
    },
    {
      id: 2,
      title: "Unisex Salon",
      subtitle: "Redefine Your Style, Elevate Your Confidence",
      description: "Our unisex salon offers cutting-edge styling services for both men and women. From classic cuts to contemporary styles, express your unique personality.",
      image: "/images/unisex-salon.jpg",
      link: "/salon",
      category: "Unisex Salon",
      icon: <Scissors className="w-8 h-8" />,
      features: [
        "Hair cutting & styling",
        "Hair coloring & highlights",
        "Hair treatments & care",
        "Beard grooming (Men)",
        "Special occasion styling"
      ]
    },
    {
      id: 3,
      title: "Makeup",
      subtitle: "Unveil the Beauty, Shine with Confidence",
      description: "Professional makeup services for all occasions. Our expert artists enhance your natural beauty with premium products and techniques.",
      image: "/images/makeup.jpg",
      link: "/makeup",
      category: "Makeup",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "Bridal makeup",
        "Party & event makeup",
        "Professional photoshoot makeup",
        "Makeup consultation",
        "Makeup lessons"
      ]
    }
  ]

  const filterCategories = ['All', 'Wellness Spa', 'Unisex Salon', 'Makeup']

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/services-hero.jpg)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Complete Beauty & Wellness Solutions
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center flex-wrap gap-4">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card group"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/cbab80/ffffff?text=${encodeURIComponent(service.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="w-full btn-primary text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-primary-light max-w-3xl mx-auto">
              Experience the perfect blend of traditional wisdom and modern techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-light">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services