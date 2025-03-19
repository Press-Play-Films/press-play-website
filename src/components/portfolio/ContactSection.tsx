
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Reach out to discuss how we can bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/20 border-none">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <a href="mailto:info@pressp.vip" className="text-muted-foreground hover:text-primary transition-colors">
                    info@pressp.vip
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/20 border-none">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <a href="tel:+17026021277" className="text-muted-foreground hover:text-primary transition-colors">
                    (702) 602-1277
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/20 border-none">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <a 
                    href="https://maps.google.com/?q=Las+Vegas+NV" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Las Vegas, NV
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
