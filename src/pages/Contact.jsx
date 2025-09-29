import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Shield,
  Sparkles,
  Star,
  CheckCircle2,
  Calendar
} from 'lucide-react'

// Elegant, unique, and professional Contact page redesign
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const services = [
    'Wellness Spa',
    'Unisex Salon',
    'Makeup Services',
    'Hair Styling',
    'Facial Treatments',
    'Body Massage',
    'Other'
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />, 
      title: 'Call Us',
      info: '+91-9122928999',
      link: 'tel:+919122928999',
      accent: 'from-primary-400 to-primary-600'
    },
    {
      icon: <Mail className="w-6 h-6" />, 
      title: 'Email',
      info: 'info.nagomiwellness@gmail.com',
      link: 'mailto:info.nagomiwellness@gmail.com',
      accent: 'from-secondary-400 to-secondary-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />, 
      title: 'Visit',
      info: 'H No-253 Near Ruban hospital, Patliputra Colony, Patna, Bihar 800013',
      link: 'https://maps.google.com/?q=Ruban+Hospital+Patliputra+Colony+Patna',
      accent: 'from-warm-400 to-warm-600'
    },
    {
      icon: <Clock className="w-6 h-6" />, 
      title: 'Hours',
      info: 'Mon–Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 6:00 PM',
      link: '#',
      accent: 'from-accent-400 to-accent-600'
    }
  ]

  const faqs = [
    {
      q: 'Do I need to book an appointment in advance?',
      a: 'We highly recommend booking in advance to secure your preferred time. Same-day appointments are subject to availability.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Please notify us at least 24 hours in advance to cancel or reschedule. Late cancellations may incur a fee.'
    },
    {
      q: 'Do you offer customized wellness packages?',
      a: 'Yes. Our team can tailor spa and salon services based on your goals—relaxation, skin renewal, bridal prep, and more.'
    },
    {
      q: 'Is there parking available?',
      a: 'Yes, convenient parking is available near the location. Feel free to call us for guidance if needed.'
    }
  ]

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Contact form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setIsSubmitting(false)
    alert('Thank you! Your message has been received. We will contact you shortly.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50">
      {/* Hero */}
      <section className="relative min-h-[26rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-900/50 to-warm-900/60" />
        </div>

        {/* Floating accents */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4 + Math.random() * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm tracking-wide">
              <Sparkles className="w-4 h-4" /> We’d love to hear from you
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-title mb-6 backdrop-blur-sm rounded-2xl p-4 inline-block"
          >
            Contact Nagomi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hero-subtitle  text-white font-semibold rounded-xl p-4 inline-block"
          >
            A premium wellness experience—crafted with care, delivered with elegance.
          </motion.p>
        </div>
      </section>

      {/* Contact info ribbon */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl border border-white/40 hover:-translate-y-1 transition-all"
              >
                <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-glow mb-4">
                  {item.icon}
                </div>
                <div className="font-semibold text-lg mb-1">{item.title}</div>
                <div className="text-gray-600 whitespace-pre-line leading-relaxed">{item.info}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Single Map + Overlay card */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl shadow-soft-lg border border-white/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.256917049648!2d85.116!3d25.620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58545b2a25a5%3A0x1234567890abcdef!2sRuban%20Hospital!5e0!3m2!1sen!2sin!4v1631783790123!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Floating address card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:w-[28rem]"
            >
              <div className="glass-card p-5 rounded-2xl text-white">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-500/90 flex items-center justify-center shadow-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Find Us</div>
                    <div className="text-primary-100 text-sm">H No-253 Near Ruban Hospital, Patliputra Colony, Patna 800013</div>
                    <a
                      href="https://maps.google.com/?q=Ruban+Hospital+Patliputra+Colony+Patna"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-white/90 hover:text-white"
                    >
                      Get Directions <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment form + Highlights */}
      <section className="pb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-white/40 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-glow">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Send Us a Message</h2>
            </div>
            <p className="text-gray-600 mb-8">Share your requirements and our team will reach out with tailored recommendations.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your needs..."
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition resize-y"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full shadow-glow hover:shadow-glow-lg hover:translate-y-[-1px] transition disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-2 text-primary-600" /> We respect your privacy
                </div>
              </div>
            </form>
          </motion.div>

          {/* Highlights / Trust */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="floating-card p-7">
              <h3 className="text-xl font-semibold mb-4">Why Nagomi?</h3>
              <ul className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5 text-primary-600" />, text: 'Certified therapists and expert stylists' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-primary-600" />, text: 'Premium products and hygienic environment' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-primary-600" />, text: 'Personalized wellness recommendations' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-primary-600" />, text: 'Japanese-inspired, calming ambiance' }
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    {f.icon}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="floating-card p-7">
              <h3 className="text-xl font-semibold mb-4">Plan Your Visit</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span>Sun: 10:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="mt-5">
                <a
                  href="tel:+919122928999"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline"
                >
                  Call to schedule <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="floating-card p-7">
              <h3 className="text-xl font-semibold mb-4">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={20} />, href: '#' },
                  { icon: <Instagram size={20} />, href: '#' },
                  { icon: <Youtube size={20} />, href: '#' }
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ scale: 1.1, rotate: i === 1 ? -5 : 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 flex items-center justify-center rounded-full text-white bg-gradient-to-br from-primary-500 to-primary-600 shadow-glow"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know to plan your Nagomi experience</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-white/40 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <motion.span
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-500"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-5 text-gray-700"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-warm-600 text-white p-10"
          >
            <div className="absolute inset-0 opacity-20">
              {[...Array(14)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                />
              ))}
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">Ready for a mindful transformation?</h3>
                <p className="text-primary-50/90">Let’s design a wellness plan just for you. Reach out and we’ll take care of the rest.</p>
              </div>
              <div className="text-left md:text-right">
                <a
                  href="tel:+919122928999"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-full font-semibold shadow-glow hover:shadow-glow-lg hover:-translate-y-[1px] transition"
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact