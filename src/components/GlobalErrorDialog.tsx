
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

interface GlobalErrorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function GlobalErrorDialog({ 
  open, 
  onOpenChange, 
  title = "An error occurred", 
  description = "We're sorry, but something went wrong. Please try again." 
}: GlobalErrorDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => window.location.reload()}>
            Retry
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Hook to use the error dialog
export function useErrorDialog() {
  const [open, setOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState({
    title: "An error occurred",
    description: "We're sorry, but something went wrong. Please try again."
  });

  const showError = (title?: string, description?: string) => {
    setErrorInfo({
      title: title || "An error occurred",
      description: description || "We're sorry, but something went wrong. Please try again."
    });
    setOpen(true);
  };

  return {
    open,
    setOpen,
    errorInfo,
    showError
  };
}
