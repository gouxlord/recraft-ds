import React from 'react';
import { cn } from '../../lib/utils';

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

export interface RadioGroupItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange'> {
  value: string;
  checked?: boolean;
  onCheckedChange?: () => void;
}

export interface RadioGroupLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export interface RadioOptionProps extends Omit<RadioGroupItemProps, 'children'> {
  label: string;
  description?: string;
}

const RadioGroup = ({ 
  value, 
  onValueChange, 
  className, 
  children, 
  ...props 
}: RadioGroupProps) => {
  return (
    <div
      className={cn('grid gap-2', className)}
      role="radiogroup"
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === RadioGroupItem) {
          return React.cloneElement(child, {
            checked: value === (child.props as any).value,
            onCheckedChange: () => onValueChange?.((child.props as any).value),
          } as Partial<RadioGroupItemProps>);
        }
        return child;
      })}
    </div>
  );
};

const RadioGroupItem = ({ 
  value,
  checked,
  onCheckedChange,
  className,
  disabled,
  ...props 
}: RadioGroupItemProps) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      onClick={onCheckedChange}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-border text-primary focus-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'hover:border-primary/50 transition-colors',
        checked && 'border-primary',
        className
      )}
      {...props}
    >
      {checked && (
        <div className="flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      )}
    </button>
  );
};

const RadioGroupLabel = ({ className, ...props }: RadioGroupLabelProps) => {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  );
};

// Composant wrapper pour Radio + Label
const RadioOption = ({ 
  value, 
  label, 
  description, 
  className,
  ...props 
}: RadioOptionProps) => {
  return (
    <div className={cn('flex items-start space-x-3', className)}>
      <RadioGroupItem value={value} className="mt-1" {...props} />
      <div className="grid gap-1.5 leading-none">
        <RadioGroupLabel>{label}</RadioGroupLabel>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

export { RadioGroup, RadioGroupItem, RadioGroupLabel, RadioOption };