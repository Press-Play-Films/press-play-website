
/**
 * Get auto reply message that can be used in EmailJS templates
 * 
 * @returns HTML string formatted message for auto-replies
 */
export const getAutoReplyMessage = (): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <!-- Logo Section -->
      <div style="text-align: center; margin-bottom: 20px; padding-top: 20px;">
        <img src="cid:logo.png" alt="Andrew Freeman Logo" style="max-width: 150px; height: auto;" />
      </div>
      
      <h2 style="color: #6d28d9; font-size: 24px; margin-bottom: 15px;">Thank you for contacting Andrew Freeman</h2>
      
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">I appreciate you reaching out and will review your message promptly.</p>
      
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">As an AI Integration & Video Production Specialist based in Las Vegas, I'm committed to pioneering the intersection of Sales, Technology, and Entertainment through innovative solutions.</p>
      
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">I'll get back to you as soon as possible, typically within 1-2 business days.</p>
      
      <div style="background-color: #f7f4ff; border-left: 4px solid #6d28d9; padding: 15px; margin: 20px 0;">
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>In the meantime, feel free to:</strong></p>
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 10px;"><a href="https://pressp.vip" style="color: #6d28d9; text-decoration: none; font-weight: 500;">Visit my portfolio</a> to explore my recent projects</li>
          <li style="margin-bottom: 10px;"><a href="https://www.linkedin.com/in/pressplayproductions/" style="color: #6d28d9; text-decoration: none; font-weight: 500;">Connect with me on LinkedIn</a> for professional updates</li>
        </ul>
      </div>
      
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">Looking forward to discussing how we can collaborate!</p>
      
      <div style="margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 20px;">
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 5px;"><strong>Best regards,</strong></p>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 5px;">Andrew Freeman</p>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">AI Integration & Video Production Specialist</p>
        
        <div style="display: flex; gap: 15px; margin-bottom: 20px;">
          <a href="https://pressp.vip" style="display: inline-block; padding: 8px 20px; background-color: #6d28d9; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">View Portfolio</a>
          <a href="tel:+17026021277" style="display: inline-block; padding: 8px 20px; background-color: #f3f4f6; color: #333; text-decoration: none; border-radius: 4px; font-weight: 500;">Call Me</a>
        </div>
      </div>
      
      <div style="margin-top: 10px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
        <p style="margin-bottom: 8px;">This is an automated response. Please do not reply to this email.</p>
        <p style="margin-bottom: 8px;">Phone: +1 (702) 602-1277 | Email: andrew@pressp.vip | Las Vegas, NV</p>
        <p style="margin-bottom: 8px;">To unsubscribe from future emails, <a href="{{user_unsubscribe}}" style="color: #6d28d9;">click here</a>.</p>
      </div>
    </div>
  `;
};
