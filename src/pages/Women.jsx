import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Women() {
  const blocks = [
    {
      title: 'Women Salon — Hair Basics',
      items: [
        'Hair Cut', 'Blow Dry', 'Hair wash', 'Head Massage', 'Oiling', 'Hair styling', 'Hair Trimming'
      ],
    },
    {
      title: 'Colour & Highlights',
      items: [
        'Root Touch up', 'Balayage', 'Global', 'Streaks', 'Grey coverage', 'Ombre'
      ],
    },
    {
      title: 'Texture & Smoothening',
      items: [
        'Keratin', 'Botox', 'Straightening', 'Rebonding', 'Smoothening', 'Japanese Straightening'
      ],
    },
    {
      title: 'Hands & Feet',
      items: [
        'Pedicure', 'Spa Pedicure', 'Anti Tan pedicure', 'Foot spa', 'Manicure', 'Spa Manicure', 'Hand Spa'
      ],
    },
    {
      title: 'Skin & Facial Care',
      items: [
        'Clean up', 'Facials', 'Hydra Facial', 'Skin Brightening', 'Anti ageing collagen treatment', 'Pre bridal treatment', 'Threading'
      ],
    },
    {
      title: 'Nails',
      items: [
        'Nail Art', 'Nail paint', 'Nail manicure', 'Nail Extensions'
      ],
    },
    {
      title: 'Scalp & Hair Spa',
      items: [
        'Dandruff control treatments', 'Hair detox', 'Scalp Exfoliation', 'Deep conditioning', 'Intense hydration spa', 'Volumizing', 'Olaplex bond rebuilding', 'Protein treatment', 'Post colour protect spa'
      ],
    },
    {
      title: 'Waxing',
      items: [
        'Rice waxing', 'Chocolate wax', 'Full body wax', 'Aroma Waxing'
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 image-overlay-warm pointer-events-none" />
        <div className="container-custom text-center">
          <motion.span initial="hidden" animate="show" variants={fade} className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-warm-700 border border-white/60 shadow-soft text-sm font-medium tracking-wider">Women Salon</motion.span>
          <motion.h1 initial="hidden" animate="show" variants={fade} className="hero-title mt-6">Refined Beauty, Thoughtfully Crafted</motion.h1>
          <motion.p initial="hidden" animate="show" variants={fade} className="hero-subtitle mt-6 text-gray-600">Luxurious care across hair, skin, hands & feet — with sensorial, soothing rituals.</motion.p>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Women’s Services</h2>
          <p className="section-subtitle">Premium treatments designed for visible results and long-lasting comfort.</p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {blocks.map((b, i) => (
              <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="morphing-card">
                <h3 className="section-heading m-0">{b.title}</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
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
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Pamper Yourself with a Luxury Session</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Choose from rituals curated to your lifestyle — our team will personalize every detail.</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact-us" className="btn-primary">Book Now</a>
              <a href="/services" className="btn-secondary">All Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}