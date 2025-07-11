import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SectionTitle from '../components/common/SectionTitle';
import TestimonialCard from '../components/common/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

// Mock data - replace with actual data from your backend
const collegesData = {
  "harvard-university": {
    name: "Harvard University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, it is the oldest institution of higher learning in the United States and among the most prestigious in the world.",
    courses: [
      { 
        id: 1, 
        name: "Computer Science", 
        level: "Undergraduate",
        duration: "4 years",
        description: "The Harvard CS program emphasizes a strong foundation in theoretical computer science and mathematics, complemented by systems building and interdisciplinary applications."
      },
      { 
        id: 2, 
        name: "Business Administration", 
        level: "Graduate",
        duration: "2 years",
        description: "Harvard Business School's MBA program is designed to develop outstanding business leaders who contribute to the well-being of society."
      },
      { 
        id: 3, 
        name: "Law", 
        level: "Graduate",
        duration: "3 years",
        description: "Harvard Law School offers an unmatched environment of excellence, breadth, and diversity for the study of law."
      },
      { 
        id: 4, 
        name: "Medicine", 
        level: "Graduate",
        duration: "4 years",
        description: "Harvard Medical School is committed to training physicians and scientists to meet society's evolving healthcare needs."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Michael Johnson",
        role: "Computer Science Graduate",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        content: "The computer science program at Harvard provided me with both theoretical knowledge and practical skills that have been invaluable in my career at Google."
      },
      {
        id: 2,
        name: "Sarah Williams",
        role: "MBA Graduate",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        content: "Harvard Business School transformed my approach to leadership and gave me the confidence to launch my own successful startup."
      },
      {
        id: 3,
        name: "David Chen",
        role: "Law Graduate",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        content: "The rigorous training and networking opportunities at Harvard Law School opened doors to prestigious firms and prepared me for complex legal challenges."
      }
    ],
    gallery: [
      "https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025-1200x630.jpg",
      "https://www.harvard.edu/wp-content/uploads/2021/02/052119_Commencement_ML_2140-1200x630.jpg",
      "https://www.harvard.edu/wp-content/uploads/2021/02/Harvard-Yard-Autumn-1200x630.jpg",
      "https://www.harvard.edu/wp-content/uploads/2021/02/Harvard-University-Science-Engineering-Complex-credit-Michael-Grimm-1200x630.jpg"
    ]
  },
  "mit": {
    name: "Massachusetts Institute of Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
    description: "MIT is a private research university in Cambridge, Massachusetts, founded in 1861. It is renowned for its scientific and technological training and research.",
    courses: [
      { 
        id: 1, 
        name: "Electrical Engineering & Computer Science", 
        level: "Undergraduate",
        duration: "4 years",
        description: "MIT's EECS program combines electrical engineering and computer science, providing students with the fundamentals of both fields."
      },
      { 
        id: 2, 
        name: "Mechanical Engineering", 
        level: "Undergraduate",
        duration: "4 years",
        description: "The mechanical engineering program at MIT focuses on design, research, and innovation in mechanical systems."
      },
      { 
        id: 3, 
        name: "Physics", 
        level: "Graduate",
        duration: "5-7 years",
        description: "MIT's physics graduate program is one of the best in the world, with research opportunities in theoretical and experimental physics."
      },
      { 
        id: 4, 
        name: "Sloan MBA", 
        level: "Graduate",
        duration: "2 years",
        description: "The MIT Sloan MBA program prepares students for leadership roles in the business world with a focus on innovation and technology."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Emily Zhang",
        role: "EECS Graduate",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        content: "The rigorous curriculum and collaborative environment at MIT prepared me exceptionally well for my career in artificial intelligence research."
      },
      {
        id: 2,
        name: "James Wilson",
        role: "Mechanical Engineering Graduate",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        content: "MIT's hands-on approach to engineering education gave me the skills to solve complex real-world problems in aerospace engineering."
      },
      {
        id: 3,
        name: "Sophia Rodriguez",
        role: "Physics PhD",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        content: "The mentorship from world-class physicists and access to cutting-edge research facilities at MIT were instrumental in my academic development."
      }
    ],
    gallery: [
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202009/MIT-Campus-Dome-1.jpg",
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201906/MIT-Lobby-7-001.jpg",
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202111/MIT-Stata-Center-10.jpg",
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202006/MIT-Infinite-Corridor-01.jpg"
    ]
  },
  "stanford-university": {
    name: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
    description: "Stanford University is a private research university in Stanford, California. It is known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world's top universities.",
    courses: [
      { 
        id: 1, 
        name: "Computer Science", 
        level: "Undergraduate",
        duration: "4 years",
        description: "Stanford's CS program emphasizes both the fundamentals of computing and cutting-edge research in areas like AI, graphics, and systems."
      },
      { 
        id: 2, 
        name: "Engineering", 
        level: "Undergraduate",
        duration: "4 years",
        description: "The engineering programs at Stanford prepare students to be leaders in creating the new technologies of the future."
      },
      { 
        id: 3, 
        name: "Business", 
        level: "Graduate",
        duration: "2 years",
        description: "Stanford GSB offers innovative management education through its MBA program, focusing on leadership, entrepreneurship, and innovation."
      },
      { 
        id: 4, 
        name: "Medicine", 
        level: "Graduate",
        duration: "4 years",
        description: "Stanford Medicine integrates research, clinical care, and education to advance understanding and treatment of disease."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Alex Thompson",
        role: "Computer Science Graduate",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        content: "Stanford's CS program and its proximity to Silicon Valley provided me with unparalleled opportunities to connect with tech industry leaders."
      },
      {
        id: 2,
        name: "Olivia Parker",
        role: "Engineering Graduate",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        content: "The collaborative and innovative environment at Stanford Engineering fostered my growth as both an engineer and entrepreneur."
      },
      {
        id: 3,
        name: "Daniel Kim",
        role: "MBA Graduate",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        content: "Stanford GSB's focus on innovation and leadership prepared me to make meaningful impact in the business world and beyond."
      }
    ],
    gallery: [
      "https://www.stanford.edu/wp-content/uploads/2022/04/stanford-university-main-quad-1.jpg",
      "https://www.stanford.edu/wp-content/uploads/2022/01/stanford-university-oval.jpg",
      "https://www.stanford.edu/wp-content/uploads/2022/01/stanford-university-memorial-church.jpg",
      "https://www.stanford.edu/wp-content/uploads/2022/01/stanford-university-hoover-tower.jpg"
    ]
  }
};

