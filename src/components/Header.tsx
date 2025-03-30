
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const isScrolled = scrollPosition > 20;
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-md' : 'py-4'
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors"
          >
            Andrew Freeman
          </Link>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/skills" current={location.pathname === "/skills"}>Skills</NavLink>
            <NavLink to="/portfolio" current={location.pathname === "/portfolio"}>Portfolio</NavLink>
            <NavLink to="/blog" current={location.pathname === "/blog"}>Blog</NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>Contact</NavLink>
          </nav>
          
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md pt-20 px-6 z-40">
              <nav className="flex flex-col items-center space-y-6 text-xl">
                <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
                <NavLink to="/skills" current={location.pathname === "/skills"}>Skills</NavLink>
                <NavLink to="/portfolio" current={location.pathname === "/portfolio"}>Portfolio</NavLink>
                <NavLink to="/blog" current={location.pathname === "/blog"}>Blog</NavLink>
                <NavLink to="/contact" current={location.pathname === "/contact"}>Contact</NavLink>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ children, to, current }: { children: React.ReactNode; to: string; current: boolean }) => (
  <Link
    to={to}
    className={`
      relative font-medium transition-colors
      ${current 
        ? 'text-primary' 
        : 'text-muted-foreground hover:text-white'}
      after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:-mb-1
      after:transition-all after:duration-200 after:opacity-0 after:scale-x-0
      ${current ? 'after:opacity-100 after:scale-x-100' : ''}
      hover:after:opacity-100 hover:after:scale-x-100
    `}
  >
    {children}
  </Link>
);

export default Header;
