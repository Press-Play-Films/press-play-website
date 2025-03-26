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
    // These variables are used by EmailJS for the auto-reply system
  };
  
  return sendEmail(serviceId, templateId, templateParams);
};

/**
 * EmailJS Configuration Guide: To avoid re-authentication issues
 * 
 * To prevent having to sign in repeatedly to EmailJS:
 * 
 * 1. Get your keys from your EmailJS dashboard (https://dashboard.emailjs.com/admin):
 *    - Public Key (User ID): Found under Account > API Keys
 *    - Service ID: Found under Email Services > [Your Service] > Settings
 *    - Template ID: Found under Email Templates > [Your Template] > Settings
 * 
 * 2. Set these values as environment variables in your Lovable project:
 *    - VITE_EMAILJS_USER_ID (Public Key)
 *    - VITE_EMAILJS_SERVICE_ID
 *    - VITE_EMAILJS_TEMPLATE_ID
 * 
 * 3. In your Lovable project:
 *    - Click on Project Settings (gear icon)
 *    - Select "Environment Variables"
 *    - Add each variable and its corresponding value
 *    - Click "Save" and then click "Rebuild"
 * 
 * This ensures your EmailJS credentials are securely stored and eliminates the need 
 * to re-authenticate each time you use the service.
 */

/**
 * EmailJS Auto-Reply Template Setup Guide:
 * 
 * 1. In the EmailJS dashboard, go to "Email Templates"
 * 2. Create a new template or select an existing one
 * 3. Choose/enable the "Auto-Reply" option
 * 4. Configure the template to use your branding and message
 * 5. In the template editor:
 *    - For the MAIN notification email (to you), use variables like:
 *      {{from_name}}, {{message}}, {{phone}}, etc.
 *    - For the AUTO-REPLY section (to the sender), copy and paste the HTML from
 *      the getAutoReplyMessage() function above into the auto-reply content area
 *    - Set the reply-to address to {{reply_to}} (the sender's email)
 *    - Choose a clear subject line like "Thank you for contacting Andrew Freeman"
 * 
 * 6. Save the template and note the Template ID
 * 7. Set the Template ID as VITE_EMAILJS_TEMPLATE_ID environment variable
 * 
 * This setup ensures that when someone contacts you:
 * - You receive a notification with their details
 * - They receive a professional auto-reply confirming their message was received
 */

/**
 * How to Embed Images in EmailJS Templates:
 * 
 * 1. Static Attachments Method:
 *    - In the EmailJS dashboard, go to "Email Services" > select your service
 *    - Click on the "Content" tab and upload your image (e.g., logo.png)
 *    - In your template HTML, use the CID syntax to embed the image:
 *      <img src="cid:logo.png" alt="Logo">
 * 
 * 2. Example with company logo:
 *    <img src="cid:logo.png" alt="Logo">
 * 
 * Notes:
 * - Only images can be embedded in templates
 * - Image filenames are case-sensitive and cannot contain spaces
 * - Use the exact filename as the CID value
 * - Images must be uploaded to your EmailJS service before they can be embedded
 * - For dynamically changing images, you would need to use a different approach with file hosting
 */

/**
 * Troubleshooting EmailJS Authentication Issues:
 * 
 * If you're repeatedly asked to sign in to EmailJS:
 * 
 * 1. Check the browser console for error messages
 * 2. Verify your environment variables are set correctly
 * 3. Ensure you're using the correct Public Key (User ID)
 * 4. Try refreshing your EmailJS Public Key in the dashboard
 * 5. Ensure your EmailJS account is in good standing
 * 6. Check if your EmailJS plan has any restrictions
 * 
 * For persistent issues, contact EmailJS support at support@emailjs.com
 */
