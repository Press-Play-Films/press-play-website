import emailjs from 'emailjs-com';

/**
 * Initialize EmailJS service
 * Call this function in App.tsx to set up EmailJS
 * 
 * @param userId Your EmailJS User ID (public key)
 */
export const initEmailJS = (userId: string) => {
  if (!userId || userId === 'YOUR_USER_ID') {
    console.warn('EmailJS User ID not provided. Email functionality will not work correctly.');
    return;
  }
  
  try {
    emailjs.init(userId);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

/**
 * Send an email using EmailJS
 * 
 * @param serviceId Your EmailJS Service ID
 * @param templateId Your EmailJS Template ID
 * @param templateParams Parameters for the email template
 * @returns Promise resolving to the EmailJS response
 */
export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams: Record<string, unknown>
) => {
  if (!serviceId || serviceId === 'YOUR_SERVICE_ID') {
    throw new Error('EmailJS Service ID not provided');
  }
  
  if (!templateId || templateId === 'YOUR_TEMPLATE_ID') {
    throw new Error('EmailJS Template ID not provided');
  }
  
  try {
    console.log('Sending email via Gmail integration with service:', serviceId);
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Email sent successfully via Gmail:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Gmail-specific error handling
    if (error instanceof Error) {
      if (error.message.includes('daily sending quota')) {
        throw new Error('Gmail daily sending quota exceeded. Please try again tomorrow.');
      }
      if (error.message.includes('invalid credentials')) {
        throw new Error('Gmail authentication failed. Please check your EmailJS service configuration.');
      }
      if (error.message.includes('Network Error')) {
        throw new Error('Network error when connecting to email service. Please check your internet connection.');
      }
    }
    
    // Re-throw the original error
    throw error;
  }
};

/**
 * Get auto reply message that can be used in EmailJS templates
 * 
 * @returns HTML string formatted message for auto-replies
 */
export const getAutoReplyMessage = (): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #6d28d9;">Thank you for contacting Andrew Freeman</h2>
      
      <p>I appreciate you reaching out and will review your message promptly.</p>
      
      <p>As an AI Integration & Video Production Specialist based in Las Vegas, I'm committed to pioneering the intersection of Sales, Technology, and Entertainment through innovative solutions.</p>
      
      <p>I'll get back to you as soon as possible, typically within 1-2 business days.</p>
      
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Check out my <a href="https://yourportfolio.com" style="color: #6d28d9;">portfolio</a> for examples of my work</li>
        <li>Connect with me on <a href="https://www.linkedin.com/in/pressplayproductions/" style="color: #6d28d9;">LinkedIn</a></li>
      </ul>
      
      <p>Looking forward to discussing how we can collaborate!</p>
      
      <p style="margin-top: 20px;">Best regards,<br>Andrew Freeman<br>AI Integration & Video Production Specialist</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
        <p>This is an automated response. Please do not reply to this email.</p>
        <p>Phone: +1 (702) 602-1277 | Email: andrew@pressp.vip | Las Vegas, NV</p>
      </div>
    </div>
  `;
};

/**
 * Send contact form with auto-reply capability
 * This function handles both the main form submission and auto-reply configuration
 * 
 * @param serviceId Your EmailJS Service ID
 * @param templateId Your EmailJS Template ID (with auto-reply enabled)
 * @param formData Form data containing name, email, phone, and message
 * @returns Promise resolving to the EmailJS response
 */
export const sendContactForm = async (
  serviceId: string,
  templateId: string,
  formData: { name: string; email: string; phone?: string; message: string }
) => {
  // EmailJS template params including auto-reply configuration
  const templateParams = {
    from_name: formData.name,
    reply_to: formData.email,
    to_name: "Andrew",
    phone: formData.phone || "Not provided",
    message: formData.message,
    // The auto-reply content is configured in the EmailJS dashboard
    // using the template variables and formatted message
  };
  
  return sendEmail(serviceId, templateId, templateParams);
};

/**
 * EmailJS Configuration Guide:
 * 
 * Current setup:
 * - You're using Gmail integration with EmailJS (service_o9ghk7h)
 * 
 * To complete the setup:
 * 1. Create an Email Template if you haven't already
 *    - Go to Email Templates in the EmailJS dashboard
 *    - Create a template with type "Contact Form"
 *    - Enable "Auto Reply" option in the template configuration
 *    - Make sure your template uses these parameters:
 *      {{from_name}} - Sender's name
 *      {{reply_to}} - Sender's email for replies
 *      {{to_name}} - Your name (Andrew)
 *      {{phone}} - Sender's phone (for ContactForm)
 *      {{message}} - Message content
 * 
 * 2. Set these environment variables in your project:
 *    - VITE_EMAILJS_USER_ID - Your EmailJS Public Key
 *    - VITE_EMAILJS_SERVICE_ID - service_o9ghk7h (Gmail integration)
 *    - VITE_EMAILJS_TEMPLATE_ID - Your Template ID with auto-reply enabled
 * 
 * Auto-Reply Configuration:
 * - When setting up the template in EmailJS, enable the Auto-Reply option
 * - In the EmailJS dashboard's Auto-Reply section, use {{reply_to}} as the recipient
 * - For the Auto-Reply content, you can copy the HTML from getAutoReplyMessage()
 * - You can customize the subject line to something like "Thank you for contacting Andrew Freeman"
 */
