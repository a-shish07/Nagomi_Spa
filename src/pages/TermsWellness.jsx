import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Heart, Phone, Mail, Clock, Calendar, Shield, Users, Award } from 'lucide-react'

const TermsWellness = () => {
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
              <FileText className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h1 className="section-title">Terms & Conditions</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Nagomi Wellness & Beauty – Terms & Spa Etiquette for Wellness Services
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
                  At Nagomi Wellness & Beauty, we are devoted to curating an experience of peace, balance, and mindful self-care. To maintain the serene environment we envision for every guest, we kindly ask you to review and honor the following terms, etiquette, and service guidelines.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">1. Continuous Updates to Terms</h3>
                    <p>We may revise these Terms & Conditions from time to time to reflect evolving practices and improvements. All updates become effective as soon as they are posted on our website. By continuing to use our services or site, you agree to any such changes. We encourage you to revisit this page regularly to stay informed.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">2. Spa Etiquette – The Nagomi Way</h3>
                    <p className="mb-4">We respectfully request all guests to maintain a peaceful, respectful atmosphere within our spa.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Please keep mobile phones on silent and avoid loud conversations to preserve the calm.</li>
                      <li>As we strive to maintain a tranquil experience for all, we recommend avoiding bringing your pets, unless the space is designed to accommodate them.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Calendar className="w-6 h-6" />
                      3. Advance Reservations
                    </h3>
                    <p className="mb-4">To ensure your preferred time and service, we recommend booking at least 24 hours in advance via:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Our website</li>
                      <li>Directly at the Nagomi reception desk</li>
                      <li>Or by calling our wellness care team at <strong>+91 9122928999</strong></li>
                    </ul>
                    <p className="mt-4">Walk-in guests are warmly welcomed, subject to therapist and room availability.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6" />
                      4. Appointment Punctuality
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>If you are running late, we kindly ask that you inform us at least 2 hours prior to your appointment.</li>
                      <li>We do our best to send a gentle reminder 30 minutes before your slot.</li>
                      <li>Arriving late may result in a shortened service time to honor the next guest's booking.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">5. Delays on Our End</h3>
                    <p>In rare cases where delays occur from our side, we will:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Notify you immediately</li>
                      <li>Offer an option to reschedule at your convenience, or</li>
                      <li>Provide a credit note for future use if rescheduling isn't feasible</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">6. Cancellation Policy</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Cancellations or changes must be made at least 24 hours in advance to avoid charges.</li>
                      <li>Late cancellations or no-shows may incur a cancellation fee to fairly compensate our team's time and commitment.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      7. Spa Attire & Privacy
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Please feel free to arrive in comfortable clothing or use the spa attire we provide.</li>
                      <li>Our wellness therapists are trained to maintain the highest level of professionalism and privacy, ensuring you are respectfully draped throughout every treatment.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      8. Health & Wellness Considerations
                    </h3>
                    <p className="mb-4">Your well-being is our priority. Before your service, please share any:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Medical conditions</li>
                      <li>Allergies</li>
                      <li>Preferences or sensitivities</li>
                    </ul>
                    <p className="mt-4">This helps us deliver a safe and personalized experience tailored to your needs.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">9. Valuables & Belongings</h3>
                    <p>We suggest leaving valuables at home, as Nagomi cannot be held responsible for loss or damage to personal items during your visit.</p>
                  </div>

                  <div className="border-l-4 border-primary-300 pl-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center gap-2">
                      <Mail className="w-6 h-6" />
                      10. Feedback & Support
                    </h3>
                    <p className="mb-4">We're always listening. If you've had a beautiful experience — or if something felt off — we want to know.</p>
                    <p className="mb-4">Please email us at <strong>info.nagomiwellness@gmail.com</strong> for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Feedback (good or constructive)</li>
                      <li>Concerns or complaints</li>
                      <li>Issues with service, memberships, gift cards, or anything else</li>
                    </ul>
                    <p className="mt-4">Your voice helps us refine every part of the Nagomi journey.</p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-200">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center gap-3">
                    <Award className="w-8 h-8 text-primary-500" />
                    Have Questions?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If anything is unclear or if you'd like to speak with someone from our team, please reach out. We're here to guide you, support you, and help you feel at home — every step of the way.
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

export default TermsWellness