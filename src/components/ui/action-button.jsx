import React from 'react';
import { cn } from '../../lib/utils';
import { cva } from 'class-variance-authority';

const actionButtonVariants = cva(
  'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-primary-500/25',
        secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-secondary-500/25',
        success: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-500 shadow-green-500/25',
        warning: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 focus:ring-orange-500 shadow-orange-500/25',
        info: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500 shadow-blue-500/25',
        glass: 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 hover:bg-white/20 focus:ring-primary-500 shadow-lg',
        outline: 'border-2 border-primary-200 text-primary-700 hover:border-primary-300 hover:bg-primary-50 focus:ring-primary-500 bg-white',
        ghost: 'text-primary-700 hover:bg-primary-100 focus:ring-primary-500',
      },
      size: {
        sm: 'px-3 py-2 text-xs rounded-lg',
        md: 'px-4 py-2.5 text-sm rounded-xl',
        lg: 'px-6 py-3 text-base rounded-xl',
      },
      glow: {
        true: 'shadow-lg',
        false: '',
      },
      floating: {
        true: 'hover:shadow-xl hover:-translate-y-0.5',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      glow: false,
      floating: true,
    },
  }
);

const ActionButton = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  glow, 
  floating,
  children, 
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        actionButtonVariants({ variant, size, glow, floating }),
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
const FloatingActionGroup = ({ children, className, ...props }) => {
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
}) => {
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
}) => {
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