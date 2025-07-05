import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ProgressCircle = ({ value, text, label, color = '#f97316' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="w-32 h-32 mx-auto mb-4">
        <CircularProgressbar
          value={progress}
          text={text}
          styles={buildStyles({
            textSize: '22px',
            pathTransitionDuration: 1.5,
            pathColor: color,
            textColor: '#1f2937',
            trailColor: '#e5e7eb',
          })}
        />
      </div>
      <div className="text-lg font-semibold text-dark">{label}</div>
    </motion.div>
  );
};

ProgressCircle.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default ProgressCircle;
