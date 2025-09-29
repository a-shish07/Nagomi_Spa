import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Heart, Phone, Mail, Clock, Calendar, Shield, Users, Award, Scissors } from 'lucide-react'

const TermsSalon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Scissors className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h1 className="section-title">Terms & Conditions</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Nagomi Wellness & Beauty – General Terms & Conditions for Salon Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-serif font-bold text-primary-800 mb-8 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary-500" />
                  Welcome to Nagomi
                </h2>

                <p className="text-lg leading-relaxed mb-8">
                  Welcome to Nagomi — where beauty meets calm. These terms apply to all services and products offered at Nagomi Wellness & Beauty Pvt. Ltd. By booking a service or purchasing a product with us, you agree to the following simple guidelines that help us create a smooth, respectful, and harmonious experience for everyone.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Calendar className="w-6 h-6" />
                      Appointments & Cancellations
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We encourage you to book your appointment in advance to secure your preferred time slot.</li>
                      <li>Running late? We hold your spot for 25 minutes after the scheduled time. After that, we may release the slot to accommodate others.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      Your Comfort & Safety
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We may ask you to fill a short consent and wellness form before certain treatments — this helps us tailor the experience to you.</li>
                      <li>If it's your first time trying a new service, we may recommend a patch test for your safety.</li>
                      <li>If you're pregnant, have any allergies or medical conditions, please inform our team in advance so we can take extra care during your treatment.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      Service Etiquette
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Our experts are trained to create a respectful, calm environment for all. We request the same from our guests.</li>
                      <li>Nagomi reserves the right to decline a service if it may be unsafe for your condition or if any inappropriate behavior occurs.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">Pricing</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Service pricing may vary slightly based on location and is subject to change without prior notice.</li>
                      <li>All prices are inclusive of applicable taxes at the time of billing.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-200">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center gap-3">
                    <Award className="w-8 h-8 text-primary-500" />
                    Our Commitment
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're here to offer you more than just beauty or wellness — we're here to offer you peace. Thank you for choosing Nagomi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsSalon