
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
    console.log('Attempting to send email with:', { serviceId, templateId });
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on common issues
    if (error instanceof Error) {
      if (error.message.includes('Forbidden') || error.message.includes('412')) {
        throw new Error('Email service authorization failed. Please check your Mailgun API key, domain setup, and account status.');
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
 * EmailJS Alternative Setup Instructions:
 * 
 * If you're experiencing issues with Mailgun, consider these alternatives:
 * 
 * 1. Gmail integration:
 *    - Create an Email Service in EmailJS using Gmail
 *    - You'll need to provide your Gmail credentials
 * 
 * 2. SMTP integration:
 *    - Create an Email Service in EmailJS using SMTP
 *    - You can use various email providers like Gmail, Outlook, etc.
 * 
 * 3. SendGrid integration:
 *    - Create an Email Service in EmailJS using SendGrid
 *    - You'll need a SendGrid API key
 * 
 * General EmailJS Setup:
 * 1. Sign up at https://www.emailjs.com/ (they have a free tier)
 * 2. Create an Email Service (Gmail, SMTP, SendGrid, etc)
 * 3. Create an Email Template with these parameters:
 *    - {{from_name}} - Sender's name
 *    - {{reply_to}} - Sender's email
 *    - {{phone}} - Sender's phone (for ContactForm)
 *    - {{message}} - Message content
 * 4. Get your User ID (public key) from Account > API Keys
 * 5. Get your Service ID from Email Services
 * 6. Get your Template ID from Email Templates
 * 
 * Usage in App.tsx:
 * initEmailJS('your_emailjs_user_id');
 * 
 * Usage in contact forms:
 * await sendEmail('your_service_id', 'your_template_id', templateParams);
 */
