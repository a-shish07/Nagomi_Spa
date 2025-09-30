import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function Makeup() {
  const blocks = [
    { title: 'Party Makeup', items: [] },
    { title: 'Bridal Makeup', items: [] },
    { title: 'Engagement makeup', items: [] },
    { title: 'Bridal Packages', items: [] },
    { title: 'Draping Services', items: [] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 image-overlay pointer-events-none" />
        <div className="container-custom text-center">
          <motion.span variants={fade} initial="hidden" animate="show" className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-warm-700 border border-white/60 shadow-soft text-sm font-medium tracking-wider">Makeup</motion.span>
          <motion.h1 variants={fade} initial="hidden" animate="show" className="hero-title mt-6">Enhance Your Beauty with our Expert Makeup Services</motion.h1>
          <motion.p variants={fade} initial="hidden" animate="show" className="hero-subtitle mt-6 text-gray-600">From soft glam to bold editorial, we craft looks that are camera-ready and long-wearing.</motion.p>
          <motion.div variants={fade} initial="hidden" animate="show" className="mt-10 flex items-center justify-center gap-4">
            <a href="#grid" className="btn-primary">Explore</a>
            <a href="/contact-us" className="btn-secondary">Get a Quote</a>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section id="grid" className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Our Makeup Offerings</h2>
          <p className="section-subtitle">Tailored artistry with premium, skin-kind products.</p>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blocks.map((b, idx) => (
              <motion.div key={idx} variants={fade} className="floating-card p-8">
                <h3 className="section-heading m-0">{b.title}</h3>
                <p className="text-gray-600 mt-2">Professional prep, durable finish, and style customization.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">Experienced artists, premium products, and personalized service.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              ['Experience Makeup Artists', 'Bridal, editorial, and occasion expertise.'],
              ['High Quality Products', 'Photography-safe, long-wear, and skin-loving.'],
              ['Personalized Service', 'Looks tailored to features, outfit, and light.'],
            ].map(([title, desc], i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="floating-card p-8 text-center group bg-gradient-to-br from-white/90 via-primary-50/50 to-warm-50/90 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <h3 className="section-heading mb-2 leading-tight">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="floating-card p-12 text-center bg-gradient-to-br from-white/90 via-primary-50/50 to-warm-50/90 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Let’s Create Your Signature Look</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Share your occasion and mood board — we’ll craft a beautiful, enduring finish.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact-us" className="btn-primary">Book a Trial</a>
              <a href="/services" className="btn-secondary">Explore All Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}