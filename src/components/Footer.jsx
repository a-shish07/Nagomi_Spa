import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-primary-400/10 rounded-full"></div>
      </div>

{/* Main Footer */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
                <motion.img
                  whileHover={{ rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  src="/logo.jpg"
                  alt="Nagomi Logo"
                  className="w-16 h-16 rounded-full object-cover shadow-glow"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-white">NAGOMI</span>
                  <span className="font-light text-sm tracking-wider text-primary-300">WELLNESS & BEAUTY SALON</span>
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
                Nagomi is a movement — a mood — a modern sanctuary for those who crave more than just surface beauty.
              </p>
              <div className="flex items-center space-x-2 text-primary-300">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Crafted with love in Bihar, India</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-serif text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-4">
                <Link to="/" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium hover:translate-x-1 transform">
                  Home
                </Link>
                <Link to="/about-us" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium hover:translate-x-1 transform">
                  About Us
                </Link>
                <Link to="/services" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium hover:translate-x-1 transform">
                  Services
                </Link>
                <Link to="/gallery" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium hover:translate-x-1 transform">
                  Gallery
                </Link>
                <Link to="/contact-us" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium hover:translate-x-1 transform">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Legal & Policies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-serif text-xl font-bold text-white mb-6">Legal & Policies</h4>
              <div className="space-y-4">
                <Link to="/terms-conditions-wellness" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform">
                  T&C (Wellness)
                </Link>
                <Link to="/terms-conditions-salon" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform">
                  T&C (Salon)
                </Link>
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform">
                  Refund Policy
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16 pt-12 border-t border-white/10"
          >
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Ready to Begin Your Wellness Journey?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the harmony of mind, body, and spirit at Nagomi. Book your appointment today and discover true relaxation.
            </p>
            <Link to="/contact-us" className="btn-primary text-lg px-10 py-4">
              Book An Appointment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/80 backdrop-blur-sm py-8 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 nagomi.co.in. All Rights Reserved. | Opening in 37 Days
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-400">Development by</span>
              <a 
                href="http://tjfdigital.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
              >
                Tjf DigiTal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer