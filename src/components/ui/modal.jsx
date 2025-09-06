import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import { X } from '@phosphor-icons/react';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  className,
  overlayClassName,
  ...props 
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in',
          overlayClassName
        )}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div
        className={cn(
          'relative bg-white rounded-xl shadow-large max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in',
          'dark:bg-gray-800',
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const ModalHeader = ({ className, children, showClose = true, onClose, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-6 pb-4',
        className
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>
      {showClose && (
        <button
          onClick={onClose}
          className="ml-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

const ModalTitle = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        'text-xl font-semibold text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const ModalDescription = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(
        'text-sm text-gray-600 dark:text-gray-400 mt-1',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const ModalContent = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const ModalFooter = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 p-6 pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { 
  Modal, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription, 
  ModalContent, 
  ModalFooter 
};