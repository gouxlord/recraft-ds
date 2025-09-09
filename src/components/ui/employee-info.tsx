import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Eye } from '@phosphor-icons/react';

export interface EmployeeInfoField {
  label: string;
  value: string;
}

export interface EmployeeInfoSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  fields: EmployeeInfoField[];
}

export interface OrganizationData {
  team?: string;
  manager?: string;
  seniority?: string;
}

export interface ContractData {
  position?: string;
  contractType?: string;
  period?: string;
}

export interface ContactData {
  email?: string;
  location?: string;
  phone?: string;
}

export interface CompatibilityData {
  title?: string;
  hasTooltip?: boolean;
}

export interface EmployeeInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  organization?: OrganizationData;
  contract?: ContractData;
  contact?: ContactData;
  compatibility?: CompatibilityData;
  onViewJobProfile?: () => void;
}

const EmployeeInfoSection = ({ title, fields, className, ...props }: EmployeeInfoSectionProps) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <h3 className="font-bold text-sm text-foreground uppercase tracking-wide">
        {title}
      </h3>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            <p className="text-sm text-muted-foreground mb-1">{field.label}:</p>
            <p className="text-sm font-medium text-foreground">{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EmployeeInfo = ({ 
  organization,
  contract,
  contact,
  compatibility,
  onViewJobProfile,
  className,
  ...props 
}: EmployeeInfoProps) => {
  const defaultOrganization: OrganizationData = {
    team: 'HR & Administration',
    manager: 'Sophie Michel',
    seniority: '5 ans / 5 ans'
  };

  const defaultContract: ContractData = {
    position: 'HR Manager',
    contractType: 'CDI',
    period: '15/03/2020 - En cours'
  };

  const defaultContact: ContactData = {
    email: 'muriel.lecouey@techconsult.com',
    location: 'Paris',
    phone: '+33 1 XX XX XX XX'
  };

  const defaultCompatibility: CompatibilityData = {
    title: 'Compatibilité métier actuel',
    hasTooltip: true
  };

  const orgData = { ...defaultOrganization, ...organization };
  const contractData = { ...defaultContract, ...contract };
  const contactData = { ...defaultContact, ...contact };
  const compatibilityData = { ...defaultCompatibility, ...compatibility };

  const organizationFields: EmployeeInfoField[] = [
    { label: 'Équipe', value: orgData.team || '' },
    { label: 'Manager', value: orgData.manager || '' },
    { label: 'Ancienneté (Entreprise/Poste)', value: orgData.seniority || '' }
  ];

  const contractFields: EmployeeInfoField[] = [
    { label: 'Poste', value: contractData.position || '' },
    { label: 'Type de contrat', value: contractData.contractType || '' },
    { label: 'Période', value: contractData.period || '' }
  ];

  const contactFields: EmployeeInfoField[] = [
    { label: 'Email', value: contactData.email || '' },
    { label: 'Lieu', value: contactData.location || '' },
    { label: 'Téléphone Pro', value: contactData.phone || '' }
  ];

  return (
    <div className={cn("bg-background p-6 space-y-8", className)} {...props}>
      {/* Sections principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EmployeeInfoSection 
          title="ORGANISATION"
          fields={organizationFields}
        />
        <EmployeeInfoSection 
          title="CONTRAT"
          fields={contractFields}
        />
        <EmployeeInfoSection 
          title="CONTACT"
          fields={contactFields}
        />
      </div>

      {/* Section compatibilité */}
      <div className="pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              {compatibilityData.title}
            </h3>
            {compatibilityData.hasTooltip && (
              <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">?</span>
              </div>
            )}
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onViewJobProfile}
            className="flex items-center gap-2"
          >
            <Eye size={16} weight="duotone" />
            Voir la fiche métier
          </Button>
        </div>
      </div>
    </div>
  );
};

export { EmployeeInfo, EmployeeInfoSection };
export default EmployeeInfo;