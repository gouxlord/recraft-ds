import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Badge } from './badge';

const PageHeader = ({
  icon: Icon,
  title,
  subtitle,
  badges = [],
  statusBadge,
  actions = [],
  infoSections = [],
  iconColor = 'blue',
  className,
  ...props
}) => {
  const getIconStyles = () => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      cyan: 'bg-cyan-50 border-cyan-200 text-cyan-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      amber: 'bg-amber-50 border-amber-200 text-amber-600',
      rose: 'bg-rose-50 border-rose-200 text-rose-600',
      slate: 'bg-slate-50 border-slate-200 text-slate-600',
      emerald: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      violet: 'bg-violet-50 border-violet-200 text-violet-600',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
      // Anciens pour compatibilité
      green: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      orange: 'bg-amber-50 border-amber-200 text-amber-600',
      red: 'bg-rose-50 border-rose-200 text-rose-600',
      teal: 'bg-cyan-50 border-cyan-200 text-cyan-600',
      pink: 'bg-violet-50 border-violet-200 text-violet-600',
    };
    return colorMap[iconColor] || colorMap.blue;
  };

  return (
    <section className={cn("bg-white border-b border-gray-200", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Icon */}
            {Icon && (
              <div className={cn(
                "w-16 h-16 rounded-2xl border flex items-center justify-center flex-shrink-0",
                getIconStyles()
              )}>
                <Icon size={32} weight="duotone" />
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  {title}
                </h1>
                {statusBadge && (
                  <Badge 
                    variant="outline" 
                    className={statusBadge.className || "bg-green-50 text-green-700 border-green-200"}
                  >
                    {statusBadge.label}
                  </Badge>
                )}
              </div>
              
              {subtitle && (
                <p className="text-lg text-gray-600 mb-4">
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
                  {action.icon && <action.icon size={16} className="mr-2" />}
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