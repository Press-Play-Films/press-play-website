
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense, memo } from "react";
import { initEmailJS } from "@/utils/email";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const Skills = lazy(() => import("./pages/Skills"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create queryClient only once
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      retry: false,
      // The property 'useErrorBoundary' is not recognized in this version of react-query
      // Removing it resolves the TypeScript error
    },
  },
});

// Initialize EmailJS with environment variable or fallback to placeholder
const emailJsUserId = import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID';
initEmailJS(emailJsUserId);

// Memoize stars component to prevent unnecessary re-renders
const BackgroundStars = memo(() => {
  useEffect(() => {
    const createStars = () => {
      const container = document.body;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Clear existing stars
      const existingStars = document.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create fewer stars for better performance
      const starCount = Math.min(80, Math.floor((screenWidth * screenHeight) / 12000));
      
      // Create stars with document fragment for better performance
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${Math.random() < 0.8 ? 'small' : Math.random() < 0.95 ? 'medium' : 'large'}`;
        star.style.left = `${Math.random() * screenWidth}px`;
        star.style.top = `${Math.random() * screenHeight}px`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };
    
    createStars();
    
    // Debounce resize handler to improve performance
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(createStars, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
});

BackgroundStars.displayName = 'BackgroundStars';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center bg-background">
    <div className="text-center">
      <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
      <p className="text-lg text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <BackgroundStars />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
