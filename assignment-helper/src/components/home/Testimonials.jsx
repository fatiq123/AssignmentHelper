import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const TestimonialCard = ({ content, name, institution, rating, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20 flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-primary">{institution}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-4 flex-grow">
          <svg 
            className="w-8 h-8 text-primary/20 mb-2" 
            fill="currentColor" 
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-700 italic">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "AssignmentHelper helped me with my complex Python project. The code was well-documented and I got an A+ grade. Highly recommended for international students!",
      name: "Sarah M.",
      institution: "Computer Science, University of Melbourne",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "Their PTE tutoring was amazing. I improved my score from 65 to 79 in just 4 weeks. The personalized approach really works.",
      name: "Raj P.",
      institution: "Engineering, University of Toronto",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "Excellent help with my business case study. The analysis was thorough and helped me understand the concepts better. Great support team!",
      name: "Maria L.",
      institution: "MBA, London Business School",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      content: "I was struggling with my Java assignment until I found AssignmentHelper. They delivered high-quality code with excellent documentation before the deadline.",
      name: "Ahmed K.",
      institution: "Computer Engineering, University of Sydney",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
      content: "The team helped me with my React project. The code was clean, well-structured, and followed best practices. I'll definitely use their services again!",
      name: "Li W.",
      institution: "Information Technology, RMIT University",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      content: "I needed help with my database design assignment. The solution provided was comprehensive and the support team was very responsive.",
      name: "Carlos R.",
      institution: "Information Systems, University of Queensland",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Student Success Stories" 
          subtitle="What our students say about their experience" 
        />
        
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  content={testimonial.content}
                  name={testimonial.name}
                  institution={testimonial.institution}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-4">
              <button 
                onClick={prevPage}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              
              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentPage ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextPage}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="/testimonials" 
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            View all success stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
