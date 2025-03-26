
import emailjs from 'emailjs-com';

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
      if (error.message.includes('invalid user id')) {
        throw new Error('Invalid EmailJS User ID. Please check your VITE_EMAILJS_USER_ID environment variable.');
      }
    }
    
    // Re-throw the original error
    throw error;
  }
};
