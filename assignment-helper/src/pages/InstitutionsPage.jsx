import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const InstitutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would be replaced with actual data from an API or database
  const institutions = [
    { name: "University of Melbourne", type: "University", location: "Melbourne, VIC" },
    { name: "University of Sydney", type: "University", location: "Sydney, NSW" },
    { name: "RMIT University", type: "University", location: "Melbourne, VIC" },
    { name: "Monash University", type: "University", location: "Melbourne, VIC" },
    { name: "University of Queensland", type: "University", location: "Brisbane, QLD" },
    { name: "Australian National University", type: "University", location: "Canberra, ACT" },
    { name: "TAFE NSW", type: "College", location: "Sydney, NSW" },
    { name: "Melbourne Polytechnic", type: "College", location: "Melbourne, VIC" },
    { name: "Holmesglen Institute", type: "College", location: "Melbourne, VIC" }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Colleges & Universities</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We provide academic assistance for students from these institutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Partner Institutions" 
            subtitle="We've helped students from these colleges and universities" 
          />
          
          <div className="mt-12">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button className="px-4 py-2 bg-primary text-white rounded-full">All</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">Universities</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">Colleges</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">Technical Institutes</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutions.map((institution, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{institution.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{institution.type}</span>
                    <span>{institution.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Don't see your institution? We still can help!</p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstitutionsPage;