const CollegeDetailPage = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real application, you would fetch this data from your backend
    // For now, we'll use the mock data
    const collegeData = collegesData[collegeId];
    
    if (collegeData) {
      setCollege(collegeData);
    }
    
    setLoading(false);
  }, [collegeId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">College Not Found</h1>
        <p className="text-gray-600 mb-6">The college you're looking for doesn't exist or has been removed.</p>
        <a href="/colleges" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Back to Colleges
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
              <img 
                src={college.logo} 
                alt={`${college.name} logo`} 
                className="h-40 w-40 object-contain bg-white p-4 rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {college.name}
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {college.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            
            {/* Courses Tab */}
            <TabsContent value="courses">
              <SectionTitle>Available Courses</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {college.courses.map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{course.name}</h3>
                          <Badge variant="outline" className="bg-primary/10">
                            {course.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Duration: {course.duration}</p>
                        <p className="text-gray-700">{course.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href="#" 
                            className="text-primary hover:text-primary-dark font-medium flex items-center"
                            onClick={(e) => {
                              e.preventDefault();
                              // Add your course inquiry logic here
                              alert(`Inquire about ${course.name} at ${college.name}`);
                            }}
                          >
                            Inquire about this course
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <SectionTitle>Student Testimonials</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {college.testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      content={testimonial.content}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <SectionTitle>Campus Gallery</SectionTitle>
              <div className="mt-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {college.gallery.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-0">
                              <img 
                                src={image} 
                                alt={`${college.name} campus ${index + 1}`} 
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="mr-2" />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help With Your Assignments?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our expert tutors can help you excel in your courses at {college.name}. Get personalized assistance tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="px-8 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeDetailPage;
