

interface IdleRequestOptions {
  timeout?: number;
}

interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  _titleBox?: HTMLElement;
  _titleElement?: HTMLElement;
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ) => number;
  // Don't redefine requestIdleCallback here as it will conflict with TypeScript's built-in definitions
}

