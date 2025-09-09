import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg' | 'xl';
}

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  size?: 'sm' | 'default' | 'lg' | 'xl';
}

export interface ButtonSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface PageSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export interface SectionSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'default',
  className,
  ...props 
}) => {
  const sizeClasses: Record<NonNullable<SpinnerProps['size']>, string> = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-muted-foreground/30 border-t-primary',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  text = 'Chargement...',
  size = 'default',
  className,
  ...props
}) => {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)} {...props}>
      <Spinner size={size} />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ className, ...props }) => {
  return (
    <Spinner 
      size="sm" 
      className={cn('border-primary-foreground border-t-transparent', className)}
      {...props}
    />
  );
};

const PageSpinner: React.FC<PageSpinnerProps> = ({ 
  text = 'Chargement...', 
  className,
  ...props
}) => {
  return (
    <div className={cn(
      'fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50',
      className
    )} {...props}>
      <LoadingSpinner text={text} size="lg" />
    </div>
  );
};

const SectionSpinner: React.FC<SectionSpinnerProps> = ({ 
  text, 
  className,
  ...props
}) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center py-12 px-6',
      className
    )} {...props}>
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