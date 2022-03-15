export {};

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        maximizeWindow: () => void;
        minimizeWindow: () => void;
        myPing: () => void;
      };
    };
  }
}
