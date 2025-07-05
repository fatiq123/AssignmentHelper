import { motion } from 'framer-motion';
import ProgressCircle from '../common/ProgressCircle';
import SectionTitle from '../common/SectionTitle';

const Statistics = () => {
  const stats = [
    {
      value: 98,
      text: "98%",
      label: "Success Rate",
      color: "#f97316"
    },
    {
      value: 85,
      text: "5000+",
      label: "Assignments Completed",
      color: "#0ea5e9"
    },
    {
      value: 92,
      text: "24/7",
      label: "Support Available",
      color: "#10b981"
    },
    {
      value: 90,
      text: "50+",
      label: "Expert Tutors",
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-white/5"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-white/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Why Students Choose Us" 
          subtitle="Trusted by thousands of international students worldwide"
          light={true}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <ProgressCircle 
                value={stat.value} 
                text={stat.text} 
                label={stat.label} 
                color={stat.color} 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Programming Assignments</h3>
            <div className="space-y-4">
              <ProgressBar label="Java" percentage={92} color="bg-blue-500" />
              <ProgressBar label="Python" percentage={96} color="bg-yellow-500" />
              <ProgressBar label="JavaScript" percentage={90} color="bg-green-500" />
              <ProgressBar label="C/C++" percentage={88} color="bg-purple-500" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <div className="space-y-4">
              <ProgressBar label="React" percentage={95} color="bg-blue-400" />
              <ProgressBar label="Angular" percentage={88} color="bg-red-500" />
              <ProgressBar label="Vue" percentage={90} color="bg-green-400" />
              <ProgressBar label="Node.js" percentage={92} color="bg-yellow-400" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Data Science</h3>
            <div className="space-y-4">
              <ProgressBar label="Machine Learning" percentage={94} color="bg-purple-400" />
              <ProgressBar label="Data Analysis" percentage={96} color="bg-blue-500" />
              <ProgressBar label="SQL" percentage={92} color="bg-orange-500" />
              <ProgressBar label="Big Data" percentage={88} color="bg-green-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: '0%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Statistics;
