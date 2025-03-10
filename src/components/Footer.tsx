
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container text-center">
        <div className="flex justify-center items-center mb-4">
          <a 
            href="https://www.linkedin.com/in/pressplayproductions/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-muted-foreground mb-2">
          Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
        </p>
        <p className="text-muted-foreground">
          © {currentYear} Andrew Freeman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
