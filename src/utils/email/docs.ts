
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
 * If your auto-reply template is not showing up as a selection or you cannot select it:
 * 
 * 1. Make sure you have created at least one template:
 *    - Go to "Email Templates" in the left sidebar
 *    - Create a new template if none exists
 *    - Save the template completely before trying to link it
 * 
 * 2. Selection Issues:
 *    - If you see the dropdown showing your template (e.g., template_n7hpkvu) but clicking 
 *      doesn't select it, try clicking elsewhere in the dropdown area (not just on the text)
 *    - Try clicking the search icon on the right side of the dropdown
 *    - Try refreshing the page and then clicking directly on the template name
 *    - If using Chrome, try disabling any autofill extensions that might interfere
 * 
 * 3. Browser Issues:
 *    - Clear browser cache and cookies
 *    - Try using a different browser (Firefox, Edge, etc.)
 *    - Disable browser extensions that might interfere with form interactions
 * 
 * 4. EmailJS Account:
 *    - Check your EmailJS subscription level (auto-reply is a premium feature)
 *    - Verify your account has access to this feature
 *    - The free plan has limited features
 * 
 * 5. Try these additional troubleshooting steps:
 *    - After creating a template, refresh the page completely
 *    - Make sure the template is properly saved (green success message)
 *    - Check that you're logged in with the correct EmailJS account
 *    - Try a private/incognito browser window
 *    - Check for any console errors in your browser's developer tools
 * 
 * 6. Template Name/ID Issues:
 *    - Try creating a new template with a simpler name
 *    - Avoid special characters in template names
 *    - If you see template_ID but can't select it, note down this ID manually
 *      and use it directly in your code as the templateId parameter
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

/**
 * Dynamic Attachments in EmailJS: Benefits and Compatibility Considerations
 * 
 * Dynamic attachments let you send different files based on email content variables,
 * which can be powerful for AI companies but comes with important considerations.
 * 
 * Benefits for AI Companies:
 * 1. Personalized Content Delivery: 
 *    - Send AI-generated reports, analytics, or customized content
 *    - Create the impression of intelligent, adaptive communications
 * 
 * 2. Implementation Options:
 *    - Using EmailJS Variables: {{variable_name}} to reference user-specific files
 *    - Using Conditional Logic: Different attachments based on user preferences/actions
 * 
 * Compatibility Considerations:
 * 1. Email Client Support:
 *    - Major email clients (Gmail, Outlook, Apple Mail) generally support attachments
 *    - Mobile devices may handle large or complex attachments differently
 * 
 * 2. Potential Issues:
 *    - Increased spam filtering: More complex emails face stricter scrutiny
 *    - Size limitations: Many email servers reject emails larger than 10-25MB
 *    - Rendering inconsistencies: Some email clients may not display attachments correctly
 *    - Security warnings: Recipients may see warnings about attachments
 * 
 * Best Practices for AI Companies:
 * 1. Test thoroughly across multiple email clients and devices
 * 2. Keep attachments small (under 5MB if possible)
 * 3. Use common, universally supported file formats (PDF, JPG, PNG)
 * 4. Consider hosting larger files in the cloud and including download links instead
 * 5. Include clear instructions on how to access attachments
 * 6. Always have a fallback in case attachments fail to load
 * 
 * Implementation in EmailJS:
 * 1. Upload files to the "Files" section in your EmailJS dashboard
 * 2. Reference files using variables in your template
 * 3. Use dynamic paths based on template variables
 * 
 * For modern AI companies, consider a hybrid approach:
 * - Use static attachments for branding elements (logos, headers)
 * - Embed lightweight dynamic content directly in HTML
 * - Host larger AI-generated content in cloud storage with secure links
 */
export const dynamicAttachmentsGuide = {};

