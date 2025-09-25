import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Men() {
  const groups = [
    {
      title: 'Hair',
      items: [
        'Hair cut',
        'Hair Spa',
        'Hair Treatments',
        'Beard Grooming',
        'Hair colour (Ammonia free)',
        'Skin Brightening Treatment',
      ],
    },
    {
      title: 'Self care',
      items: [
        'Face clean up',
        'D Tan',
        'Pedicure',
        'Foot massage',
        'Facials',
        'Pre Wedding Grooming Pack',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 image-overlay-soft pointer-events-none" />
        <div className="container-custom text-center">
          <motion.span initial="hidden" animate="show" variants={fade} className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-primary-700 border border-white/60 shadow-soft text-sm font-medium tracking-wider">Luxury Men Salon</motion.span>
          <motion.h1 initial="hidden" animate="show" variants={fade} className="hero-title mt-6">Effortless Grooming, Elevated</motion.h1>
          <motion.p initial="hidden" animate="show" variants={fade} className="hero-subtitle mt-6 text-gray-600">Modern techniques and clean finishes designed around your routine.</motion.p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Popular Men’s Services</h2>
          <p className="section-subtitle">Minimal downtime. Maximum impact.</p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {groups.map((g, i) => (
              <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="floating-card p-8">
                <h3 className="section-heading m-0">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {g.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="premium-card text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Book Your Grooming Session</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Reserve a slot that fits your schedule. Our experts will tailor the service to your preference.</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact-us" className="btn-primary">Book Now</a>
              <a href="/services" className="btn-secondary">See All Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}