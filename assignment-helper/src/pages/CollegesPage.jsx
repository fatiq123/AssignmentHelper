import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

// Import college images
import aibtAustralia from '../assets/AIBT_australia.jpeg';
import astralSkills from '../assets/astral_skills_institute_of_australia.jpeg';
import campbellInstitute from '../assets/campbell_institute.png';
import cimAustralia from '../assets/cim_australia.png';
import crownInstitute from '../assets/crown_institute.png';
import imperialInstitute from '../assets/imperial_institute_of_sydney.jpeg';
import kingsOwnInstitute from '../assets/kings_own_institute.png';
import reachCommunity from '../assets/reach_community_college.png';
import southernCrossEdu from '../assets/southern_cross_education_institute.jpeg';
import southernCrossBusiness from '../assets/southern_cross_school_of_business.png';
import waratahPolytechnic from '../assets/waratah_polytechnic.png';
import yesCollege from '../assets/yes_college.png';

const CollegesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // College data with images
  const colleges = [
    { 
      name: "AIBT Australia", 
      image: aibtAustralia,
      location: "Brisbane, Australia",
      programs: "Business, IT, Hospitality"
    },
    { 
      name: "Astral Skills Institute of Australia", 
      image: astralSkills,
      location: "Sydney, Australia",
      programs: "Vocational Training, Skills Development"
    },
    { 
      name: "Campbell Institute", 
      image: campbellInstitute,
      location: "Wellington, New Zealand",
      programs: "English Language, Academic Preparation"
    },
    { 
      name: "CIM Australia", 
      image: cimAustralia,
      location: "Melbourne, Australia",
      programs: "Marketing, Business Management"
    },
    { 
      name: "Crown Institute", 
      image: crownInstitute,
      location: "Auckland, New Zealand",
      programs: "Business, Tourism, Hospitality"
    },
    { 
      name: "Imperial Institute of Sydney", 
      image: imperialInstitute,
      location: "Sydney, Australia",
      programs: "Business, IT, Health Services"
    },
    { 
      name: "Kings Own Institute", 
      image: kingsOwnInstitute,
      location: "Sydney, Australia",
      programs: "Business, Accounting, IT"
    },
    { 
      name: "Reach Community College", 
      image: reachCommunity,
      location: "Melbourne, Australia",
      programs: "Community Services, Education Support"
    },
    { 
      name: "Southern Cross Education Institute", 
      image: southernCrossEdu,
      location: "Melbourne & Adelaide, Australia",
      programs: "Healthcare, Community Services"
    },
    { 
      name: "Southern Cross School of Business", 
      image: southernCrossBusiness,
      location: "Sydney, Australia",
      programs: "Business, Management, Finance"
    },
    { 
      name: "Waratah Polytechnic", 
      image: waratahPolytechnic,
      location: "Sydney, Australia",
      programs: "Technical Training, Engineering"
    },
    { 
      name: "Yes College", 
      image: yesCollege,
      location: "Sydney, Australia",
      programs: "Business, Healthcare, IT"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Colleges & Universities</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We provide expert academic assistance for students from these prestigious institutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Colleges Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Partner Institutions" 
            subtitle="We've helped thousands of students from these colleges succeed in their academic journey" 
          />
          
          <div className="mt-12">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button className="px-4 py-2 bg-primary text-white rounded-full">All Institutions</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">Australia</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">New Zealand</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colleges.map((college, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={college.image} 
                      alt={college.name}
                      className="w-full h-full object-fill transform hover:scale-105 transition-transform duration-500 p-2"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
                    <div className="flex flex-col gap-1 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{college.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>{college.programs}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="#" className="text-primary hover:text-accent font-medium flex items-center">
                        View Assignments
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With Your Assignment?</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Our experts are ready to assist you with any academic challenge
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/get-quote" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors">
                Get a Quote
              </a>
              <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CollegesPage;
