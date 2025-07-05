import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Learn more about our mission to help international students succeed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-gray-700 mb-4">
                AssignmentHelper was founded in 2018 by a group of educators and tech professionals who recognized the unique challenges faced by international students in Australia.
              </p>
              <p className="text-gray-700 mb-4">
                Having experienced these challenges firsthand, our founders were determined to create a service that provides high-quality academic support tailored specifically to the needs of international students.
              </p>
              <p className="text-gray-700">
                Today, we've grown into a team of over 50 expert tutors and developers, helping thousands of students achieve academic success across Australia, with plans to expand to the UK and other countries.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200">
                {/* This would be replaced with an actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <span className="text-gray-400 text-lg">Team Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-gray-600">Assignments Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Mission" 
            subtitle="What drives us every day" 
          />
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Support Students</h3>
                <p className="text-gray-600">
                  To provide international students with the academic support they need to overcome language barriers and cultural differences
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Deliver Excellence</h3>
                <p className="text-gray-600">
                  To maintain the highest standards of quality in all our services, ensuring students receive work that exceeds expectations
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Timely Assistance</h3>
                <p className="text-gray-600">
                  To provide prompt and reliable support, respecting deadlines and ensuring students can submit their work on time
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="What sets us apart from other services" 
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-4 mt-1">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our tutors and developers are industry professionals with advanced degrees and years of experience in their fields.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mr-4 mt-1">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                <p className="text-gray-600">
                  We tailor our services to each student's specific needs, ensuring they receive the exact help they require.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mr-4 mt-1">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our team is available around the clock to answer questions and provide assistance whenever students need it.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mr-4 mt-1">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee and offer free revisions to ensure students are completely satisfied.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of international students who have achieved academic success with our help
            </p>
            <a href="/get-quote" className="btn-secondary">
              Get Free Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
