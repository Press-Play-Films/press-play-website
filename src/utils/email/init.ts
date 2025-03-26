
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
    console.log('To fix this, please set the VITE_EMAILJS_USER_ID environment variable with your EmailJS User ID (public key)');
    return;
  }
  
  try {
    emailjs.init(userId);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};
