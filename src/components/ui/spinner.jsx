import React from 'react';
import { cn } from '../../lib/utils';

const Spinner = ({ 
  size = 'default',
  className,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};

const LoadingSpinner = ({ 
  text = 'Chargement...',
  size = 'default',
  className 
}) => {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <Spinner size={size} />
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

const ButtonSpinner = ({ className }) => {
  return (
    <Spinner 
      size="sm" 
      className={cn('border-white border-t-transparent', className)} 
    />
  );
};

// Spinner pour overlay pleine page
const PageSpinner = ({ text = 'Chargement...', className }) => {
  return (
    <div className={cn(
      'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50',
      'dark:bg-gray-900/80',
      className
    )}>
      <LoadingSpinner text={text} size="lg" />
    </div>
  );
};

// Spinner pour section/card
const SectionSpinner = ({ text, className }) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center py-12 px-6',
      className
    )}>
      <LoadingSpinner text={text} />
    </div>
  );
};

export { 
  Spinner, 
  LoadingSpinner, 
  ButtonSpinner, 
  PageSpinner, 
  SectionSpinner 
};