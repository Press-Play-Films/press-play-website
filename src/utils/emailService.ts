
import emailjs from 'emailjs-com';

/**
 * Initialize EmailJS service
 * Call this function in App.tsx to set up EmailJS
 * 
 * @param userId Your EmailJS User ID (public key)
 */
export const initEmailJS = (userId: string) => {
  emailjs.init(userId);
};

/**
 * EmailJS Setup Guide:
 * 
 * 1. Sign up at https://www.emailjs.com/ (they have a free tier)
 * 2. Create an Email Service (recommended: Gmail, Outlook, or SendGrid)
 * 3. Create an Email Template with these parameters:
 *    - {{from_name}} - Sender's name
 *    - {{reply_to}} - Sender's email
 *    - {{phone}} - Sender's phone (for ContactForm)
 *    - {{message}} - Message content
 * 4. Get your User ID (public key) from Account > API Keys
 * 5. Get your Service ID from Email Services
 * 6. Get your Template ID from Email Templates
 * 
 * Replace the placeholder values in App.tsx and ContactForm.tsx/ContactSection.tsx with your actual IDs
 */

