
interface IdleRequestOptions {
  timeout?: number;
}

interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  _titleBox?: HTMLElement;
  _titleElement?: HTMLElement;
  // Don't redefine requestIdleCallback here as it will conflict with TypeScript's built-in definitions
}
