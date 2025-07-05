import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ContactSection from '../components/home/ContactSection';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Comprehensive academic assistance for international students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coding & Development Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Coding & Development Services" 
            subtitle="Expert assistance with programming assignments and projects" 
          />
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* This would be populated with actual service cards */}
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold mb-2">Java Development</h4>
                <p className="text-gray-600">Object-oriented programming, Spring Boot applications, Android development</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-xl font-semibold mb-2">Python Programming</h4>
                <p className="text-gray-600">Data analysis, machine learning, web scraping, automation scripts</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                <h4 className="text-xl font-semibold mb-2">JavaScript & Web</h4>
                <p className="text-gray-600">Frontend frameworks, Node.js, full-stack applications, responsive design</p>
              </div>
            </div>
          </div>
          
          {/* More service categories would be added here */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Need help with a specific programming language or framework?</p>
            <a href="/get-quote" className="btn-primary">Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default ServicesPage;
