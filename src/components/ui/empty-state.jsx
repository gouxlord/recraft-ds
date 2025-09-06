import React from 'react';
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

const EmptyState = ({ 
  variant = 'default',
  title,
  description,
  action,
  className,
  children,
  ...props 
}) => {
  const getIllustration = () => {
    const iconProps = { size: 64, className: "text-gray-300" };
    
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
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
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
      <div className="mb-6 p-6 bg-gray-50 rounded-full">
        {getIllustration()}
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-6">
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
export const EmptyEmployees = ({ onAddEmployee }) => (
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

export const EmptyTraining = ({ onCreateTraining }) => (
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

export const EmptySearchResults = ({ query, onClearSearch }) => (
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

export const EmptyGoals = ({ onSetGoals }) => (
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