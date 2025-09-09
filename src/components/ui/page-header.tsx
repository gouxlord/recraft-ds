import * as React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Badge } from './badge';

export type PageHeaderIconColor = 'blue' | 'purple' | 'cyan' | 'indigo' | 'amber' | 'rose' | 'slate' | 'emerald' | 'violet' | 'yellow' | 'green' | 'orange' | 'red' | 'teal' | 'pink';

export interface PageHeaderBadge {
  label: string;
  className?: string;
}

export interface PageHeaderStatusBadge extends PageHeaderBadge {}

export interface PageHeaderAction {
  label: string;
  icon?: any;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
  className?: string;
}

export interface PageHeaderInfoField {
  label: string;
  value: string;
}

export interface PageHeaderInfoSection {
  title: string;
  fields: PageHeaderInfoField[];
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  icon?: any;
  title: string;
  subtitle?: string;
  badges?: PageHeaderBadge[];
  statusBadge?: PageHeaderStatusBadge;
  actions?: PageHeaderAction[];
  infoSections?: PageHeaderInfoSection[];
  iconColor?: PageHeaderIconColor;
}

const PageHeader = ({
  icon: Icon,
  avatar,
  title,
  subtitle,
  badges = [],
  statusBadge,
  actions = [],
  infoSections = [],
  iconColor = 'blue',
  className,
  ...props
}: PageHeaderProps) => {
  const getIconStyles = () => {
    const colorMap: Record<PageHeaderIconColor, string> = {
      blue: 'hr-entity-employee',
      purple: 'bg-primary/10 border-primary/20 text-primary',
      cyan: 'hr-entity-team',
      indigo: 'hr-entity-contract',
      amber: 'hr-entity-training',
      rose: 'bg-destructive/10 border-destructive/20 text-destructive',
      slate: 'bg-muted border-border text-muted-foreground',
      emerald: 'status-success',
      violet: 'hr-entity-mission',
      yellow: 'status-warning',
      // Anciens pour compatibilité
      green: 'status-success',
      orange: 'status-warning',
      red: 'bg-destructive/10 border-destructive/20 text-destructive',
      teal: 'hr-entity-team',
      pink: 'bg-primary/10 border-primary/20 text-primary',
    };
    return colorMap[iconColor] || colorMap.blue;
  };

  return (
    <section className={cn("bg-background border-b border-border", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Icon or Avatar */}
            {(Icon || avatar) && (
              <div className={cn(
                "w-16 h-16 rounded-2xl border flex items-center justify-center flex-shrink-0 overflow-hidden",
                avatar ? "p-0" : getIconStyles()
              )}>
                {avatar ? (
                  <img 
                    src={avatar} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <Icon size={32} weight="duotone" />
                )}
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  {title}
                </h1>
                {statusBadge && (
                  <Badge 
                    variant="outline" 
                    className={statusBadge.className || "status-success border"}
                  >
                    {statusBadge.label}
                  </Badge>
                )}
              </div>
              
              {subtitle && (
                <p className="text-lg text-muted-foreground mb-4">
                  {subtitle}
                </p>
              )}
              
              {/* Tags */}
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {badges.map((badge, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className={badge.className}
                    >
                      {badge.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Actions */}
          {actions.length > 0 && (
            <div className="flex items-center gap-3 flex-shrink-0 ml-6">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size={action.size || "sm"}
                  onClick={action.onClick}
                  className={action.className}
                >
                  {action.icon && <action.icon size={action.label ? 16 : 20} className={action.label ? "mr-2" : ""} />}
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        {/* Sections d'information */}
        {infoSections.length > 0 && (
          <div className={cn(
            "mt-6 pt-6 border-t border-gray-200",
            `grid gap-8`,
            infoSections.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
          )}>
            {infoSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-4">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex}>
                      <p className="text-sm text-gray-500 mb-1">{field.label}:</p>
                      <p className="text-sm font-medium text-gray-900">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;