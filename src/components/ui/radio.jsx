import React from 'react';
import { cn } from '../../lib/utils';

const RadioGroup = ({ 
  value, 
  onValueChange, 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn('grid gap-2', className)}
      role="radiogroup"
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === RadioGroupItem) {
          return React.cloneElement(child, {
            checked: value === child.props.value,
            onCheckedChange: () => onValueChange(child.props.value),
          });
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
}) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      onClick={onCheckedChange}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-gray-300 text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked && 'border-primary-600',
        className
      )}
      {...props}
    >
      {checked && (
        <div className="flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary-600" />
        </div>
      )}
    </button>
  );
};

const RadioGroupLabel = ({ className, ...props }) => {
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
}) => {
  return (
    <div className={cn('flex items-start space-x-3', className)}>
      <RadioGroupItem value={value} className="mt-1" {...props} />
      <div className="grid gap-1.5 leading-none">
        <RadioGroupLabel>{label}</RadioGroupLabel>
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};

export { RadioGroup, RadioGroupItem, RadioGroupLabel, RadioOption };