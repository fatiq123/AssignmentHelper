import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
  return (
    <motion.div 
      className={`mb-16 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-4xl font-bold mb-4 ${light ? 'text-white' : 'gradient-text'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/90' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
  light: PropTypes.bool
};

export default SectionTitle;
