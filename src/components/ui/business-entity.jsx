import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';
import { Card, CardContent } from './card';

// Entités métier avec leurs configurations
// Évite les couleurs de la heatmap: rouge (critique), orange (améliorer), vert (acquis)
export const BUSINESS_ENTITIES = {
  employee: {
    name: 'Employé',
    color: 'blue',
    colorCode: '#3B82F6',
    bgClass: 'bg-blue-50',
    textClass: 'text-blue-600',
    borderClass: 'border-blue-200',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  job: {
    name: 'Métier',
    color: 'purple',
    colorCode: '#9333EA',
    bgClass: 'bg-purple-50',
    textClass: 'text-purple-600',
    borderClass: 'border-purple-200',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  position: {
    name: 'Poste',
    color: 'cyan',
    colorCode: '#0891B2',
    bgClass: 'bg-cyan-50',
    textClass: 'text-cyan-600',
    borderClass: 'border-cyan-200',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  contract: {
    name: 'Contrat',
    color: 'indigo',
    colorCode: '#4F46E5',
    bgClass: 'bg-indigo-50',
    textClass: 'text-indigo-600',
    borderClass: 'border-indigo-200',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  training: {
    name: 'Formation',
    color: 'amber',
    colorCode: '#F59E0B',
    bgClass: 'bg-amber-50',
    textClass: 'text-amber-600',
    borderClass: 'border-amber-200',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  mission: {
    name: 'Mission',
    color: 'slate',
    colorCode: '#475569',
    bgClass: 'bg-slate-50',
    textClass: 'text-slate-600',
    borderClass: 'border-slate-200',
    badgeClass: 'bg-slate-50 text-slate-700 border-slate-200'
  },
  skill: {
    name: 'Compétence',
    color: 'emerald',
    colorCode: '#059669',
    bgClass: 'bg-emerald-50',
    textClass: 'text-emerald-600',
    borderClass: 'border-emerald-200',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  team: {
    name: 'Équipe',
    color: 'violet',
    colorCode: '#8B5CF6',
    bgClass: 'bg-violet-50',
    textClass: 'text-violet-600',
    borderClass: 'border-violet-200',
    badgeClass: 'bg-violet-50 text-violet-700 border-violet-200'
  }
};

// Statuts de compétences (heatmap)
export const SKILL_STATUS = {
  critical: {
    name: 'Critique',
    colorCode: '#B91C1C',
    bgClass: 'bg-red-50',
    textClass: 'text-red-700',
    borderClass: 'border-red-200',
    badgeClass: 'bg-red-50 text-red-700 border-red-200'
  },
  improve: {
    name: 'À améliorer',
    colorCode: '#C2410C',
    bgClass: 'bg-orange-50',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-200',
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200'
  },
  acquired: {
    name: 'Acquis',
    colorCode: '#15803D',
    bgClass: 'bg-green-50',
    textClass: 'text-green-700',
    borderClass: 'border-green-200',
    badgeClass: 'bg-green-50 text-green-700 border-green-200'
  },
  expert: {
    name: 'Expertise',
    colorCode: '#EAB308', // Couronne dorée
    bgClass: 'bg-green-50', // Fond vert
    textClass: 'text-green-700',
    borderClass: 'border-green-200',
    badgeClass: 'bg-yellow-50 text-yellow-700 border-yellow-200'
  }
};

// Badge entité métier
export const BusinessEntityBadge = ({ 
  entity, 
  size = 'sm', 
  showIcon = false,
  icon: Icon,
  className,
  ...props 
}) => {
  if (!BUSINESS_ENTITIES[entity]) return null;
  
  const config = BUSINESS_ENTITIES[entity];
  
  return (
    <Badge 
      variant="secondary" 
      className={cn(config.badgeClass, className)}
      {...props}
    >
      {showIcon && Icon && <Icon size={14} className="mr-1" weight="duotone" />}
      {config.name}
    </Badge>
  );
};

// Card entité métier
export const BusinessEntityCard = ({ 
  entity,
  icon: Icon,
  description,
  showBadge = true,
  className,
  ...props 
}) => {
  if (!BUSINESS_ENTITIES[entity]) return null;
  
  const config = BUSINESS_ENTITIES[entity];
  
  return (
    <Card className={cn("hover-lift text-center", className)} {...props}>
      <CardContent className="p-6">
        <div className={cn(
          "w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center",
          config.bgClass
        )}>
          {Icon && <Icon size={24} className={config.textClass} weight="duotone" />}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{config.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{config.colorCode}</p>
        {description && (
          <p className="text-xs text-gray-600 mb-3">{description}</p>
        )}
        {showBadge && (
          <Badge variant="outline" className={config.badgeClass}>
            {Icon?.displayName || Icon?.name || 'Icon'}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

// Badge statut de compétence
export const SkillStatusBadge = ({ 
  status, 
  icon: Icon,
  className,
  ...props 
}) => {
  if (!SKILL_STATUS[status]) return null;
  
  const config = SKILL_STATUS[status];
  
  return (
    <Badge 
      variant="outline" 
      className={cn(config.badgeClass, className)}
      {...props}
    >
      {Icon && <Icon size={14} className="mr-1" weight="duotone" />}
      {config.name}
    </Badge>
  );
};

// Card statut de compétence
export const SkillStatusCard = ({ 
  status,
  icon: Icon,
  description,
  className,
  ...props 
}) => {
  if (!SKILL_STATUS[status]) return null;
  
  const config = SKILL_STATUS[status];
  
  return (
    <Card className={cn("hover-lift text-center", className)} {...props}>
      <CardContent className="p-6">
        <div className={cn(
          "w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center",
          config.bgClass,
          config.borderClass,
          "border"
        )}>
          {Icon && <Icon size={24} className={config.textClass} weight="duotone" />}
        </div>
        <h3 className={cn("font-semibold mb-2", config.textClass)}>{config.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{config.colorCode}</p>
        {description && (
          <p className="text-xs text-gray-600 mb-3">{description}</p>
        )}
        <Badge variant="outline" className={config.badgeClass}>
          {Icon?.displayName || Icon?.name || 'Icon'}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default {
  BUSINESS_ENTITIES,
  SKILL_STATUS,
  BusinessEntityBadge,
  BusinessEntityCard,
  SkillStatusBadge,
  SkillStatusCard
};