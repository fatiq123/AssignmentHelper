import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 shadow-lg' : 'bg-gradient-to-r from-primary to-accent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Assignment<span className="text-secondary">Helper</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/services" label="Services" />
              <NavLink to="/pte-tutoring" label="PTE Tutoring" />
              <NavLink to="/institutions" label="Institutions" />
              <NavLink to="/about" label="About" />
              <NavLink to="/contact" label="Contact" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link 
              to="/get-quote" 
              className="btn-secondary"
            >
              Get Free Quote
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-secondary transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 border-t border-blue-800">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/services" label="Services" />
          <MobileNavLink to="/pte-tutoring" label="PTE Tutoring" />
          <MobileNavLink to="/institutions" label="Institutions" />
          <MobileNavLink to="/about" label="About" />
          <MobileNavLink to="/contact" label="Contact" />
          <div className="pt-2">
            <Link 
              to="/get-quote" 
              className="block w-full text-center bg-gradient-to-r from-secondary to-pink-500 text-white py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-white hover:text-secondary transition-colors ${
        isActive ? 'font-semibold text-secondary' : ''
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 rounded-md ${
        isActive 
          ? 'bg-blue-800 text-white' 
          : 'text-white hover:bg-blue-800 hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;
