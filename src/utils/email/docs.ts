
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
 * EmailJS Template Setup Guide (Step by Step):
 * 
 * 1. In the EmailJS dashboard, go to "Email Templates" in the left sidebar
 * 2. Click the "Create New Template" button
 * 3. Complete these fields in the Content tab:
 *    - Subject: "Contact Us: {{title}}" or "Thank you for contacting Andrew Freeman"
 *    - Content: You can start with their default template, which includes:
 *      ```
 *      A message by {{name}} has been received. Kindly respond at your earliest convenience.
 *      
 *      {{name}}
 *      {{time}}
 *      
 *      {{message}}
 *      ```
 * 
 * 4. On the right side form, fill in:
 *    - To Email: your email address (e.g., andyfree@gmail.com)
 *    - From Name: {{name}} (this will display the sender's name)
 *    - Reply To: {{email}} (this allows you to reply directly to the sender)
 * 
 * 5. After saving the basic template, click on the "Auto-Reply" tab to set up the auto-response
 * 6. In the Auto-Reply tab:
 *    - Enable auto-reply by toggling it on
 *    - Set the Subject to something like "Thank you for contacting Andrew Freeman"
 *    - In the Content section, paste the HTML from the getAutoReplyMessage() function
 * 
 * 7. Click "Save" to finalize your template
 * 8. Once saved, get the Template ID from the URL or settings and add it to your environment variables
 * 
 * Note: The template ID will appear in the URL like: https://dashboard.emailjs.com/admin/templates/YOUR_TEMPLATE_ID
 */
export const autoReplyGuide = {};

/**
 * How to Embed Images in EmailJS Templates:
 * 
 * 1. Upload Your Logo to EmailJS:
 *    - In the EmailJS dashboard, go to "Email Services" > select your service
 *    - Click on the "Content" tab > scroll down to "Attachments" section
 *    - Click "Add file" and upload your logo image
 *    - Important: Name your file "logo.png" to match the template code
 * 
 * 2. The Template is Already Set Up:
 *    - The auto-reply template already includes the code:
 *      <img src="cid:logo.png" alt="Andrew Freeman Logo" style="max-width: 150px; height: auto;" />
 *    - This will automatically display your uploaded logo in emails
 * 
 * 3. Testing Your Logo:
 *    - After uploading the logo and setting up the template
 *    - Click the "Test It" button in the top menu
 *    - Send a test email to yourself to verify the logo appears correctly
 * 
 * Notes:
 * - Image filenames are case-sensitive and cannot contain spaces
 * - Use the exact filename as the CID value (e.g., "cid:logo.png")
 * - The maximum recommended file size is 1MB
 * - Supported formats: PNG, JPG, and GIF
 */
export const imageEmbeddingGuide = {};

/**
 * Troubleshooting EmailJS Template Setup:
 * 
 * If your auto-reply template is not showing up as a selection:
 * 
 * 1. Make sure you have created at least one template:
 *    - Go to "Email Templates" in the left sidebar
 *    - Create a new template if none exists
 *    - Save the template completely before trying to link it
 * 
 * 2. Check your EmailJS subscription level:
 *    - Auto-reply is a premium feature in EmailJS
 *    - Verify your account has access to this feature
 *    - The free plan has limited features
 * 
 * 3. Try these troubleshooting steps:
 *    - After creating a template, refresh the page completely
 *    - Make sure the template is properly saved (green success message)
 *    - Check that you're logged in with the correct EmailJS account
 *    - Clear browser cache or try a different browser
 * 
 * 4. Common template variables to use:
 *    - {{name}} - Sender's name
 *    - {{email}} - Sender's email
 *    - {{message}} - Message content
 *    - {{phone}} - Sender's phone number (if collected)
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

