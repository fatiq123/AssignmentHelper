import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FAQSection from '../components/common/FAQSection';

const FAQPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Find answers to common questions about our services, process, and guarantees
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-8">
              Let our experts help you achieve academic excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/get-quote" className="px-8 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-colors">
                Get a Free Quote
              </a>
              <a href="/contact" className="px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded-md hover:bg-gray-200 transition-colors">
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
