
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
        <p>To unsubscribe from future emails, <a href="{{user_unsubscribe}}" style="color: #6d28d9;">click here</a>.</p>
      </div>
    </div>
  `;
};
