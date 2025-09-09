import React from 'react';
import { cn } from '../../lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const actionButtonVariants = cva(
  'inline-flex items-center gap-2 rounded-xl font-medium text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md focus-ring',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        success: 'bg-status-success text-white hover:bg-status-success/90',
        warning: 'bg-status-warning text-white hover:bg-status-warning/90',
        info: 'bg-hr-skill text-white hover:bg-hr-skill/90',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10 bg-background',
        ghost: 'text-primary hover:bg-primary/10',
      },
      size: {
        sm: 'btn-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'btn-lg',
      },
      elevated: {
        true: 'shadow-md hover:shadow-lg hover:-translate-y-0.5',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      elevated: true,
    },
  }
);

export interface ActionButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  icon?: any;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export interface FloatingActionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ActionButtonWithBadgeProps extends ActionButtonProps {
  badge?: string | number;
  badgeVariant?: 'primary' | 'success' | 'warning' | 'error';
}

export interface ActionButtonWithProgressProps extends ActionButtonProps {
  progress?: number;
  showProgress?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(({ 
  className, 
  variant, 
  size, 
  elevated,
  children, 
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        actionButtonVariants({ variant, size, elevated }),
        loading && 'cursor-not-allowed opacity-75',
        className
      )}
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Chargement...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={16} weight="duotone" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={16} weight="duotone" />}
        </>
      )}
    </button>
  );
});

ActionButton.displayName = 'ActionButton';

// Composant de groupe d'actions flottantes
const FloatingActionGroup = ({ children, className, ...props }: FloatingActionGroupProps) => {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Bouton d'action avec badge de notification
const ActionButtonWithBadge = ({ 
  badge, 
  badgeVariant = 'primary', 
  children, 
  className,
  ...props 
}: ActionButtonWithBadgeProps) => {
  return (
    <div className="relative">
      <ActionButton className={className} {...props}>
        {children}
      </ActionButton>
      {badge && (
        <div className={cn(
          'absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-xs font-bold rounded-full shadow-sm',
          badgeVariant === 'primary' && 'bg-primary-500 text-white',
          badgeVariant === 'success' && 'bg-green-500 text-white',
          badgeVariant === 'warning' && 'bg-orange-500 text-white',
          badgeVariant === 'error' && 'bg-red-500 text-white',
        )}>
          {badge}
        </div>
      )}
    </div>
  );
};

// Bouton d'action avec progress bar
const ActionButtonWithProgress = ({ 
  progress = 0, 
  children, 
  className,
  showProgress = true,
  ...props 
}: ActionButtonWithProgressProps) => {
  return (
    <div className="relative overflow-hidden">
      <ActionButton className={cn('relative z-10', className)} {...props}>
        {children}
      </ActionButton>
      {showProgress && (
        <div 
          className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      )}
    </div>
  );
};

export { 
  ActionButton, 
  FloatingActionGroup, 
  ActionButtonWithBadge, 
  ActionButtonWithProgress,
  actionButtonVariants 
};
export default ActionButton;