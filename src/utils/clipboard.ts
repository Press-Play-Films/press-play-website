
import { toast } from "sonner";

/**
 * Copy text to clipboard with enhanced error handling and feedback
 * @param text Text to copy to clipboard
 * @param description Description for toast notification
 * @returns Promise that resolves to a boolean indicating success
 */
export const copyToClipboard = async (
  text: string, 
  description: string
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${description} copied to clipboard!`);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    toast.error("Failed to copy to clipboard. Please try again.");
    return false;
  }
};
