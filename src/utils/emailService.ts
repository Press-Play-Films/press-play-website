
import emailjs from 'emailjs-com';

/**
 * Initialize EmailJS service
 * Call this function in App.tsx to set up EmailJS
 * 
 * @param userId Your EmailJS User ID
 */
export const initEmailJS = (userId: string) => {
  emailjs.init(userId);
};
