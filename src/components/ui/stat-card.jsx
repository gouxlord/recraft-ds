import React from 'react';
import { cn } from '../../lib/utils';
import { TrendUp, TrendDown, Minus } from '@phosphor-icons/react';

const StatCard = ({ 
  title, 
  value, 
  description,
  trend,
  trendValue,
  icon: Icon,
  variant = 'default',
  className 
}) => {
  const getTrendIcon = () => {
    if (!trend) return null;
    
    switch(trend) {
      case 'up':
        return <TrendUp size={16} className="text-success-600" weight="bold" />;
      case 'down':
        return <TrendDown size={16} className="text-error-600" weight="bold" />;
      default:
        return <Minus size={16} className="text-gray-500" weight="bold" />;
    }
  };

  const getTrendColor = () => {
    switch(trend) {
      case 'up':
        return 'text-success-600';
      case 'down':
        return 'text-error-600';
      default:
        return 'text-gray-500';
    }
  };

  const variantStyles = {
    default: 'bg-white',
    primary: 'bg-gradient-to-br from-primary-500 to-primary-700 text-white',
    secondary: 'bg-gradient-to-br from-secondary-500 to-secondary-700 text-white',
    success: 'bg-gradient-to-br from-success-500 to-success-700 text-white',
  };

  return (
    <div className={cn(
      "rounded-xl p-6 shadow-soft border border-gray-200",
      variantStyles[variant],
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn(
            "text-sm font-medium",
            variant === 'default' ? 'text-gray-600' : 'text-white/80'
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-bold mt-2",
            variant === 'default' ? 'text-gray-900' : 'text-white'
          )}>
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
                <p className={cn(
                  "text-sm",
                  variant === 'default' ? 'text-gray-500' : 'text-white/70'
                )}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        {Icon && (
          <div className={cn(
            "p-3 rounded-lg",
            variant === 'default' ? 'bg-primary-50' : 'bg-white/10'
          )}>
            <Icon 
              size={24} 
              className={cn(
                variant === 'default' ? 'text-primary-600' : 'text-white'
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;