import React from 'react';
import { cn } from '../../lib/utils';
import { TrendUp, TrendDown, Minus } from '@phosphor-icons/react';

export type StatCardTrend = 'up' | 'down' | 'stable' | 'neutral';
export type StatCardVariant = 'default' | 'primary' | 'secondary' | 'success';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  trend?: StatCardTrend;
  trendValue?: string;
  icon?: any;
  variant?: StatCardVariant;
}

const StatCard = ({ 
  title, 
  value, 
  description,
  trend,
  trendValue,
  icon: Icon,
  variant = 'default',
  className,
  ...props
}: StatCardProps) => {
  const getTrendIcon = () => {
    if (!trend) return null;
    
    switch(trend) {
      case 'up':
        return <TrendUp size={16} className="text-status-success" weight="bold" />;
      case 'down':
        return <TrendDown size={16} className="text-destructive" weight="bold" />;
      default:
        return <Minus size={16} className="text-muted-foreground" weight="bold" />;
    }
  };

  const getTrendColor = () => {
    switch(trend) {
      case 'up':
        return 'text-status-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getVariantAccent = () => {
    switch(variant) {
      case 'primary':
        return 'border-l-primary';
      case 'secondary':
        return 'border-l-secondary';
      case 'success':
        return 'border-l-status-success';
      default:
        return 'border-l-border';
    }
  };

  const getIconStyles = () => {
    switch(variant) {
      case 'primary':
        return { bg: 'bg-primary/10', color: 'text-primary' };
      case 'secondary':
        return { bg: 'bg-secondary/10', color: 'text-secondary' };
      case 'success':
        return { bg: 'bg-status-success-light', color: 'text-status-success' };
      default:
        return { bg: 'bg-muted', color: 'text-muted-foreground' };
    }
  };

  const iconStyles = getIconStyles();

  return (
    <div 
      className={cn(
        "card-elevated rounded-xl p-6 border-l-4 transition-shadow",
        getVariantAccent(),
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2 text-foreground">
            {value}
          </p>
          {(description || trendValue) && (
            <div className="flex items-center gap-2 mt-3">
              {trend && (
                <div className="flex items-center gap-1">
                  {getTrendIcon()}
                  {trendValue && (
                    <span className={cn("text-sm font-medium", getTrendColor())}>
                      {trendValue}
                    </span>
                  )}
                </div>
              )}
              {description && (
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        {Icon && (
          <div className={cn(
            "p-3 rounded-xl shadow-sm",
            iconStyles.bg
          )}>
            <Icon 
              size={24} 
              className={iconStyles.color}
              weight="duotone"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;