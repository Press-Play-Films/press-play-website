
interface IdleRequestOptions {
  timeout?: number;
}

interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  _titleBox?: HTMLElement;
  _titleElement?: HTMLElement;
}

// Add an empty interface for setTimeout to avoid type errors
// This is a workaround for the unusual TypeScript environment
interface TimerHandler {}
