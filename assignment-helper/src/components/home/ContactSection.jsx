import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ContactForm from '../common/ContactForm';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      description: "Get detailed responses within 2 hours",
      link: "mailto:fatiqhussnain1@gmail.com",
      linkText: "fatiqhussnain1@gmail.com"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>,
      title: "WhatsApp",
      description: "Instant messaging and file sharing",
      link: "https://wa.me/+923229549909",
      linkText: "+923229549909"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Live Chat",
      description: "24/7 support available",
      link: "#",
      linkText: "Start Chat Now",
      onClick: () => alert("Live chat feature coming soon!")
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get Started Today" 
          subtitle="Multiple ways to connect with our expert team" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl text-primary mb-4">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              {method.onClick ? (
                <button 
                  onClick={method.onClick} 
                  className="text-secondary font-semibold hover:underline"
                >
                  {method.linkText}
                </button>
              ) : (
                <a 
                  href={method.link} 
                  className="text-secondary font-semibold hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {method.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
