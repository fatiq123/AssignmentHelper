import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-dark to-primary/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Assignment<span className="text-secondary">Helper</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Expert academic assistance for international students worldwide.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <FooterLink to="/services" label="Coding Assignments" />
              <FooterLink to="/services" label="Software Projects" />
              <FooterLink to="/services" label="Case Studies" />
              <FooterLink to="/pte-tutoring" label="PTE Tutoring" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/#how-it-works" label="How It Works" />
              <FooterLink to="/privacy-policy" label="Privacy Policy" />
              <FooterLink to="/terms" label="Terms of Service" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@assignmenthelper.com" className="hover:text-secondary transition-colors">
                  hello@assignmenthelper.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="https://wa.me/15551234567" className="hover:text-secondary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AssignmentHelper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="hover:text-secondary transition-colors">
        {label}
      </Link>
    </li>
  );
};

export default Footer;
