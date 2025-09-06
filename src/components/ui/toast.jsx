import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import { cn } from '../../lib/utils';
import { 
  CheckCircle, 
  WarningCircle, 
  X, 
  XCircle, 
  Info 
} from '@phosphor-icons/react';

const CustomToast = ({ 
  t, 
  title, 
  message, 
  type = 'info', 
  action,
  onAction 
}) => {
  const getToastConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircle size={20} className="text-green-600" weight="duotone" />,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-900',
          descColor: 'text-green-700'
        };
      case 'error':
        return {
          icon: <XCircle size={20} className="text-red-600" weight="duotone" />,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-900',
          descColor: 'text-red-700'
        };
      case 'warning':
        return {
          icon: <WarningCircle size={20} className="text-orange-600" weight="duotone" />,
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          textColor: 'text-orange-900',
          descColor: 'text-orange-700'
        };
      case 'info':
        return {
          icon: <Info size={20} className="text-blue-600" weight="duotone" />,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-900',
          descColor: 'text-blue-700'
        };
      default:
        return {
          icon: <Info size={20} className="text-primary-600" weight="duotone" />,
          bgColor: 'bg-primary-50',
          borderColor: 'border-primary-200',
          textColor: 'text-primary-900',
          descColor: 'text-primary-700'
        };
    }
  };

  const config = getToastConfig();

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border shadow-medium max-w-md w-full',
        config.bgColor,
        config.borderColor,
        t.visible ? 'animate-enter' : 'animate-leave'
      )}
    >
      <div className="flex-shrink-0">
        {config.icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className={cn('font-semibold text-sm', config.textColor)}>
          {title}
        </h4>
        {message && (
          <p className={cn('text-sm mt-1', config.descColor)}>
            {message}
          </p>
        )}
        {action && (
          <button
            onClick={() => {
              onAction?.();
              toast.dismiss(t.id);
            }}
            className={cn(
              'text-sm font-medium mt-2 hover:underline',
              config.descColor
            )}
          >
            {action}
          </button>
        )}
      </div>
      
      <button
        onClick={() => toast.dismiss(t.id)}
        className={cn(
          'flex-shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors',
          config.textColor
        )}
      >
        <X size={16} />
      </button>
    </div>
  );
};

const createToast = {
  success: (title, message, options = {}) => {
    return toast.custom((t) => (
      <CustomToast 
        t={t} 
        title={title} 
        message={message} 
        type="success" 
        {...options} 
      />
    ), {
      duration: 4000,
      ...options
    });
  },
  
  error: (title, message, options = {}) => {
    return toast.custom((t) => (
      <CustomToast 
        t={t} 
        title={title} 
        message={message} 
        type="error" 
        {...options} 
      />
    ), {
      duration: 6000,
      ...options
    });
  },
  
  warning: (title, message, options = {}) => {
    return toast.custom((t) => (
      <CustomToast 
        t={t} 
        title={title} 
        message={message} 
        type="warning" 
        {...options} 
      />
    ), {
      duration: 5000,
      ...options
    });
  },
  
  info: (title, message, options = {}) => {
    return toast.custom((t) => (
      <CustomToast 
        t={t} 
        title={title} 
        message={message} 
        type="info" 
        {...options} 
      />
    ), {
      duration: 4000,
      ...options
    });
  },

  promise: (promise, messages) => {
    return toast.promise(
      promise,
      {
        loading: (t) => (
          <CustomToast 
            t={t} 
            title={messages.loading}
            type="info"
          />
        ),
        success: (data) => (t) => (
          <CustomToast 
            t={t} 
            title={messages.success}
            message={typeof messages.success === 'function' ? messages.success(data) : undefined}
            type="success"
          />
        ),
        error: (error) => (t) => (
          <CustomToast 
            t={t} 
            title={messages.error}
            message={typeof messages.error === 'function' ? messages.error(error) : undefined}
            type="error"
          />
        ),
      }
    );
  }
};

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster 
        position="top-right"
        gutter={12}
        containerStyle={{
          top: 24,
          right: 24,
        }}
        toastOptions={{
          duration: 4000,
          className: '',
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
            margin: 0,
          },
        }}
      />
    </>
  );
};

// Hook pour compatibilité
export const useToast = () => {
  return {
    success: createToast.success,
    error: createToast.error,
    warning: createToast.warning,
    info: createToast.info
  };
};

export { createToast, ToastProvider, CustomToast };
export default createToast;