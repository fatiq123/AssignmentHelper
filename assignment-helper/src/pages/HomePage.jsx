import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import HowItWorks from '../components/home/HowItWorks';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import TrustIndicators from '../components/common/TrustIndicators';

const HomePage = () => {
  const location = useLocation();
  
  // Handle hash links for smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Statistics />
      <TrustIndicators />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default HomePage;
