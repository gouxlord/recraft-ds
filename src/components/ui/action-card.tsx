import * as React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';
import { Button } from './button';
import { Progress } from './progress';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Calendar,
  Star,
  BookOpen,
  Target,
  ArrowRight
} from '@phosphor-icons/react';

export type ActionCardType = 'training' | 'mentoring' | 'reading' | 'goal';
export type ActionCardStatus = 'available' | 'in_progress' | 'completed' | 'overdue';

export interface ActionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ActionCardType;
  title: string;
  description?: string;
  category?: string;
  duration?: string;
  participants?: number;
  rating?: number;
  progress?: number;
  status?: ActionCardStatus;
  dueDate?: string;
  onAction?: () => void;
  actionLabel?: string;
}

const ActionCard = ({ 
  type = 'training',
  title,
  description,
  category,
  duration,
  participants,
  rating,
  progress,
  status = 'available',
  dueDate,
  onAction,
  actionLabel = 'Commencer',
  className,
  ...props 
}: ActionCardProps) => {
  const getTypeIcon = () => {
    const iconProps = { size: 20, weight: 'fill' as const };
    switch (type) {
      case 'training':
        return <GraduationCap {...iconProps} className="text-primary-600" />;
      case 'mentoring':
        return <Users {...iconProps} className="text-secondary-600" />;
      case 'reading':
        return <BookOpen {...iconProps} className="text-success-600" />;
      case 'goal':
        return <Target {...iconProps} className="text-warning-600" />;
      default:
        return <GraduationCap {...iconProps} className="text-primary-600" />;
    }
  };

  const getStatusBadge = () => {
    const variants = {
      available: { variant: 'default' as const, label: 'Disponible' },
      in_progress: { variant: 'warning' as const, label: 'En cours' },
      completed: { variant: 'success' as const, label: 'Terminé' },
      overdue: { variant: 'destructive' as const, label: 'En retard' }
    };
    
    const statusConfig = variants[status] || variants.available;
    return <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>;
  };

  const getCategoryColor = () => {
    const colors: Record<string, string> = {
      'Technique': 'bg-blue-50 text-blue-700',
      'Management': 'bg-purple-50 text-purple-700',
      'Communication': 'bg-green-50 text-green-700',
      'Métier': 'bg-orange-50 text-orange-700'
    };
    return colors[category || ''] || 'bg-gray-50 text-gray-700';
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 shadow-soft hover-lift transition-all duration-300 group',
        className
      )}
      {...props}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
              {getTypeIcon()}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
              {category && (
                <Badge variant="outline" className={cn('mt-1', getCategoryColor())}>
                  {category}
                </Badge>
              )}
            </div>
          </div>
          {getStatusBadge()}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Progress */}
        {typeof progress === 'number' && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progression</span>
              <span className="text-sm font-medium text-gray-900">{progress}%</span>
            </div>
            <Progress value={progress} variant="default" />
          </div>
        )}

        {/* Metadata */}
        <div className="space-y-2 mb-4">
          {duration && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          )}
          
          {participants && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={14} />
              <span>{participants} participant{participants > 1 ? 's' : ''}</span>
            </div>
          )}
          
          {rating && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star size={14} weight="fill" className="text-warning-500" />
              <span>{rating}/5</span>
            </div>
          )}
          
          {dueDate && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={14} />
              <span>Échéance: {dueDate}</span>
            </div>
          )}
        </div>

        {/* Action */}
        <Button 
          onClick={onAction}
          className="w-full gap-2 group/btn"
          variant={status === 'completed' ? 'outline' : 'default'}
        >
          {actionLabel}
          <ArrowRight 
            size={16} 
            className="group-hover/btn:translate-x-1 transition-transform" 
          />
        </Button>
      </div>
    </div>
  );
};

// Composants prédéfinis pour différents types d'actions
export const TrainingCard = (props: Omit<ActionCardProps, 'type'>) => (
  <ActionCard 
    type="training" 
    actionLabel="Commencer la formation"
    {...props} 
  />
);

export const MentoringCard = (props: Omit<ActionCardProps, 'type'>) => (
  <ActionCard 
    type="mentoring" 
    actionLabel="Planifier une session"
    {...props} 
  />
);

export const ReadingCard = (props: Omit<ActionCardProps, 'type'>) => (
  <ActionCard 
    type="reading" 
    actionLabel="Lire l'article"
    {...props} 
  />
);

export const GoalCard = (props: Omit<ActionCardProps, 'type'>) => (
  <ActionCard 
    type="goal" 
    actionLabel="Voir l'objectif"
    {...props} 
  />
);

export default ActionCard;