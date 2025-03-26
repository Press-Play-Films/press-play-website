import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { sendContactForm } from '@/utils/email';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!isPrivacyAccepted) {
      toast.error("Please accept the privacy policy", {
        description: "You must accept the privacy policy to submit the form.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Gmail service ID from EmailJS dashboard
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_o9ghk7h';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      
      await sendContactForm(serviceId, templateId, {
        ...formData,
        phone: "Not provided" // This form doesn't collect phone numbers
      });
      
      toast.success("Message sent successfully", {
        description: "Thank you for your message. I'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsPrivacyAccepted(false);
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show more helpful error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error("Failed to send message", {
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a href="mailto:andrew@pressp.vip" className="text-muted-foreground hover:text-primary transition-colors">
                      andrew@pressp.vip
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
                      +1 (702) 602-1277
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
              
              <div className="bg-secondary/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="portfolio-name" className="block text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="portfolio-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/30 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio-email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="portfolio-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/30 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio-message" className="block text-sm font-medium mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="portfolio-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-secondary/30 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="portfolio-privacy"
                      checked={isPrivacyAccepted}
                      onChange={() => setIsPrivacyAccepted(!isPrivacyAccepted)}
                      className="mt-1"
                    />
                    <label htmlFor="portfolio-privacy" className="text-sm text-muted-foreground">
                      I accept the privacy policy and understand I can unsubscribe at any time via the unsubscribe link in any email.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
