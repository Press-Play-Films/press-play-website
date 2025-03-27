
interface IdleRequestOptions {
  timeout?: number;
}

interface Window {
  sessionId?: string;
  initializerRun?: boolean;
  _titleBox?: HTMLElement;
  _titleElement?: HTMLElement;
}

// Updated interface for TimerHandler with proper definition
interface TimerHandler {
  (this: Window): void;
}
