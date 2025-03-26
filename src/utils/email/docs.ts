
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
export const emailJSConfigGuide = {};

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
export const autoReplyGuide = {};

/**
 * How to Embed Images in EmailJS Templates:
 * 
 * 1. Upload Your Logo to EmailJS:
 *    - In the EmailJS dashboard, go to "Email Services" > select your service
 *    - Click on the "Content" tab and upload your image (e.g., logo.png)
 *    - Important: Name your file "logo.png" to match the template code
 * 
 * 2. The Template is Already Set Up:
 *    - The auto-reply template already includes the code:
 *      <img src="cid:logo.png" alt="Andrew Freeman Logo" style="max-width: 150px; height: auto;" />
 *    - This will automatically display your uploaded logo in emails
 * 
 * Notes:
 * - Image filenames are case-sensitive and cannot contain spaces
 * - Use the exact filename as the CID value (e.g., "cid:logo.png")
 * - The maximum recommended file size is 1MB
 * - Supported formats: PNG, JPG, and GIF
 */
export const imageEmbeddingGuide = {};

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
export const authTroubleshootingGuide = {};

/**
 * Adding Unsubscribe Link to EmailJS Templates:
 * 
 * EmailJS automatically handles unsubscribe functionality if you include the proper 
 * variable in your templates. Here's how to set it up:
 * 
 * 1. In the Design Editor:
 *    - Press "Insert/edit link"
 *    - Set the URL input field to {{user_unsubscribe}}
 *    - Complete the link setup in the pop-up
 * 
 * 2. In the Code Editor (HTML):
 *    - Add an <a> tag with the {{user_unsubscribe}} variable:
 *      <a href="{{user_unsubscribe}}" rel="noopener" target="_blank">Unsubscribe</a>
 * 
 * 3. When emails are sent:
 *    - EmailJS automatically replaces {{user_unsubscribe}} with a unique unsubscribe URL
 *    - When recipients click this link, they're added to your suppression list
 *    - Emails to addresses on the suppression list will be rejected automatically
 * 
 * Note: This feature requires a Professional plan or higher on EmailJS.
 * 
 * To allow users to unsubscribe from specific templates:
 * - Go to the template settings
 * - Check the appropriate checkbox to allow unsubscribing from that template
 */
export const unsubscribeGuide = {};
