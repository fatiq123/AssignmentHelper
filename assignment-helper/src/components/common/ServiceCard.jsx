import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group border-b-4 border-transparent hover:border-secondary"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4 text-primary group-hover:text-secondary transition duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-dark mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features && (
        <ul className="text-sm text-gray-500 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
};

export default ServiceCard;
