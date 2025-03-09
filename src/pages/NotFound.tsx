
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <ParticleBackground />
      <div className="text-center z-10 px-6">
        <h1 className="text-9xl font-bold text-primary mb-4 animate-fade-in">404</h1>
        <p className="text-2xl text-white mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Oops! Page not found
        </p>
        <Link to="/" className="btn-primary inline-flex items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
