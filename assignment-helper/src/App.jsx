import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PTETutoringPage from './pages/PTETutoringPage';
import InstitutionsPage from './pages/InstitutionsPage';
import CollegesPage from './pages/CollegesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GetQuotePage from './pages/GetQuotePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center gradient-bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AssignmentHelper</h1>
          <div className="w-16 h-16 border-4 border-white border-t-secondary rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pte-tutoring" element={<PTETutoringPage />} />
            <Route path="/institutions" element={<InstitutionsPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
