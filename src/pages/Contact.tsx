
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Linkedin, Film, Lock, Unlock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [hasFilmAccess, setHasFilmAccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleFormSubmissionSuccess = () => {
    setHasFilmAccess(true);
    toast.success("Feature Film Access Granted", {
      description: "Thank you for your information. You now have access to 'A Different Corner'.",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error("Please enter your email address");
      return;
    }
    
    toast.success("Successfully subscribed", {
      description: "Please check your email for access to the feature film.",
    });
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Contact Me</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-10 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and I'll get back to you as soon as possible. I'm looking forward to hearing from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                      <p className="text-base">contact@andrew-freeman.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                      <p className="text-base">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                      <p className="text-base">Las Vegas, Nevada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h3>
                      <p className="text-base">
                        <a 
                          href="https://www.linkedin.com/in/pressplayproductions/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Andrew Freeman - AI Integration & Video Production Specialist
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Request a Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in seeing how AI can transform your business? Schedule a personalized demo.
                  </p>
                  <a href="#" className="btn-outline inline-flex">
                    Schedule Demo
                  </a>
                </div>
              </div>
              
              <div>
                <ContactForm onSubmitSuccess={handleFormSubmissionSuccess} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Film Section */}
      <section className="py-20 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  {hasFilmAccess ? (
                    <Unlock className="h-6 w-6 text-primary" />
                  ) : (
                    <Lock className="h-6 w-6 text-primary" />
                  )}
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {hasFilmAccess 
                  ? "Thank You! Enjoy 'A Different Corner'" 
                  : "Get Free Access to 'A Different Corner'"}
              </h2>
              
              {hasFilmAccess ? (
                <div className="mt-6">
                  <div className="w-full h-0 pb-[56.25%] relative rounded-2xl overflow-hidden">
                    <iframe 
                      src="https://player.vimeo.com/video/823267694?h=7e9cb94f0a" 
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="A Different Corner"
                    />
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Thank you for your interest in my work. Enjoy the film!
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Fill out the contact form above with your information to get free access to my feature film "A Different Corner".
                  </p>
                  
                  <div className="flex justify-center">
                    <div className="w-full max-w-md bg-secondary/30 p-6 rounded-xl border border-border">
                      <div className="flex items-center mb-4">
                        <Film className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium">Film Preview Locked</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please fill out the contact form above to unlock access to the full feature film.
                      </p>
                      <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center">
                        <Lock className="h-10 w-10 text-muted-foreground/50" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-10 pb-20 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Sign up for my newsletter to receive updates on AI integration strategies and video production techniques.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
