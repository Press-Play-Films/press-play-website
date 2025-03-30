import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense, memo } from "react";
import { initEmailJS } from "@/utils/email";
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages to reduce initial bundle size with improved error handling
const Index = lazy(() => import("./pages/index"));
const Skills = lazy(() => import("./pages/Skills"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create queryClient only once
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      retry: false,
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
    },
  },
});

// Initialize EmailJS with environment variable or fallback to placeholder
const emailJsUserId = import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID';
initEmailJS(emailJsUserId);

// Log initialization only in development
if (import.meta.env.DEV) {
  console.log(`[App] Initialized with EmailJS User ID: ${emailJsUserId === 'YOUR_USER_ID' ? 'PLACEHOLDER (email will not work)' : 'VALID'}`);
  console.log('[App] CSS variables check:', {
    background: getComputedStyle(document.documentElement).getPropertyValue('--background'),
    card: getComputedStyle(document.documentElement).getPropertyValue('--card'),
    primary: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
  });
}

// Loading component
const LoadingFallback = memo(() => (
  <div className="h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary text-xl">Loading...</div>
  </div>
));
LoadingFallback.displayName = 'LoadingFallback';

// Memoize stars component to prevent unnecessary re-renders
const BackgroundStars = memo(() => {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('[BackgroundStars] Creating stars background');
    }
    
    const createStars = () => {
      const container = document.body;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Clear existing stars
      const existingStars = document.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create fewer stars for better performance
      const starCount = Math.min(80, Math.floor((screenWidth * screenHeight) / 12000));
      
      if (import.meta.env.DEV) {
        console.log(`[BackgroundStars] Creating ${starCount} stars for screen size ${screenWidth}x${screenHeight}`);
      }
      
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
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (import.meta.env.DEV) {
          console.log('[BackgroundStars] Window resized, recreating stars');
        }
        createStars();
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      if (import.meta.env.DEV) {
        console.log('[BackgroundStars] Cleanup');
      }
    };
  }, []);

  return null;
});

BackgroundStars.displayName = 'BackgroundStars';

// Memoize the entire Routes component to prevent unnecessary re-renders
const AppRoutes = memo(() => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
));

AppRoutes.displayName = 'AppRoutes';

const App = () => {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('[App] Component mounted');
      
      // Debug CSS classes immediately after mount
      console.log('[App] Checking critical CSS classes:', {
        titleGradientClass: document.querySelector('.section-title-gradient') ? 'exists' : 'missing',
        titleGlassBox: document.querySelector('.title-glass-box') ? 'exists' : 'missing',
        sectionGradient: document.querySelector('.section-subtitle-gradient') ? 'exists' : 'missing' 
      });
    }
    
    return () => {
      if (import.meta.env.DEV) {
        console.log('[App] Component unmounted');
      }
    };
  }, []);
  
  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <BackgroundStars />
              <Suspense fallback={<LoadingFallback />}>
                <AppRoutes />
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
