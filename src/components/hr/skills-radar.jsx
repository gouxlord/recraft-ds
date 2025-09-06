import React from 'react';
import { cn } from '../../lib/utils';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Target, TrendUp, Star } from '@phosphor-icons/react';

const SkillsRadar = ({ 
  skills = [],
  showTarget = true,
  className 
}) => {
  const defaultSkills = skills.length > 0 ? skills : [
    { name: 'Communication', current: 85, target: 90, category: 'soft' },
    { name: 'Leadership', current: 70, target: 85, category: 'soft' },
    { name: 'React', current: 90, target: 95, category: 'technical' },
    { name: 'Node.js', current: 75, target: 85, category: 'technical' },
    { name: 'Gestion de projet', current: 65, target: 80, category: 'management' },
    { name: 'Analyse de données', current: 80, target: 85, category: 'technical' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      soft: 'primary',
      technical: 'secondary',
      management: 'success'
    };
    return colors[category] || 'default';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      soft: 'Soft Skills',
      technical: 'Technique',
      management: 'Management'
    };
    return labels[category] || category;
  };

  const getProgressVariant = (current, target) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return 'success';
    if (percentage >= 70) return 'warning';
    return 'default';
  };

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 shadow-soft p-6",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-50 rounded-lg">
            <Target size={24} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Compétences</h3>
            <p className="text-sm text-gray-500">Vue d'ensemble des compétences</p>
          </div>
        </div>
        {showTarget && (
          <Badge variant="outline" className="gap-1">
            <TrendUp size={14} />
            Objectifs définis
          </Badge>
        )}
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {defaultSkills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                <Badge variant={getCategoryColor(skill.category)} className="text-xs">
                  {getCategoryLabel(skill.category)}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">{skill.current}%</span>
                {showTarget && (
                  <>
                    <span className="text-gray-400">→</span>
                    <span className="text-primary-600 font-medium">{skill.target}%</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="relative">
              <Progress 
                value={skill.current} 
                max={100}
                variant={getProgressVariant(skill.current, skill.target)}
                size="default"
              />
              {showTarget && (
                <div 
                  className="absolute top-0 h-full w-0.5 bg-primary-600"
                  style={{ left: `${skill.target}%` }}
                >
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
              )}
            </div>
            
            {/* Gap Analysis */}
            {showTarget && skill.current < skill.target && (
              <p className="text-xs text-gray-500">
                Écart: {skill.target - skill.current} points
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(defaultSkills.reduce((acc, s) => acc + s.current, 0) / defaultSkills.length)}%
            </p>
            <p className="text-xs text-gray-500">Score moyen</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-600">
              {defaultSkills.filter(s => s.current >= s.target).length}
            </p>
            <p className="text-xs text-gray-500">Objectifs atteints</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary-600">
              {defaultSkills.filter(s => s.current >= 80).length}
            </p>
            <p className="text-xs text-gray-500">Maîtrisées</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsRadar;