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
    primary: 'bg-white',
    secondary: 'bg-white', 
    success: 'bg-white',
  };

  const getVariantAccent = () => {
    switch(variant) {
      case 'primary':
        return 'border-l-primary-500';
      case 'secondary':
        return 'border-l-secondary-500';
      case 'success':
        return 'border-l-success-500';
      default:
        return 'border-l-gray-300';
    }
  };

  const getIconStyles = () => {
    switch(variant) {
      case 'primary':
        return { bg: 'bg-primary-50', color: 'text-primary-600' };
      case 'secondary':
        return { bg: 'bg-secondary-50', color: 'text-secondary-600' };
      case 'success':
        return { bg: 'bg-success-50', color: 'text-success-600' };
      default:
        return { bg: 'bg-gray-50', color: 'text-gray-600' };
    }
  };

  const iconStyles = getIconStyles();

  return (
    <div className={cn(
      "rounded-xl p-6 shadow-soft border border-gray-200 border-l-4 hover:shadow-medium transition-shadow bg-white",
      getVariantAccent(),
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2 text-gray-900">
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
                <p className="text-sm text-gray-500">
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