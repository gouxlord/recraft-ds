import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/table';
import { Warning, Crown, CheckCircle, CircleDashed } from '@phosphor-icons/react';

export interface Skill {
  skillName: string;
  isKey: boolean;
  currentLevel: number;
  targetLevel: number;
  status: number;
}

export interface SkillsHeatmapProps {
  skills?: Skill[];
  className?: string;
  showHeader?: boolean;
  showCard?: boolean;
}

export interface StatusConfig {
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode | null;
  label: string;
}

const SkillsHeatmap = ({ 
  skills = [],
  className,
  showHeader = true,
  showCard = true
}: SkillsHeatmapProps) => {
  const defaultSkills: Skill[] = skills.length > 0 ? skills : [
    { skillName: 'Gestion de projet', isKey: true, currentLevel: 2.7, targetLevel: 4, status: -1.3 },
    { skillName: 'Résolution de problèmes', isKey: true, currentLevel: 2.7, targetLevel: 4, status: -1.3 },
    { skillName: 'Leadership', isKey: true, currentLevel: 3.3, targetLevel: 4, status: -0.7 },
    { skillName: 'Communication', isKey: false, currentLevel: 3.8, targetLevel: 3, status: +0.8 },
    { skillName: 'Présentation', isKey: false, currentLevel: 3.2, targetLevel: 3, status: +0.2 },
    { skillName: 'Analyse de données', isKey: false, currentLevel: 3.5, targetLevel: 4, status: -0.5 },
    { skillName: 'Planification stratégique', isKey: true, currentLevel: 2.9, targetLevel: 4, status: -1.1 },
    { skillName: 'Négociation', isKey: false, currentLevel: 3.0, targetLevel: 3, status: 0.0 }
  ];

  const getStatusConfig = (status: number): StatusConfig => {
    if (status <= -1.0) {
      return {
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
        borderColor: 'border-red-200',
        icon: <Warning size={16} className="text-red-700" weight="duotone" />,
        label: 'CRITIQUE'
      };
    }
    if (status >= -0.9 && status <= -0.1) {
      return {
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-700',
        borderColor: 'border-orange-200',
        icon: <CircleDashed size={16} className="text-orange-700" weight="duotone" />,
        label: 'À AMÉLIORER'
      };
    }
    if (status === 0.0) {
      return {
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        borderColor: 'border-green-200',
        icon: <CheckCircle size={16} className="text-green-700" weight="duotone" />,
        label: 'ACQUIS'
      };
    }
    if (status > 0.0) {
      return {
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        borderColor: 'border-green-200',
        icon: <Crown size={16} className="text-yellow-500" weight="duotone" />,
        label: 'EXPERTISE'
      };
    }
    return {
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700',
      borderColor: 'border-gray-200',
      icon: null,
      label: 'INDÉFINI'
    };
  };

  const formatStatus = (status: number): string => {
    return status > 0 ? `+${status.toFixed(1)}` : status.toFixed(1);
  };

  const content = (
    <>
      {/* Header */}
      {showHeader && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Vue d'ensemble des compétences
          </h3>
          <p className="text-sm text-gray-600">
            Synthèse de toutes les compétences requises pour ce métier (missions et compétences directes confondues)
          </p>
        </div>
      )}

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Compétence
            </TableHead>
            <TableHead className="text-center text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Niveau
            </TableHead>
            <TableHead className="text-center text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Cible
            </TableHead>
            <TableHead className="text-center text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Statut
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {defaultSkills.map((skill, index) => {
            const statusConfig = getStatusConfig(skill.status);
            return (
              <TableRow key={index}>
                {/* Skill Name */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-900">
                      {skill.skillName}
                    </span>
                    {skill.isKey && (
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded"
                      >
                        Clé
                      </Badge>
                    )}
                  </div>
                </TableCell>

                {/* Current Level */}
                <TableCell className="text-center">
                  <span className="text-sm font-semibold text-gray-900">
                    {skill.currentLevel.toFixed(1)}
                  </span>
                </TableCell>

                {/* Target */}
                <TableCell className="text-center">
                  <span className="text-sm font-medium text-gray-600">
                    {skill.targetLevel}
                  </span>
                </TableCell>

                {/* Status */}
                <TableCell className={cn(
                  "text-center",
                  statusConfig.bgColor,
                  statusConfig.textColor,
                  statusConfig.borderColor
                )}>
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    <span className="text-sm font-semibold">{formatStatus(skill.status)}</span>
                    {statusConfig.icon}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-50 border border-red-200 rounded flex items-center justify-center">
              <Warning size={10} className="text-red-700" weight="duotone" />
            </div>
            <span className="text-gray-600">Critique (≤ -1.0)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-50 border border-orange-200 rounded flex items-center justify-center">
              <CircleDashed size={10} className="text-orange-700" weight="duotone" />
            </div>
            <span className="text-gray-600">À améliorer (-0.9 à -0.1)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-50 border border-green-200 rounded flex items-center justify-center">
              <CheckCircle size={10} className="text-green-700" weight="duotone" />
            </div>
            <span className="text-gray-600">Acquis (= 0.0)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-50 border border-green-200 rounded flex items-center justify-center">
              <Crown size={10} className="text-yellow-500" weight="duotone" />
            </div>
            <span className="text-gray-600">Expertise (&gt; 0.0)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              Clé
            </Badge>
            <span className="text-gray-600">Compétence clé du métier</span>
          </div>
        </div>
      </div>

    </>
  );

  return showCard ? (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 shadow-soft p-6",
      className
    )}>
      {content}
    </div>
  ) : (
    <div className={className}>
      {content}
    </div>
  );
};

export default SkillsHeatmap;