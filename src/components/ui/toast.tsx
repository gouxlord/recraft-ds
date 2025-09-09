import React from 'react';
import toast, { Toaster, Toast } from 'react-hot-toast';
import { cn } from '../../lib/utils';
import { 
  CheckCircle, 
  WarningCircle, 
  X, 
  XCircle, 
  Info 
} from '@phosphor-icons/react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface CustomToastProps {
  t: Toast;
  title: string;
  message?: string;
  type?: ToastType;
  action?: string;
  onAction?: () => void;
}

export interface ToastOptions {
  duration?: number;
  action?: string;
  onAction?: () => void;
}

export interface PromiseMessages {
  loading: string;
  success: string | ((data: any) => string);
  error: string | ((error: any) => string);
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

const CustomToast = ({ 
  t, 
  title, 
  message, 
  type = 'info', 
  action,
  onAction 
}: CustomToastProps) => {
  const getToastConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircle size={20} className="text-status-success" weight="duotone" />,
          bgColor: 'bg-status-success-light',
          borderColor: 'border-status-success/20',
          textColor: 'text-foreground',
          descColor: 'text-status-success'
        };
      case 'error':
        return {
          icon: <XCircle size={20} className="text-destructive" weight="duotone" />,
          bgColor: 'bg-destructive/10',
          borderColor: 'border-destructive/20',
          textColor: 'text-foreground',
          descColor: 'text-destructive'
        };
      case 'warning':
        return {
          icon: <WarningCircle size={20} className="text-status-warning" weight="duotone" />,
          bgColor: 'bg-status-warning-light',
          borderColor: 'border-status-warning/20',
          textColor: 'text-foreground',
          descColor: 'text-status-warning'
        };
      case 'info':
        return {
          icon: <Info size={20} className="text-hr-skill" weight="duotone" />,
          bgColor: 'bg-hr-skill-light',
          borderColor: 'border-hr-skill-border',
          textColor: 'text-foreground',
          descColor: 'text-hr-skill'
        };
      default:
        return {
          icon: <Info size={20} className="text-primary" weight="duotone" />,
          bgColor: 'bg-primary/10',
          borderColor: 'border-primary/20',
          textColor: 'text-foreground',
          descColor: 'text-primary'
        };
    }
  };

  const config = getToastConfig();

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border shadow-md max-w-md w-full',
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
  success: (title: string, message?: string, options: ToastOptions = {}) => {
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
  
  error: (title: string, message?: string, options: ToastOptions = {}) => {
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
  
  warning: (title: string, message?: string, options: ToastOptions = {}) => {
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
  
  info: (title: string, message?: string, options: ToastOptions = {}) => {
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

  promise: <T,>(promise: Promise<T>, messages: PromiseMessages) => {
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
        success: (data: T) => (t: Toast) => (
          <CustomToast 
            t={t} 
            title={typeof messages.success === 'function' ? messages.success(data) : messages.success}
            type="success"
          />
        ),
        error: (error: any) => (t: Toast) => (
          <CustomToast 
            t={t} 
            title={typeof messages.error === 'function' ? messages.error(error) : messages.error}
            type="error"
          />
        ),
      }
    );
  }
};

const ToastProvider = ({ children }: ToastProviderProps) => {
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