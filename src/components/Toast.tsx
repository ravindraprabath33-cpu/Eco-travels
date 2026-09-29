import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 bg-primary text-on-primary px-5 py-3.5 rounded-2xl shadow-2xl border border-secondary/30 backdrop-blur-md">
        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
          check_circle
        </span>
        <span className="font-label-md text-label-md text-surface tracking-wide">
          {message}
        </span>
        <button
          onClick={onClose}
          className="ml-2 text-surface-variant hover:text-on-primary transition-colors"
          aria-label="Close notification"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
};
