import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Requirements",
      description: "Share your assignment details via email, WhatsApp, or our website form",
      color: "bg-primary"
    },
    {
      number: 2,
      title: "Get Quote",
      description: "Receive a detailed quote with timeline and pricing within 2 hours",
      color: "bg-secondary"
    },
    {
      number: 3,
      title: "Expert Work",
      description: "Our qualified experts work on your assignment with regular updates",
      color: "bg-accent"
    },
    {
      number: 4,
      title: "Delivery",
      description: "Receive your completed assignment with free revisions if needed",
      color: "bg-green-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="How It Works" 
          subtitle="Simple, transparent process to get the academic help you need" 
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Process flow connector - visible on larger screens */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary via-secondary to-green-500 transform -translate-y-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
