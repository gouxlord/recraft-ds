import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import {
  Envelope,
  Phone,
  MapPin,
  Calendar
} from '@phosphor-icons/react';

export type EmployeeStatus = 'active' | 'leave' | 'inactive';

export interface EmployeeData {
  name?: string;
  role?: string;
  department?: string;
  email?: string;
  phone?: string;
  location?: string;
  joinDate?: string;
  avatar?: string;
  skills?: string[];
  performance?: number;
  status?: EmployeeStatus;
}

export interface EmployeeProfileCardProps {
  employee?: EmployeeData;
  showFullDetails?: boolean;
  className?: string;
}

const EmployeeProfileCard = ({ 
  employee,
  showFullDetails = false,
  className 
}: EmployeeProfileCardProps) => {
  const {
    name = "John Doe",
    role = "Développeur Full Stack",
    department = "Tech",
    email = "john.doe@company.com",
    phone = "+33 6 12 34 56 78",
    location = "Paris, France",
    joinDate = "Janvier 2022",
    avatar,
    skills = [],
    performance = 85,
    status = "active"
  } = employee || {};

  const getStatusBadge = () => {
    const statusVariants: Record<EmployeeStatus, { variant: 'success' | 'warning' | 'destructive', label: string }> = {
      active: { variant: "success", label: "Actif" },
      leave: { variant: "warning", label: "En congé" },
      inactive: { variant: "destructive", label: "Inactif" }
    };
    
    const statusConfig = statusVariants[status] || statusVariants.active;
    return <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>;
  };

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 shadow-soft overflow-hidden",
      className
    )}>
      {/* Header avec gradient */}
      <div className="h-32 bg-gradient-to-br from-primary-500 to-primary-700"></div>
      
      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="relative -mt-16 mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-medium overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <div className="absolute bottom-2 right-2">
            {getStatusBadge()}
          </div>
        </div>

        {/* Basic Info */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-lg text-gray-600 mb-2">{role}</p>
          <Badge variant="outline">{department}</Badge>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Envelope size={18} className="text-gray-400" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone size={18} className="text-gray-400" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin size={18} className="text-gray-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar size={18} className="text-gray-400" />
            <span>Depuis {joinDate}</span>
          </div>
        </div>

        {showFullDetails && (
          <>
            {/* Performance */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Performance</span>
                <span className="text-sm text-gray-500">{performance}%</span>
              </div>
              <Progress value={performance} variant="success" size="default" />
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Compétences clés</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium">
            Voir le profil
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            Envoyer un message
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileCard;