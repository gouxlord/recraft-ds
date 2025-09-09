import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';
import {
  Briefcase,
  GraduationCap,
  Certificate,
  Trophy,
  ArrowUp,
  Calendar
} from '@phosphor-icons/react';

export type CareerEventType = 'position' | 'achievement' | 'certification' | 'training';
export type CareerEventColor = 'primary' | 'secondary' | 'success' | 'warning';

export interface CareerEvent {
  id: number;
  type: CareerEventType;
  title: string;
  description: string;
  date: string;
  icon: React.ComponentType<any>;
  color: CareerEventColor;
}

export interface CareerTimelineProps {
  events?: CareerEvent[];
  className?: string;
}

const CareerTimeline = ({ 
  events = [],
  className 
}: CareerTimelineProps) => {
  const defaultEvents: CareerEvent[] = events.length > 0 ? events : [
    {
      id: 1,
      type: 'position',
      title: 'Senior Developer',
      description: 'Promotion au poste de Senior Developer',
      date: 'Janvier 2024',
      icon: ArrowUp,
      color: 'primary'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Projet de l\'année',
      description: 'Récompense pour la refonte du système RH',
      date: 'Décembre 2023',
      icon: Trophy,
      color: 'warning'
    },
    {
      id: 3,
      type: 'certification',
      title: 'Certification AWS',
      description: 'Obtention de la certification AWS Solutions Architect',
      date: 'Septembre 2023',
      icon: Certificate,
      color: 'success'
    },
    {
      id: 4,
      type: 'training',
      title: 'Formation Leadership',
      description: 'Programme de développement du leadership - 6 mois',
      date: 'Juin 2023',
      icon: GraduationCap,
      color: 'secondary'
    },
    {
      id: 5,
      type: 'position',
      title: 'Developer',
      description: 'Début en tant que Developer Full Stack',
      date: 'Janvier 2022',
      icon: Briefcase,
      color: 'primary'
    }
  ];

  const getIconColor = (color: CareerEventColor): string => {
    const colors: Record<CareerEventColor, string> = {
      primary: 'bg-primary-50 text-primary-600',
      secondary: 'bg-secondary-50 text-secondary-600',
      success: 'bg-success-50 text-success-600',
      warning: 'bg-warning-50 text-warning-600'
    };
    return colors[color] || colors.primary;
  };

  const getLineColor = (color: CareerEventColor): string => {
    const colors: Record<CareerEventColor, string> = {
      primary: 'bg-primary-200',
      secondary: 'bg-secondary-200',
      success: 'bg-success-200',
      warning: 'bg-warning-200'
    };
    return colors[color] || colors.primary;
  };

  const getEventLabel = (type: CareerEventType): string => {
    const labels: Record<CareerEventType, string> = {
      position: 'Poste',
      achievement: 'Réalisation',
      certification: 'Certification',
      training: 'Formation'
    };
    return labels[type] || type;
  };

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 shadow-soft p-6",
      className
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-50 rounded-lg">
          <Briefcase size={24} className="text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Parcours professionnel</h3>
          <p className="text-sm text-gray-500">Historique de carrière et réalisations</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {defaultEvents.map((event, index) => {
          const Icon = event.icon;
          const isLast = index === defaultEvents.length - 1;
          
          return (
            <div key={event.id} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Line */}
              {!isLast && (
                <div 
                  className={cn(
                    "absolute left-5 top-10 w-0.5 h-full -mb-8",
                    getLineColor(event.color)
                  )}
                />
              )}
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  getIconColor(event.color)
                )}>
                  <Icon size={20} weight="bold" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 -mt-1">
                <div className="bg-gray-50 rounded-lg p-4 hover:shadow-soft transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {getEventLabel(event.type)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="text-sm text-primary-600 font-medium hover:text-primary-700">
          Voir l'historique complet →
        </button>
      </div>
    </div>
  );
};

export default CareerTimeline;