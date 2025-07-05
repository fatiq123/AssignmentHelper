import { Code, Rocket, BarChart3, GraduationCap } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Coding Assignments",
      description: "Python, Java, C++, JavaScript, Data Structures, Algorithms, and more programming languages",
      features: [
        "Web Development",
        "Data Science",
        "Machine Learning",
        "Database Management"
      ]
    },
    {
      icon: <Rocket size={32} />,
      title: "Projects",
      description: "Complete software solutions, mobile apps, and technical implementations",
      features: [
        "Full-stack Applications",
        "Mobile App Development",
        "AI/ML Projects",
        "System Design"
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Case Studies",
      description: "Business analysis, research papers, and technical documentation",
      features: [
        "Market Research",
        "Business Strategy",
        "Technical Reports",
        "Data Analysis"
      ]
    },
    {
      icon: <GraduationCap size={32} />,
      title: "PTE Tutoring",
      description: "Personalized coaching for all PTE modules with proven results",
      features: [
        "Speaking Practice",
        "Writing Skills",
        "Reading Comprehension",
        "Listening Skills"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive academic support tailored for international students" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
