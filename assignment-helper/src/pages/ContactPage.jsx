import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "hello@assignmenthelper.com",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone size={24} />,
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "For quick responses and file sharing"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Live Chat",
      details: "Available on website",
      description: "For immediate assistance"
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: "24/7 Support",
      description: "We're always here to help"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you complete my assignment?",
      answer: "Our turnaround time depends on the complexity and length of your assignment. For standard assignments, we typically deliver within 24-48 hours. For more complex projects, we'll provide a specific timeline during the quote process."
    },
    {
      question: "How do I pay for your services?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. We use secure payment gateways to ensure your financial information is protected."
    },
    {
      question: "Do you guarantee plagiarism-free work?",
      answer: "Absolutely! All our assignments are written from scratch and checked through plagiarism detection software before delivery. We provide 100% original content tailored to your specific requirements."
    },
    {
      question: "Can I request revisions if I'm not satisfied?",
      answer: "Yes, we offer free revisions if the delivered work doesn't meet your requirements. Simply let us know what changes you need, and we'll revise the work accordingly."
    },
    {
      question: "How do I submit my assignment requirements?",
      answer: "You can submit your requirements through our website form, via email, or through WhatsApp. Include as much detail as possible, including instructions, rubrics, and any reference materials."
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're here to help with your academic needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or need help with an assignment? Reach out to us through any of these channels and we'll get back to you promptly.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{method.title}</h3>
                      <p className="text-gray-600 mb-1">{method.details}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services" 
          />
          
          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
