import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '@/utils/email';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields", {
        description: "Name, email, and phone number are required.",
      });
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
      
      await sendContactForm(serviceId, templateId, formData);
      
      toast.success("Message sent successfully", {
        description: "Thank you for your message. I'll get back to you shortly.",
      });
      
      // Trigger the onSubmitSuccess callback
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
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
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
        />
      </div>
      
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="privacy"
          checked={isPrivacyAccepted}
          onChange={() => setIsPrivacyAccepted(!isPrivacyAccepted)}
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          I accept the privacy policy and understand I can unsubscribe at any time via the unsubscribe link in any email.
        </label>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
