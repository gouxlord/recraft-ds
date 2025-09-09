import * as React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from './card';

export interface JobDescriptionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  jobTitle: string;
  echelon: string;
  seniority: string;
  department: string;
  variant?: 'primary' | 'secondary' | 'skill' | 'employee';
}

const JobDescriptionCard: React.FC<JobDescriptionCardProps> = ({
  jobTitle,
  echelon,
  seniority,
  department,
  variant = 'primary',
  className,
  ...props
}) => {
  const getVariantBorder = () => {
    switch (variant) {
      case 'skill':
        return 'border-l-hr-skill';
      case 'employee':
        return 'border-l-hr-employee';
      case 'secondary':
        return 'border-l-secondary';
      default:
        return 'border-l-primary';
    }
  };

  return (
    <Card 
      className={cn(
        'border-l-4',
        getVariantBorder(),
        className
      )}
      {...props}
    >
      <CardContent className="p-4">
        {/* Job Title */}
        <h3 className="font-semibold text-foreground text-base mb-3">
          {jobTitle}
        </h3>
        
        {/* Job Details - Tableau invisible */}
        <div className="text-xs">
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

export default JobDescriptionCard;