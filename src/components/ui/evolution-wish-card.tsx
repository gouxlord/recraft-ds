import * as React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Eye, Trash } from '@phosphor-icons/react';

export interface EvolutionWishCardProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number;
  jobTitle: string;
  echelon: string;
  seniority: string;
  department: string;
  onView?: () => void;
  onDelete?: () => void;
}

const EvolutionWishCard: React.FC<EvolutionWishCardProps> = ({
  percentage,
  jobTitle,
  echelon,
  seniority,
  department,
  onView,
  onDelete,
  className,
  ...props
}) => {
  const getPercentageColor = () => {
    if (percentage >= 70) return 'text-status-success';
    if (percentage >= 50) return 'text-status-warning';
    return 'text-destructive';
  };

  return (
    <Card className={cn('hover-lift transition-all duration-200', className)} {...props}>
      <CardContent className="p-6">
        {/* Header avec badge et actions */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            Poste ouvert
          </Badge>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={onView}
            >
              <Eye size={16} weight="duotone" className="text-muted-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={onDelete}
            >
              <Trash size={16} weight="duotone" className="text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Pourcentage proéminent */}
        <div className={cn('text-4xl font-bold mb-3', getPercentageColor())}>
          {percentage} %
        </div>

        {/* Titre du poste */}
        <h3 className="font-semibold text-foreground text-lg mb-4">
          {jobTitle}
        </h3>

        {/* Informations métier - Tableau invisible */}
        <div className="text-sm">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-muted-foreground py-1 pr-2 align-top">Échelon :</td>
                <td className="font-medium text-foreground py-1">{echelon}</td>
              </tr>
              <tr>
                <td className="text-muted-foreground py-1 pr-2 align-top">Ancienneté :</td>
                <td className="font-medium text-foreground py-1">{seniority}</td>
              </tr>
              <tr>
                <td className="text-muted-foreground py-1 pr-2 align-top">Domaine :</td>
                <td className="font-medium text-foreground py-1">{department}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default EvolutionWishCard;