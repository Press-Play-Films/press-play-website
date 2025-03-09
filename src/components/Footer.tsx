
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container text-center">
        <p className="text-muted-foreground">
          © {currentYear} Andrew Freeman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
