import React from 'react';
import { motion } from 'framer-motion';

const Salon = () => {
  const salonServices = [
    {
      title: "Hair cut",
      items: ["Hair cut", "Hair Spa", "Hair Treatments", "Beard Grooming", "Hair colour (Ammonia free)", "Skin Brightening Treatment"]
    },
    {
      title: "Face clean up",
      items: ["Face clean up", "D Tan", "Pedicure", "Foot massage", "Facials", "Pre Wedding Grooming Pack"]
    },
    {
      title: "Hair Cut",
      items: ["Hair Cut", "Blow Dry", "Hair wash", "Head Massage", "Oiling", "Hair styling", "Hair Trimming"]
    },
    {
      title: "Keratin",
      items: ["Keratin", "Botox", "Straightening", "Rebonding", "Smoothening", "Japanese Straightening"]
    },
    {
      title: "Rice waxing",
      items: ["Rice waxing", "Chocolate wax", "Full body wax", "Aroma Waxing"]
    },
    {
      title: "Nail Art",
      items: ["Nail Art", "Nail paint", "Nail manicure", "Nail Extensions"]
    },
    {
      title: "Root Touch up",
      items: ["Root Touch up", "Balyage", "Global", "Streax", "Grey coverage", "Ombre"]
    },
    {
      title: "Pedicure",
      items: ["Pedicure", "Spa Pedicure", "Anti Tan pedicure", "Foot spa", "Manicure", "Spa Manicure", "Hand Spa"]
    },
    {
      title: "Clean up",
      items: ["Clean up", "Facials", "Hydra Facial", "Skin Brightening", "Anti ageing collagen treatment", "Pre bridal treatment", "Threading"]
    },
    {
      title: "Dandruff control treatments",
      items: ["Dandruff control treatments", "Hair detox", "Scalp Exfoliation", "Deep conditioning", "Intense hydration spa", "Volumizing", "Olaplex bond rebuilding", "Protein treatment", "Post colour protect spa"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-warm-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
        >
          Salon Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {salonServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="floating-card p-6 bg-gradient-to-br from-white/90 via-primary-50/50 to-warm-50/90 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <h3 className="text-lg font-bold mb-3 text-black">{service.title}</h3>
              <ul className="space-y-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salon;