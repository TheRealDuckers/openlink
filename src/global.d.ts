import { JSXElement } from 'solid-js';
import type { ToastContextType } from './components/toast';

interface globals {
  __TAURI__?: {
    fs: any;
    path: any;
    dialog: any;
    event: any;
    core: any;
  };
  reload: () => void;
  toast: any;
  sessionData: any;
  logger: any;
  loadItemPage: (
    id: string,
    name: string,
    forceOpenNav?: boolean
  ) => Promise<void>;
  edulink: any;
  setOverlay: (value: JSXElement) => Promise<void>;
}


declare global {
  var __TAURI__: globals["__TAURI__"];
  interface Window extends globals {}
  interface GlobalThis extends globals {}
}

export { };
