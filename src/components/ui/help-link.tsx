import * as React from 'react';
import { cn } from '../../lib/utils';
import { Info } from '@phosphor-icons/react';

export interface HelpLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; weight?: string; className?: string }>;
  variant?: 'default' | 'primary' | 'muted';
}

const HelpLink: React.FC<HelpLinkProps> = ({
  children,
  icon: Icon = Info,
  variant = 'primary',
  className,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'text-primary hover:text-primary/80';
      case 'muted':
        return 'text-muted-foreground hover:text-foreground';
      default:
        return 'text-foreground hover:text-primary';
    }
  };

  return (
    <button 
      className={cn(
        'flex items-center gap-2 text-sm transition-colors',
        getVariantStyles(),
        className
      )}
      {...props}
    >
      <Icon size={14} weight="duotone" />
      <span className="underline">{children}</span>
    </button>
  );
};

export default HelpLink;