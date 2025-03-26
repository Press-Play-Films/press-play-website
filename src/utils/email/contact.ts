
import { sendEmail } from './send';

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
    // These variables are used by EmailJS for the auto-reply system
  };
  
  return sendEmail(serviceId, templateId, templateParams);
};
