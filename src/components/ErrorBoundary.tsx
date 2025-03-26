
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to console or your preferred error tracking service
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleDismiss = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/'; // Redirect to homepage
  }

  private handleRetry = (): void => {
    // Refresh the page to try again
    window.location.reload();
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI when an error occurs
      return this.props.fallback || (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-red-500/20 p-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Error</h2>
            </div>
            
            <p className="mb-2 text-foreground">
              An unexpected error occurred.
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              Please try again later or refresh the page.
            </p>
            
            <div className="flex flex-row justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={this.handleDismiss}
              >
                Dismiss
              </Button>
              <Button 
                onClick={this.handleRetry}
              >
                Retry
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
