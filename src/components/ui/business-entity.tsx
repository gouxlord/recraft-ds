import * as React from 'react';
import { cn } from '../../lib/utils';
import { Badge, type BadgeProps } from './badge';
import { Card, CardContent } from './card';
import type { PhosphorIcon, IconComponent } from '../../types';

// Type for icons
type IconType = PhosphorIcon | IconComponent;

// Business entity configuration type
interface EntityConfig {
  name: string;
  color: string;
  colorCode: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  badgeClass: string;
  semanticClass: string;
}

// Business entities with their configurations
// Avoids heatmap colors: red (critical), orange (improve), green (acquired)
export const BUSINESS_ENTITIES: Record<string, EntityConfig> = {
  employee: {
    name: 'Employé',
    color: 'blue',
    colorCode: '#3B82F6',
    bgClass: 'bg-hr-employee-light',
    textClass: 'text-hr-employee',
    borderClass: 'border-hr-employee-border',
    badgeClass: 'hr-entity-employee',
    semanticClass: 'hr-entity-employee'
  },
  job: {
    name: 'Métier',
    color: 'blue',
    colorCode: '#2563EB',
    bgClass: 'bg-hr-job-light',
    textClass: 'text-hr-job',
    borderClass: 'border-hr-job-border',
    badgeClass: 'hr-entity-job',
    semanticClass: 'hr-entity-job'
  },
  position: {
    name: 'Poste',
    color: 'blue',
    colorCode: '#1D4ED8',
    bgClass: 'bg-hr-position-light',
    textClass: 'text-hr-position',
    borderClass: 'border-hr-position-border',
    badgeClass: 'hr-entity-position',
    semanticClass: 'hr-entity-position'
  },
  contract: {
    name: 'Contrat',
    color: 'indigo',
    colorCode: '#4F46E5',
    bgClass: 'bg-hr-contract-light',
    textClass: 'text-hr-contract',
    borderClass: 'border-hr-contract-border',
    badgeClass: 'hr-entity-contract',
    semanticClass: 'hr-entity-contract'
  },
  training: {
    name: 'Formation',
    color: 'indigo',
    colorCode: '#6366F1',
    bgClass: 'bg-hr-training-light',
    textClass: 'text-hr-training',
    borderClass: 'border-hr-training-border',
    badgeClass: 'hr-entity-training',
    semanticClass: 'hr-entity-training'
  },
  mission: {
    name: 'Mission',
    color: 'indigo',
    colorCode: '#4338CA',
    bgClass: 'bg-hr-mission-light',
    textClass: 'text-hr-mission',
    borderClass: 'border-hr-mission-border',
    badgeClass: 'hr-entity-mission',
    semanticClass: 'hr-entity-mission'
  },
  skill: {
    name: 'Compétence',
    color: 'sky',
    colorCode: '#0EA5E9',
    bgClass: 'bg-hr-skill-light',
    textClass: 'text-hr-skill',
    borderClass: 'border-hr-skill-border',
    badgeClass: 'hr-entity-skill',
    semanticClass: 'hr-entity-skill'
  },
  team: {
    name: 'Équipe',
    color: 'cyan',
    colorCode: '#06B6D4',
    bgClass: 'bg-hr-team-light',
    textClass: 'text-hr-team',
    borderClass: 'border-hr-team-border',
    badgeClass: 'hr-entity-team',
    semanticClass: 'hr-entity-team'
  }
};

// Skill status configuration type
interface SkillStatusConfig {
  name: string;
  colorCode: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  badgeClass: string;
  semanticClass: string;
}

// Skill statuses (heatmap)
export const SKILL_STATUS: Record<string, SkillStatusConfig> = {
  critical: {
    name: 'Critique',
    colorCode: '#B91C1C',
    bgClass: 'bg-skill-critical-light',
    textClass: 'text-skill-critical',
    borderClass: 'border-skill-critical-border',
    badgeClass: 'skill-status-critical',
    semanticClass: 'skill-status-critical'
  },
  improve: {
    name: 'À améliorer',
    colorCode: '#C2410C',
    bgClass: 'bg-skill-improve-light',
    textClass: 'text-skill-improve',
    borderClass: 'border-skill-improve-border',
    badgeClass: 'skill-status-improve',
    semanticClass: 'skill-status-improve'
  },
  acquired: {
    name: 'Acquis',
    colorCode: '#15803D',
    bgClass: 'bg-skill-acquired-light',
    textClass: 'text-skill-acquired',
    borderClass: 'border-skill-acquired-border',
    badgeClass: 'skill-status-acquired',
    semanticClass: 'skill-status-acquired'
  },
  expert: {
    name: 'Expertise',
    colorCode: '#EAB308',
    bgClass: 'bg-skill-expert-light',
    textClass: 'text-skill-expert',
    borderClass: 'border-skill-expert-border',
    badgeClass: 'skill-status-expert',
    semanticClass: 'skill-status-expert'
  }
};

// Business Entity Badge Props
export interface BusinessEntityBadgeProps extends Omit<BadgeProps, 'variant'> {
  entity: keyof typeof BUSINESS_ENTITIES;
  size?: 'sm' | 'md';
  showIcon?: boolean;
  icon?: IconType;
}

// Business Entity Badge
export const BusinessEntityBadge: React.FC<BusinessEntityBadgeProps> = ({ 
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
      className={cn(config.semanticClass, 'border', className)}
      {...props}
    >
      {showIcon && Icon && <Icon size={14} className="mr-1" weight="duotone" />}
      {config.name}
    </Badge>
  );
};

// Business Entity Card Props
export interface BusinessEntityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  entity: keyof typeof BUSINESS_ENTITIES;
  icon?: IconType;
  description?: string;
  showBadge?: boolean;
}

// Business Entity Card
export const BusinessEntityCard: React.FC<BusinessEntityCardProps> = ({ 
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
          <Badge variant="outline" className={cn(config.semanticClass, 'border')}>
            {(Icon as any)?.displayName || (Icon as any)?.name || 'Icon'}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

// Skill Status Badge Props
export interface SkillStatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: keyof typeof SKILL_STATUS;
  icon?: IconType;
}

// Skill Status Badge
export const SkillStatusBadge: React.FC<SkillStatusBadgeProps> = ({ 
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
      className={cn(config.semanticClass, 'border', className)}
      {...props}
    >
      {Icon && <Icon size={14} className="mr-1" weight="duotone" />}
      {config.name}
    </Badge>
  );
};

// Skill Status Card Props
export interface SkillStatusCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: keyof typeof SKILL_STATUS;
  icon?: IconType;
  description?: string;
}

// Skill Status Card
export const SkillStatusCard: React.FC<SkillStatusCardProps> = ({ 
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
        <Badge variant="outline" className={cn(config.semanticClass, 'border')}>
          {(Icon as any)?.displayName || (Icon as any)?.name || 'Icon'}
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