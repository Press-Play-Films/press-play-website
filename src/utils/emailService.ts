
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
  
  return emailjs.send(serviceId, templateId, templateParams);
};

/**
 * EmailJS Setup Guide:
 * 
 * 1. Sign up at https://www.emailjs.com/ (they have a free tier)
 * 2. Create an Email Service (Gmail, Outlook, Mailgun, SendGrid, etc)
 *    - For Mailgun: You'll need to add your Mailgun domain and API key in the EmailJS dashboard
 * 3. Create an Email Template with these parameters:
 *    - {{from_name}} - Sender's name
 *    - {{reply_to}} - Sender's email
 *    - {{phone}} - Sender's phone (for ContactForm)
 *    - {{message}} - Message content
 * 4. Get your User ID (public key) from Account > API Keys
 * 5. Get your Service ID from Email Services
 * 6. Get your Template ID from Email Templates
 * 
 * Mailgun Setup Note:
 * - If using Mailgun with EmailJS, you only need to provide your Mailgun API key in the EmailJS dashboard
 * - The API key does NOT need to be added to this codebase
 * 
 * Usage in App.tsx:
 * initEmailJS('your_emailjs_user_id');
 * 
 * Usage in contact forms:
 * await sendEmail('your_service_id', 'your_template_id', templateParams);
 */
