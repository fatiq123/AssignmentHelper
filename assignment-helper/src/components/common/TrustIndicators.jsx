import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, FileCheck, Lock, Award, ThumbsUp } from 'lucide-react';
import sslImage from '../../assets/ssl.png'
import gdpr from '../../assets/gdpr.webp'
import norton from '../../assets/norton.png'

const TrustIndicators = () => {
  const trustItems = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Plagiarism-Free",
      description: "All assignments are written from scratch and checked with plagiarism detection software."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "On-Time Delivery",
      description: "We guarantee delivery before your deadline or your money back."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Quality Guarantee",
      description: "Free revisions until you're completely satisfied with your assignment."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure & Confidential",
      description: "Your personal information is protected with advanced encryption."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Expert Writers",
      description: "Our team consists of qualified professionals with advanced degrees."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to assist you."
    }
  ];

  const certifications = [
  {
    name: "SSL Secured",
    logo: sslImage
  },
  {
    name: "GDPR Compliant",
    logo: gdpr
  },
  {
    name: "Norton Secured",
    logo: norton
  }
];



  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AssignmentHelper</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality academic assistance with complete security and confidentiality
          </p>
        </div>
        
        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex"
            >
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Security Badges */}
        <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-center">Secured & Certified</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <span className="text-xs text-gray-500 mt-2">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Privacy Policy Summary */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-primary/10 rounded-full p-6">
                <Lock className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Privacy & Confidentiality</h3>
              <p className="text-gray-700 mb-4">
                At AssignmentHelper, we take your privacy seriously. We never share your personal information with third parties, and all communication between you and our experts is strictly confidential.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your personal data is encrypted and securely stored</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">We never share your information with third parties</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All payment transactions are secured with SSL encryption</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your assignments remain your intellectual property</span>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="/privacy-policy" 
                  className="text-primary hover:text-primary-dark font-medium flex items-center"
                >
                  Read our full Privacy Policy
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Plagiarism-Free Guarantee */}
        <div className="mt-8 bg-white rounded-lg p-8 shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-3/4 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Plagiarism-Free Guarantee</h3>
              <p className="text-gray-700 mb-4">
                We guarantee that all assignments delivered by our experts are 100% original and plagiarism-free. Every assignment is written from scratch according to your specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Every assignment is checked with plagiarism detection software</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Free plagiarism report available upon request</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proper citation and referencing in your preferred style</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Money-back guarantee if plagiarism is detected</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center">
              <div className="bg-primary/10 rounded-full p-6">
                <FileCheck className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
