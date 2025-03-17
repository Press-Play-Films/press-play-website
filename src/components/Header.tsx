
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, Pin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-medium text-white hover:opacity-80 transition-opacity flex items-center gap-1"
          >
            {isScrolled && <Pin size={16} className="text-primary animate-pulse-slow" />}
            Andrew Freeman
          </Link>

          {isMobile ? (
            <>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg">
                  <div className="container h-full flex flex-col">
                    <div className="flex justify-between items-center py-4">
                      <Link 
                        to="/" 
                        className="text-2xl font-medium text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Andrew Freeman
                      </Link>
                      <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white p-2"
                        aria-label="Close menu"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <nav className="flex-1 flex flex-col items-center justify-center space-y-10">
                      <Link 
                        to="/"
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link 
                        to="/skills"
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Skills
                      </Link>
                      <Link 
                        to="/portfolio"
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Portfolio
                      </Link>
                      <Link 
                        to="/contact"
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center space-x-8">
              <Link 
                to="/"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                {isScrolled && <Pin size={12} className="text-primary" />}
                Home
              </Link>
              <Link 
                to="/skills"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                {isScrolled && <Pin size={12} className="text-primary" />}
                Skills
              </Link>
              <Link 
                to="/portfolio"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                {isScrolled && <Pin size={12} className="text-primary" />}
                Portfolio
              </Link>
              <Link 
                to="/contact"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                {isScrolled && <Pin size={12} className="text-primary" />}
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
