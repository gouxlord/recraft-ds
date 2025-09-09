import React, { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import { X } from '@phosphor-icons/react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  overlayClassName?: string;
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showClose?: boolean;
  onClose?: () => void;
}

export interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  className,
  overlayClassName,
  ...props 
}: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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
          'fixed inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in',
          overlayClassName
        )}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div
        className={cn(
          'relative bg-background rounded-xl shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in',
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

const ModalHeader = ({ className, children, showClose = true, onClose, ...props }: ModalHeaderProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-6 pb-4',
        className
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>
      {showClose && onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-1 hover:bg-muted rounded-lg transition-colors focus-ring"
        >
          <X size={20} className="text-muted-foreground" />
        </button>
      )}
    </div>
  );
};

const ModalTitle = ({ className, children, ...props }: ModalTitleProps) => {
  return (
    <h2
      className={cn(
        'text-xl font-semibold text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const ModalDescription = ({ className, children, ...props }: ModalDescriptionProps) => {
  return (
    <p
      className={cn(
        'text-sm text-muted-foreground mt-1',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const ModalContent = ({ className, children, ...props }: ModalContentProps) => {
  return (
    <div
      className={cn('px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const ModalFooter = ({ className, children, ...props }: ModalFooterProps) => {
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