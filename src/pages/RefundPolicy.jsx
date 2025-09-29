import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Heart, Phone, Mail, Package, CreditCard, Clock, AlertTriangle } from 'lucide-react'

const RefundPolicy = () => {
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
              <RefreshCw className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h1 className="section-title">Refund Policy</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              At Nagomi, every service is thoughtfully curated to deliver harmony, care, and transformation
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
                <div className="text-center mb-12">
                  <Heart className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <p className="text-xl italic text-gray-600">
                    "While we always strive to offer the best possible experience, we understand that sometimes plans change."
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">Service Refunds</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Completed services are non-refundable.</li>
                      <li>If you're unsatisfied with a service, please notify our front desk or email us at <strong>info.nagomiwellness@gmail.com</strong> within 24 hours of your visit. We'll do our best to resolve it — either by a corrective service or a service credit.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <Clock className="w-6 h-6" />
                      Advance Bookings / Prepaid Services
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>For cancellations made 24 hours or more in advance, you are eligible for a 100% refund or reschedule.</li>
                      <li>Cancellations made less than 24 hours before the appointment may be subject to a 25% cancellation fee.</li>
                      <li>No-shows or last-minute cancellations may not be eligible for a refund.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <Package className="w-6 h-6" />
                      Package & Membership Refunds
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Packages and memberships are non-refundable once activated or partially used.</li>
                      <li>Unused packages may be eligible for conversion into service credits within 7 days of purchase, subject to management approval.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-3">
                      <CreditCard className="w-6 h-6" />
                      Product Returns
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Products purchased at Nagomi may be returned or exchanged within 7 days, only if unused, unopened, and in original condition.</li>
                      <li>Refunds for product returns will be issued as service credit or to the original payment method, as per discretion.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-200">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-primary-500" />
                    Need Help?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    We're here to listen. For all refund-related queries, write to us at <strong>info.nagomiwellness@gmail.com</strong> or WhatsApp us at <strong>+91-9122928999.</strong>
                  </p>
                  <p className="text-lg italic text-gray-600">
                    Because at Nagomi, your peace matters — even when things don't go as planned.
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

export default RefundPolicy