
import { useState } from 'react';
import { Mail, Phone, MapPin, Film } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const FeatureFilmSection = () => {
  const [showFullFeatureFilm, setShowFullFeatureFilm] = useState(false);
  
  const handleContactFormSuccess = () => {
    setShowFullFeatureFilm(true);
    // Scroll to full film
    setTimeout(() => {
      const filmElement = document.getElementById('full-feature-film');
      if (filmElement) {
        filmElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden">
          <div className="relative p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-[-1]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">A Different Corner</h2>
                <p className="text-muted-foreground mb-6">
                  Watch the trailer below and fill out the contact form to get exclusive access to the full feature film.
                </p>

                <div id="feature-film-trailer" className="rounded-xl overflow-hidden mb-6">
                  <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                    <iframe 
                      src="https://player.vimeo.com/video/459239963?h=5f55f37829&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                      title="A Different Corner (Trailer)"
                    ></iframe>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Sales Leadership Partnerships</h3>
                  <div className="glass-card rounded-xl p-4 mb-6 border border-blue-500/20">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-4">
                        <img src="/lovable-uploads/d692a2c6-2ad2-4e20-ae0d-b32fed6d7c15.png" alt="Tony Robbins" className="w-12 h-12 rounded-lg" />
                        <div>
                          <h4 className="font-medium">Tony Robbins</h4>
                          <p className="text-sm text-muted-foreground">Strategic sales initiatives and coaching</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src="/lovable-uploads/5f3d2a9c-6e9c-4361-bb77-58ee71e41cbb.png" alt="Jordan Belfort" className="w-12 h-12 rounded-lg" />
                        <div>
                          <h4 className="font-medium">Jordan Belfort</h4>
                          <p className="text-sm text-muted-foreground">Straight Line Persuasion System</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 mb-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">info@andrewfreeman.io</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">(310) 555-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Los Angeles, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {showFullFeatureFilm ? (
                  <div id="full-feature-film" className="rounded-xl overflow-hidden mt-8">
                    <h3 className="text-xl font-semibold mb-4">Full Feature Film</h3>
                    <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                      <iframe 
                        src="https://player.vimeo.com/video/99473243?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                        title="A Different Corner (full feature film)"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Get Access to the Full Film</h3>
                    <div className="w-full aspect-video bg-black/50 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
                      <img 
                        src="https://i.vimeocdn.com/video/483630693-12de2fceab8963d08e60639e00d892d7d4c5d8aa768daa67f37562d22bd717bf-d_640" 
                        alt="A Different Corner - Full Feature Film" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Film className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 text-white">Sign up for full access</h3>
                        <p className="text-white/80 text-center max-w-xs">
                          Fill out the contact form below to get exclusive access to the full feature film
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Get Film Updates</h3>
                  <ContactForm onSubmitSuccess={handleContactFormSuccess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureFilmSection;
