import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would use EmailJS or another service here
      // await emailjs.send('service_id', 'template_id', data, 'user_id');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-dark mb-6 text-center">Quick Quote Request</h3>
      
      {isSubmitted ? (
        <motion.div 
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
          <h4 className="text-xl font-semibold text-green-800 mb-2">Request Submitted!</h4>
          <p className="text-green-700">
            Thank you for your inquiry. We'll get back to you within 2 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Your Name *</label>
              <input 
                type="text" 
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Email Address *</label>
              <input 
                type="email" 
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Service Type *</label>
            <select 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('service', { required: 'Please select a service' })}
            >
              <option value="">Select a service</option>
              <option value="coding">Coding Assignment</option>
              <option value="project">Software Project</option>
              <option value="case-study">Case Study</option>
              <option value="pte">PTE Tutoring</option>
              <option value="other">Other</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Assignment Details *</label>
            <textarea 
              rows="4" 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.details ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe your assignment requirements, deadline, and any specific instructions..."
              {...register('details', { required: 'Please provide assignment details' })}
            ></textarea>
            {errors.details && (
              <p className="mt-1 text-sm text-red-500">{errors.details.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Deadline</label>
            <input 
              type="date" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              {...register('deadline')}
            />
          </div>
          
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-70"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Get Free Quote <Send size={18} className="ml-2" />
              </span>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
