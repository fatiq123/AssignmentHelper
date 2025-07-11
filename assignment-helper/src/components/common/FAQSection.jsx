import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import SectionTitle from './SectionTitle';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'process', name: 'Our Process' },
    { id: 'subjects', name: 'Subjects & Services' },
    { id: 'guarantees', name: 'Guarantees' },
    { id: 'payment', name: 'Payment & Refunds' }
  ];

  const faqItems = [
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on several factors including the type of assignment, academic level, deadline, and complexity. We offer competitive rates starting from $15 per page for basic assignments with longer deadlines. For a precise quote, please use our quote calculator or contact our support team.",
      category: "pricing"
    },
    {
      question: "Do you offer discounts for returning customers?",
      answer: "Yes! We value our loyal customers and offer a loyalty program with increasing discounts based on the number of orders you place with us. Returning customers can receive discounts ranging from 5% to 20% on their orders. We also run seasonal promotions throughout the year.",
      category: "pricing"
    },
    {
      question: "How does your assignment process work?",
      answer: "Our process is simple: 1) Submit your assignment details through our order form or contact us directly. 2) Receive a quote and make the payment. 3) We assign your work to an expert in the relevant field. 4) You'll receive regular updates on progress. 5) Once completed, we'll deliver your assignment for review. 6) If needed, we'll make revisions to ensure your satisfaction.",
      category: "process"
    },
    {
      question: "How do you match experts to my assignment?",
      answer: "We carefully match your assignment to experts based on their academic background, specialization, and experience. Our team includes professionals with advanced degrees (Masters and PhDs) across various disciplines, ensuring that your work is handled by someone with relevant expertise in your subject area.",
      category: "process"
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover a wide range of subjects including Business, Computer Science, Engineering, Mathematics, Physics, Chemistry, Biology, Medicine, Nursing, Law, Psychology, Sociology, Literature, History, and many more. If you don't see your subject listed, please contact us as we likely have an expert who can help.",
      category: "subjects"
    },
    {
      question: "Do you handle complex programming assignments?",
      answer: "Yes, we have specialized experts in various programming languages including Python, Java, C++, JavaScript, PHP, R, MATLAB, and more. Our programming experts can handle assignments ranging from basic coding tasks to complex software development projects, database design, and algorithm implementation.",
      category: "subjects"
    },
    {
      question: "Do you guarantee plagiarism-free work?",
      answer: "Absolutely! All our assignments are written from scratch and are 100% original. We use plagiarism detection software to check every assignment before delivery. We can provide a plagiarism report upon request to verify the originality of your work.",
      category: "guarantees"
    },
    {
      question: "What if I'm not satisfied with the assignment?",
      answer: "Your satisfaction is our priority. If you're not completely satisfied with your assignment, we offer free revisions within 7 days of delivery. If the assignment doesn't meet the requirements you provided, we'll revise it until it does or provide a partial/full refund depending on the situation.",
      category: "guarantees"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some regions, we also accept mobile payment solutions. All payments are processed through secure payment gateways to ensure your financial information remains protected.",
      category: "payment"
    },
    {
      question: "What is your refund policy?",
      answer: "We have a fair refund policy. If we cannot deliver your assignment on time or if it doesn't meet the requirements you specified (after revision attempts), you are eligible for a full or partial refund. Refund requests are evaluated on a case-by-case basis and processed within 5-7 business days.",
      category: "payment"
    },
    {
      question: "Can I request a specific expert for my assignment?",
      answer: "Yes, if you've worked with one of our experts before and were satisfied with their work, you can request the same expert for your future assignments. Subject to their availability, we'll assign your work to your preferred expert.",
      category: "process"
    },
    {
      question: "How do I track the progress of my assignment?",
      answer: "Once your assignment is in progress, you can track its status through your client portal. Additionally, we provide regular updates via email or WhatsApp. You can also contact our support team anytime for real-time updates on your assignment.",
      category: "process"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our services" 
        />
        
        <div className="mt-8 max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-0 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No questions found matching your search.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-2 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
          
          {/* Still Have Questions */}
          <div className="mt-12 bg-primary/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you with any other questions you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="https://wa.me/923229549909" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
