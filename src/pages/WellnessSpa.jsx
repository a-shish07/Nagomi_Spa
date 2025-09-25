import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

export default function WellnessSpa() {
  const sections = [
    {
      tag: 'Body Therapies',
      items: [
        'Potli Massage',
        'Shiatsu Massage',
        'Onsen Bath Ritual',
        'Mind Therapy Ritual',
        'Japanese Body Scrub & Wrap',
      ],
    },
    {
      tag: 'Facial & Skin Rituals',
      items: [
        'Matcha Glow Facial',
        'Sakura Hand Therapy',
        'Kobido Facial Massage',
        'Rice Bran Brightening Ritual',
      ],
    },
    {
      tag: 'Head & Scalp Therapies',
      items: [
        'Japanese Head & Scalp Ritual',
        'Zen Stress-Relief Head Massage',
      ],
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 image-overlay-soft pointer-events-none" />
        <div className="container-custom">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.span variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-primary-700 border border-white/60 shadow-soft text-sm font-medium tracking-wider">
              Wellness Spa
            </motion.span>
            <motion.h1 variants={fadeInUp} className="hero-title mt-6">
              Nagomi Wellness Spa is almost here
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle mt-6 text-gray-600">
              Experience healing therapies and soulful retreats — ritual-inspired wellness for mind, body and spirit.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-4">
              <a href="#sections" className="btn-primary">Explore Therapies</a>
              <a href="/contact-us" className="btn-secondary">Book Appointment</a>
            </motion.div>
          </motion.div>
        </div>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary-300/40 to-warm-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-accent-300/40 to-primary-200/30 blur-3xl" />
      </section>

      {/* Sections */}
      <section id="sections" className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Signature Experiences</h2>
          <p className="section-subtitle">Rooted in time-honored Japanese-inspired rituals, designed for deep renewal and calm.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="service-card p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="section-heading m-0">{s.tag}</h3>
                  <span className="w-10 h-1 rounded-full bg-gradient-to-r from-primary-400 to-primary-600" />
                </div>
                <ul className="space-y-2 text-gray-700">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">We obsess over craft, care, and comfort — so every detail feels premium.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Expert Therapist', 'Experienced hands, mindful touch, and technique-led therapies.'],
              ['Organic Products', 'Skin-safe, sensorial formulas chosen for results and relaxation.'],
              ['Luxurious Ambience', 'A serene, modern sanctuary with soft light, textures and calm.'],
            ].map(([title, desc], i) => (
              <div key={i} className="feature-card">
                <h3 className="section-heading m-0">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="premium-card text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Begin Your Wellness Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Allow our experts to curate a personalized ritual tailored to your lifestyle and needs.</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact-us" className="btn-primary">Book Appointment</a>
              <a href="/services" className="btn-secondary">View All Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}