import * as React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from './card';

export interface JobMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ComponentType<{ size?: number; className?: string; weight?: string }>;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}

const JobMetricCard: React.FC<JobMetricCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'primary',
  className,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          iconBg: 'bg-status-success-light border-status-success/20',
          iconColor: 'text-status-success',
          valueColor: 'text-status-success'
        };
      case 'warning':
        return {
          iconBg: 'bg-status-warning-light border-status-warning/20',
          iconColor: 'text-status-warning',
          valueColor: 'text-status-warning'
        };
      case 'error':
        return {
          iconBg: 'bg-destructive/10 border-destructive/20',
          iconColor: 'text-destructive',
          valueColor: 'text-destructive'
        };
      case 'info':
        return {
          iconBg: 'bg-hr-skill-light border-hr-skill-border',
          iconColor: 'text-hr-skill',
          valueColor: 'text-hr-skill'
        };
      default:
        return {
          iconBg: 'bg-primary/10 border-primary/20',
          iconColor: 'text-primary',
          valueColor: 'text-primary'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Card className={cn('text-center', className)} {...props}>
      <CardContent className="p-4">
        {/* Icon */}
        {Icon && (
          <div className="mx-auto mb-3 flex items-center justify-center">
            <Icon 
              size={32} 
              weight="duotone" 
              className={title === 'Niveau mentor' ? 'text-status-warning' : styles.iconColor} 
            />
          </div>
        )}
        
        {/* Value */}
        <div className={cn('text-2xl font-bold mb-1', styles.valueColor)}>
          {value}
        </div>
        
        {/* Title */}
        <h4 className="font-medium text-foreground text-xs mb-1">
          {title}
        </h4>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-muted-foreground">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default JobMetricCard;