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
          container: 'bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20 hover:from-destructive/20 hover:to-destructive/10',
          icon: 'text-destructive bg-destructive/10',
          badge: 'bg-destructive text-destructive-foreground',
          button: 'bg-destructive hover:bg-destructive/90 text-destructive-foreground'
        };
      case 'high':
        return {
          container: 'bg-gradient-to-r from-status-warning-light to-status-warning-light/50 border-status-warning/20 hover:from-status-warning-light/80 hover:to-status-warning-light/60',
          icon: 'text-status-warning bg-status-warning-light',
          badge: 'bg-status-warning text-white',
          button: 'bg-status-warning hover:bg-status-warning/90 text-white'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 hover:from-primary/20 hover:to-primary/10',
          icon: 'text-primary bg-primary/10',
          badge: 'bg-primary text-primary-foreground',
          button: 'bg-primary hover:bg-primary/90 text-primary-foreground'
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
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
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
            <h4 className="font-semibold text-foreground text-sm">{title}</h4>
            {badge && (
              <Badge 
                variant={badgeVariant} 
                className={cn('text-xs px-2 py-0.5', styles.badge)}
              >
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Bouton d'action moderne */}
        <div className="flex-shrink-0">
          <Button
            size="sm"
            onClick={onAction}
            className={cn(
              'shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 focus-ring',
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
          priority === 'urgent' ? 'bg-destructive' : 'bg-status-warning'
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
        return 'bg-status-success-light hover:bg-status-success-light/80 text-status-success border-status-success/20';
      case 'warning':
        return 'bg-status-warning-light hover:bg-status-warning-light/80 text-status-warning border-status-warning/20';
      case 'error':
        return 'bg-destructive/10 hover:bg-destructive/20 text-destructive border-destructive/20';
      default:
        return 'bg-primary/10 hover:bg-primary/20 text-primary border-primary/20';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md group w-full text-left focus-ring',
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
          <span className="text-xs font-bold bg-background/60 px-2 py-1 rounded-full">
            {count}
          </span>
        </div>
      )}
    </button>
  );
};

export { CardAction, CardActionGroup, QuickAction };
export default CardAction;