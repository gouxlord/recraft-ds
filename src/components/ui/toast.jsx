import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import { 
  CheckCircle, 
  Warning, 
  X, 
  XCircle, 
  Info 
} from '@phosphor-icons/react';

const Toast = ({ 
  type = 'info',
  title,
  description,
  isVisible,
  onClose,
  duration = 5000,
  className,
  ...props 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-success-600" weight="fill" />;
      case 'warning':
        return <Warning size={20} className="text-warning-600" weight="fill" />;
      case 'error':
        return <XCircle size={20} className="text-error-600" weight="fill" />;
      default:
        return <Info size={20} className="text-primary-600" weight="fill" />;
    }
  };

  const getVariantStyles = () => {
    const baseStyles = 'border-l-4';
    switch (type) {
      case 'success':
        return `${baseStyles} border-l-success-500 bg-success-50`;
      case 'warning':
        return `${baseStyles} border-l-warning-500 bg-warning-50`;
      case 'error':
        return `${baseStyles} border-l-error-500 bg-error-50`;
      default:
        return `${baseStyles} border-l-primary-500 bg-primary-50`;
    }
  };

  return createPortal(
    <div
      className={cn(
        'fixed top-4 right-4 z-50 max-w-sm w-full animate-slide-up',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex items-start gap-3 p-4 rounded-lg shadow-large bg-white',
          getVariantStyles()
        )}
      >
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          {title && (
            <p className="text-sm font-medium text-gray-900 mb-1">
              {title}
            </p>
          )}
          {description && (
            <p className="text-sm text-gray-600">
              {description}
            </p>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <X size={16} className="text-gray-500" />
        </button>
      </div>
    </div>,
    document.body
  );
};

// Hook pour gérer les toasts
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, ...toast };
    setToasts(prev => [...prev, newToast]);
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title, description) => addToast({ type: 'success', title, description });
  const error = (title, description) => addToast({ type: 'error', title, description });
  const warning = (title, description) => addToast({ type: 'warning', title, description });
  const info = (title, description) => addToast({ type: 'info', title, description });

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
};

// Composant ToastContainer à placer dans votre App
export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          {...toast}
          isVisible={true}
          onClose={() => removeToast(toast.id)}
          className={`top-${4 + index * 16}`}
        />
      ))}
    </>
  );
};

export { Toast };