import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Computer Science Student",
      university: "Harvard University",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "The programming assignment help I received was exceptional. The code was well-structured, thoroughly documented, and helped me understand complex algorithms. I've been using AssignmentHelper for three semesters now and have consistently received A grades.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "MBA Student",
      university: "Stanford University",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "I was struggling with my business case analysis until I found AssignmentHelper. Their expert provided insightful analysis and clear recommendations that impressed my professor. The turnaround time was impressive, and they accommodated all my revision requests.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Nursing Student",
      university: "Kings Own Institute",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content: "As a nursing student with clinical rotations, I often struggle with time management. AssignmentHelper has been a lifesaver for my theoretical assignments. Their work is always well-researched and follows proper medical citation formats.",
      rating: 4
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Engineering Student",
      university: "MIT",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "The quality of technical reports I've received has been consistently high. The experts understand complex engineering concepts and explain them clearly. I particularly appreciate their attention to detail with calculations and diagrams.",
      rating: 5
    },
    {
      id: 5,
      name: "Sophia Lee",
      role: "Psychology Student",
      university: "Southern Cross Education Institute",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I was skeptical about using an assignment service at first, but AssignmentHelper exceeded my expectations. The research paper they delivered was thoroughly researched with proper APA citations. I've recommended them to all my classmates.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Read testimonials from students we've helped achieve academic success" 
        />
        
        <div className="mt-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <motion.div 
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-lg">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                    <p className="text-primary font-medium text-sm">{testimonials[activeIndex].university}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8 md:border-l border-gray-200">
                  <svg 
                    className="w-10 h-10 text-gray-200 mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
