import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ content, name, institution, rating = 5 }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Gradient background effect */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-2xl"></div>
      
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              fill={i < rating ? "currentColor" : "none"} 
              className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4 relative z-10">&quot;{content}&quot;</p>
      <div className="font-semibold text-primary">{name}</div>
      <div className="text-sm text-gray-500">{institution}</div>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default TestimonialCard;
