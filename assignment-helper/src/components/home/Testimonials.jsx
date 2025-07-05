import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      content: "AssignmentHelper helped me with my complex Python project. The code was well-documented and I got an A+ grade. Highly recommended for international students!",
      name: "Sarah M.",
      institution: "Computer Science, University of Melbourne",
      rating: 5
    },
    {
      content: "Their PTE tutoring was amazing. I improved my score from 65 to 79 in just 4 weeks. The personalized approach really works.",
      name: "Raj P.",
      institution: "Engineering, University of Toronto",
      rating: 5
    },
    {
      content: "Excellent help with my business case study. The analysis was thorough and helped me understand the concepts better. Great support team!",
      name: "Maria L.",
      institution: "MBA, London Business School",
      rating: 5
    },
    {
      content: "I was struggling with my Java assignment until I found AssignmentHelper. They delivered high-quality code with excellent documentation before the deadline.",
      name: "Ahmed K.",
      institution: "Computer Engineering, University of Sydney",
      rating: 5
    },
    {
      content: "The team helped me with my React project. The code was clean, well-structured, and followed best practices. I'll definitely use their services again!",
      name: "Li W.",
      institution: "Information Technology, RMIT University",
      rating: 4
    },
    {
      content: "I needed help with my database design assignment. The solution provided was comprehensive and the support team was very responsive.",
      name: "Carlos R.",
      institution: "Information Systems, University of Queensland",
      rating: 5
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Student Success Stories" 
          subtitle="What our students say about their experience" 
        />
        
        <div className="relative">
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
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              <button 
                onClick={prevPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentPage ? 'bg-secondary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
