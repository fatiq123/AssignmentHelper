import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LoyaltyProgram from '../components/common/LoyaltyProgram';
import TestimonialsSection from '../components/common/TestimonialsSection';

const LoyaltyProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Loyalty Rewards Program</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Earn discounts and exclusive benefits with every assignment you order
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <LoyaltyProgram />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Earning Rewards Today</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Place your first order and begin your journey through our loyalty program
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/get-quote" className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </a>
              <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LoyaltyProgramPage;
