import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, FileText, DollarSign, Send, Upload, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const GetQuotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors },
    reset
  } = useForm();
  
  const serviceType = watch('serviceType');
  const urgency = watch('urgency');
  const complexity = watch('complexity');
  
  // Calculate estimated price based on form values
  useEffect(() => {
    if (serviceType && urgency && complexity) {
      // Base prices for different service types
      const basePrices = {
        coding: 80,
        project: 150,
        caseStudy: 100,
        pte: 60,
        other: 90
      };
      
      // Urgency multipliers
      const urgencyMultipliers = {
        standard: 1,
        urgent: 1.5,
        express: 2
      };
      
      // Complexity multipliers
      const complexityMultipliers = {
        basic: 1,
        intermediate: 1.3,
        advanced: 1.6
      };
      
      const basePrice = basePrices[serviceType] || 100;
      const urgencyMultiplier = urgencyMultipliers[urgency] || 1;
      const complexityMultiplier = complexityMultipliers[complexity] || 1;
      
      const price = basePrice * urgencyMultiplier * complexityMultiplier;
      setEstimatedPrice(Math.round(price));
    } else {
      setEstimatedPrice(null);
    }
  }, [serviceType, urgency, complexity]);
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the data to your backend
      console.log('Form data:', data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Fill out the form below to receive a detailed quote for your assignment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
                <h2 className="text-2xl font-bold text-green-800 mb-4">Quote Request Submitted!</h2>
                <p className="text-green-700 text-lg mb-6">
                  Thank you for your inquiry. Our team will review your requirements and send you a detailed quote within 2 hours.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                <SectionTitle 
                  title="Request a Detailed Quote" 
                  subtitle="The more details you provide, the more accurate your quote will be" 
                />
                
                <motion.form 
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-12 bg-gray-50 p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-2">1</span>
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                          <input 
                            type="text" 
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter your full name"
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
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter your phone number (optional)"
                            {...register('phone')}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">WhatsApp Number</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter your WhatsApp number (optional)"
                            {...register('whatsapp')}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Assignment Details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-2">2</span>
                        Assignment Details
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Service Type *</label>
                          <select 
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              errors.serviceType ? 'border-red-500' : 'border-gray-300'
                            }`}
                            {...register('serviceType', { required: 'Please select a service type' })}
                          >
                            <option value="">Select a service type</option>
                            <option value="coding">Coding Assignment</option>
                            <option value="project">Software Project</option>
                            <option value="caseStudy">Case Study</option>
                            <option value="pte">PTE Tutoring</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.serviceType && (
                            <p className="mt-1 text-sm text-red-500">{errors.serviceType.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Assignment Title *</label>
                          <input 
                            type="text" 
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              errors.title ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter the title of your assignment"
                            {...register('title', { required: 'Assignment title is required' })}
                          />
                          {errors.title && (
                            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Assignment Description *</label>
                          <textarea 
                            rows="4" 
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              errors.description ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Describe your assignment requirements in detail..."
                            {...register('description', { required: 'Assignment description is required' })}
                          ></textarea>
                          {errors.description && (
                            <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-dark mb-2">Deadline *</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar size={18} className="text-gray-400" />
                              </div>
                              <input 
                                type="date" 
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                  errors.deadline ? 'border-red-500' : 'border-gray-300'
                                }`}
                                {...register('deadline', { required: 'Deadline is required' })}
                              />
                            </div>
                            {errors.deadline && (
                              <p className="mt-1 text-sm text-red-500">{errors.deadline.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-dark mb-2">Urgency *</label>
                            <select 
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                errors.urgency ? 'border-red-500' : 'border-gray-300'
                              }`}
                              {...register('urgency', { required: 'Please select urgency level' })}
                            >
                              <option value="">Select urgency</option>
                              <option value="standard">Standard (7+ days)</option>
                              <option value="urgent">Urgent (3-6 days)</option>
                              <option value="express">Express (1-2 days)</option>
                            </select>
                            {errors.urgency && (
                              <p className="mt-1 text-sm text-red-500">{errors.urgency.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-dark mb-2">Complexity *</label>
                            <select 
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                errors.complexity ? 'border-red-500' : 'border-gray-300'
                              }`}
                              {...register('complexity', { required: 'Please select complexity level' })}
                            >
                              <option value="">Select complexity</option>
                              <option value="basic">Basic</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                            </select>
                            {errors.complexity && (
                              <p className="mt-1 text-sm text-red-500">{errors.complexity.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Additional Requirements</label>
                          <textarea 
                            rows="3" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Any specific instructions or requirements..."
                            {...register('additionalRequirements')}
                          ></textarea>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">File Upload</label>
                          <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                            <p className="text-sm text-gray-500 mb-2">
                              Drag and drop files here, or click to browse
                            </p>
                            <p className="text-xs text-gray-400">
                              Max file size: 10MB. Supported formats: PDF, DOC, DOCX, ZIP
                            </p>
                            <input 
                              type="file" 
                              className="hidden" 
                              id="fileUpload"
                              multiple
                              {...register('files')}
                            />
                            <label 
                              htmlFor="fileUpload" 
                              className="mt-4 inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors"
                            >
                              Select Files
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Budget Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-2">3</span>
                        Budget Information
                      </h3>
                      
                      {estimatedPrice && (
                        <div className="bg-primary/5 p-6 rounded-lg mb-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-1">Estimated Price</h4>
                              <p className="text-sm text-gray-600">Based on your selections</p>
                            </div>
                            <div className="text-3xl font-bold text-primary">${estimatedPrice}</div>
                          </div>
                          <p className="text-xs text-gray-500 mt-4">
                            This is an estimate only. The final price may vary based on the detailed requirements of your assignment.
                          </p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Budget Range</label>
                          <select 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('budgetRange')}
                          >
                            <option value="">Select your budget range</option>
                            <option value="under100">Under $100</option>
                            <option value="100-200">$100 - $200</option>
                            <option value="200-500">$200 - $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="over1000">Over $1000</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-dark mb-2">Preferred Payment Method</label>
                          <select 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('paymentMethod')}
                          >
                            <option value="">Select payment method</option>
                            <option value="creditCard">Credit/Debit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankTransfer">Bank Transfer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-70 flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Quote Request <Send size={18} className="ml-2" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                </motion.form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuotePage;
