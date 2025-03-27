
interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  // Don't redefine requestIdleCallback here as it will conflict with TypeScript's built-in definitions
}
