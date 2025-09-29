import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, UserCheck, Mail, ExternalLink } from 'lucide-react'

const PrivacyPolicy = () => {
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
              <Shield className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Your privacy and trust matter to us at Nagomi Wellness & Beauty
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
                <div className="space-y-8">
                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <Eye className="w-6 h-6" />
                      1. Information We Collect
                    </h3>
                    <p className="mb-4">When you engage with Nagomi wellness, either online or in person, we may collect certain personal details such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your name, phone number, email address</li>
                      <li>Appointment preferences or service history</li>
                      <li>Limited financial or billing information (when applicable)</li>
                      <li>Other relevant data to help customize your experience</li>
                    </ul>
                    <p className="mt-4">This information helps us ensure a smooth, personalized, and secure experience whether you're booking a treatment, joining a membership, or exploring our offerings.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <Lock className="w-6 h-6" />
                      2. How We Use Your Information
                    </h3>
                    <p className="mb-4">Your information is used solely to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fulfill your booking requests and process payments securely</li>
                      <li>Keep you informed of new offerings, experiences, or exclusive promotions</li>
                      <li>Tailor your wellness journey based on your preferences</li>
                      <li>Enhance our services and respond to your inquiries</li>
                    </ul>
                    <p className="mt-4">We may occasionally work with trusted third-party providers (e.g., for payment processing or CRM tools), but your data will always be protected under our privacy-first commitment.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">3. Data Retention & Security</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your information will be retained for as long as necessary to support your ongoing relationship with Nagomi. Once it's no longer needed, it will be securely deleted or anonymized.</li>
                      <li>We use industry-standard encryption and safety protocols to protect your data against unauthorized access, misuse, or loss.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <UserCheck className="w-6 h-6" />
                      4. Your Rights
                    </h3>
                    <p className="mb-4">You have full control over your personal data. You may:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Request access to the information we hold about you</li>
                      <li>Update or correct inaccurate details</li>
                      <li>Request deletion of your data (subject to applicable legal retention periods)</li>
                    </ul>
                    <p className="mt-4">To make any such request, simply reach out to: <strong>info.nagomiwellness@gmail.com</strong></p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <ExternalLink className="w-6 h-6" />
                      5. External Links
                    </h3>
                    <p>Our website may contain links to third-party platforms (e.g., wellness brands, online bookings). Once you leave our site, our Privacy Policy no longer applies. We recommend reviewing the privacy terms of any external sites you visit.</p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-200">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center gap-3">
                    <Mail className="w-8 h-8 text-primary-500" />
                    Questions About Your Privacy?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you have any questions about our Privacy Policy or how we handle your data, please don't hesitate to contact us at <strong>info.nagomiwellness@gmail.com</strong>. Your trust is important to us, and we're here to address any concerns you may have.
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

export default PrivacyPolicy