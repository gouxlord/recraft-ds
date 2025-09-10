import * as React from 'react';
import { cn } from '../../lib/utils';
import { Eye } from '@phosphor-icons/react';

export type CompetenceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'master';

export interface CompetenceMiniCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  score: number;
  level?: CompetenceLevel;
  onViewDetails?: () => void;
}

const CompetenceMiniCard: React.FC<CompetenceMiniCardProps> = ({
  name,
  score,
  level = 'intermediate',
  onViewDetails,
  className,
  ...props
}) => {
  const getLevelBorderStyle = () => {
    if (score >= 4.0) return { borderLeftColor: 'hsl(var(--status-success))' };
    if (score >= 3.5) return { borderLeftColor: 'hsl(var(--status-warning))' };
    if (score >= 2.5) return { borderLeftColor: 'hsl(var(--hr-skill))' };
    return { borderLeftColor: 'hsl(var(--destructive))' };
  };

  return (
    <div
      className={cn(
        'relative bg-background border border-border rounded-lg p-3 hover:shadow-md transition-all duration-200 cursor-pointer',
        'border-l-8',
        className
      )}
      style={getLevelBorderStyle()}
      onClick={onViewDetails}
      {...props}
    >
      <div className="flex items-center justify-between">
        {/* Competence name */}
        <div className="flex-1 min-w-0 pr-3">
          <h4 className="font-medium text-foreground text-sm truncate">
            {name}
          </h4>
        </div>
        
        {/* Score + Eye icon */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-lg font-bold text-foreground">
            {score.toFixed(1)}
          </span>
          
          {/* Eye icon for details */}
          <button 
            className="p-1 rounded-md hover:bg-muted transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.();
            }}
          >
            <Eye size={14} className="text-muted-foreground hover:text-foreground transition-colors" weight="duotone" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetenceMiniCard;