import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Badge } from './badge';
import { BadgeVariant } from '../../types';

export type CardActionPriority = 'normal' | 'high' | 'urgent';
export type QuickActionVariant = 'default' | 'success' | 'warning' | 'error';

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: any;
  title: string;
  description: string;
  badge?: string | number;
  badgeVariant?: BadgeVariant['variant'];
  priority?: CardActionPriority;
  onAction?: () => void;
  actionLabel?: string;
}

export interface CardActionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface QuickActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any;
  label: string;
  count?: string | number;
  variant?: QuickActionVariant;
}

// Élément d'action spécial pour les display cards
const CardAction = ({ 
  icon: Icon,
  title,
  description,
  badge,
  badgeVariant = 'default',
  priority = 'normal',
  onAction,
  actionLabel = 'Agir',
  className,
  ...props 
}: CardActionProps) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case 'urgent':
        return {
          container: 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200 hover:from-red-100 hover:to-pink-100',
          icon: 'text-red-600 bg-red-100',
          badge: 'bg-red-500 text-white',
          button: 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/20'
        };
      case 'high':
        return {
          container: 'bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200 hover:from-orange-100 hover:to-yellow-100',
          icon: 'text-orange-600 bg-orange-100',
          badge: 'bg-orange-500 text-white',
          button: 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-500/20'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200 hover:from-primary-100 hover:to-blue-100',
          icon: 'text-primary-600 bg-primary-100',
          badge: 'bg-primary-500 text-white',
          button: 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/20'
        };
    }
  };

  const styles = getPriorityStyles();

  return (
    <div
      className={cn(
        'relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group',
        styles.container,
        className
      )}
      {...props}
    >
      {/* Background effet de pulse subtil */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-start gap-4">
        {/* Icône avec effet moderne */}
        <div className={cn(
          'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110',
          styles.icon
        )}>
          {Icon && <Icon size={20} weight="duotone" />}
        </div>

        {/* Contenu principal */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
            {badge && (
              <Badge 
                variant={badgeVariant} 
                className={cn('text-xs px-2 py-0.5', styles.badge)}
              >
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Bouton d'action moderne */}
        <div className="flex-shrink-0">
          <Button
            size="sm"
            onClick={onAction}
            className={cn(
              'shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95',
              styles.button
            )}
          >
            {actionLabel}
          </Button>
        </div>
      </div>

      {/* Indicateur de priorité (barre latérale) */}
      {priority !== 'normal' && (
        <div className={cn(
          'absolute left-0 top-4 bottom-4 w-1 rounded-r-full',
          priority === 'urgent' ? 'bg-red-500' : 'bg-orange-500'
        )} />
      )}
    </div>
  );
};

// Groupe d'actions avec espacement optimisé
const CardActionGroup = ({ children, className, ...props }: CardActionGroupProps) => {
  return (
    <div 
      className={cn('space-y-3', className)} 
      {...props}
    >
      {children}
    </div>
  );
};

// Action rapide compacte
const QuickAction = ({ 
  icon: Icon, 
  label, 
  count, 
  onClick, 
  variant = 'default',
  className,
  ...props 
}: QuickActionProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200';
      case 'warning':
        return 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200';
      case 'error':
        return 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-primary-50 hover:bg-primary-100 text-primary-700 border-primary-200';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md group w-full text-left',
        getVariantStyles(),
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0">
        {Icon && <Icon size={16} weight="duotone" />}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-medium text-sm">{label}</span>
      </div>
      {count && (
        <div className="flex-shrink-0">
          <span className="text-xs font-bold bg-white/60 px-2 py-1 rounded-full">
            {count}
          </span>
        </div>
      )}
    </button>
  );
};

export { CardAction, CardActionGroup, QuickAction };
export default CardAction;