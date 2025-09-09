import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { 
  Users, 
  FolderOpen, 
  MagnifyingGlass,
  Target,
  GraduationCap,
  ChartBar
} from '@phosphor-icons/react';

export type EmptyStateVariant = 'default' | 'employees' | 'files' | 'search' | 'goals' | 'training' | 'analytics';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: EmptyStateVariant;
  title?: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
}

export interface EmptyEmployeesProps {
  onAddEmployee?: () => void;
}

export interface EmptyTrainingProps {
  onCreateTraining?: () => void;
}

export interface EmptySearchResultsProps {
  query?: string;
  onClearSearch?: () => void;
}

export interface EmptyGoalsProps {
  onSetGoals?: () => void;
}

const EmptyState = ({ 
  variant = 'default',
  title,
  description,
  action,
  className,
  children,
  ...props 
}: EmptyStateProps) => {
  const getIllustration = () => {
    const iconProps = { size: 64, className: "text-muted-foreground/50", weight: "duotone" as const };
    
    switch (variant) {
      case 'employees':
        return <Users {...iconProps} />;
      case 'files':
        return <FolderOpen {...iconProps} />;
      case 'search':
        return <MagnifyingGlass {...iconProps} />;
      case 'goals':
        return <Target {...iconProps} />;
      case 'training':
        return <GraduationCap {...iconProps} />;
      case 'analytics':
        return <ChartBar {...iconProps} />;
      default:
        return (
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <span className="text-2xl">📋</span>
          </div>
        );
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-12 px-6 animate-fade-in',
        className
      )}
      {...props}
    >
      {/* Illustration */}
      <div className="mb-6 p-6 bg-muted/50 rounded-full">
        {getIllustration()}
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto">
        {title && (
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
        )}

        {action && (
          <div className="space-y-3">
            {action}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

// Composants pré-configurés pour différents cas d'usage
export const EmptyEmployees = ({ onAddEmployee }: EmptyEmployeesProps) => (
  <EmptyState
    variant="employees"
    title="Aucun employé"
    description="Commencez par ajouter vos premiers employés pour gérer votre équipe."
    action={
      <Button onClick={onAddEmployee} className="gap-2">
        <Users size={16} />
        Ajouter un employé
      </Button>
    }
  />
);

export const EmptyTraining = ({ onCreateTraining }: EmptyTrainingProps) => (
  <EmptyState
    variant="training"
    title="Aucune formation"
    description="Créez des programmes de formation pour développer les compétences de votre équipe."
    action={
      <Button onClick={onCreateTraining} className="gap-2">
        <GraduationCap size={16} />
        Créer une formation
      </Button>
    }
  />
);

export const EmptySearchResults = ({ query, onClearSearch }: EmptySearchResultsProps) => (
  <EmptyState
    variant="search"
    title={`Aucun résultat pour "${query}"`}
    description="Essayez de modifier votre recherche ou d'utiliser des termes différents."
    action={
      <div className="space-y-2">
        <Button variant="outline" onClick={onClearSearch}>
          Effacer la recherche
        </Button>
      </div>
    }
  />
);

export const EmptyGoals = ({ onSetGoals }: EmptyGoalsProps) => (
  <EmptyState
    variant="goals"
    title="Aucun objectif défini"
    description="Définissez des objectifs clairs pour suivre le développement professionnel."
    action={
      <Button onClick={onSetGoals} className="gap-2">
        <Target size={16} />
        Définir des objectifs
      </Button>
    }
  />
);

export default EmptyState;