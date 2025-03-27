
interface IdleRequestOptions {
  timeout?: number;
}

interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  _titleBox?: HTMLElement;
  _titleElement?: HTMLElement;
  // Removed requestIdleCallback type definitions as they're causing TypeScript errors
}
