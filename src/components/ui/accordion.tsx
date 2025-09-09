import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { CaretDown } from '@phosphor-icons/react';

export type AccordionType = 'single' | 'multiple';

export interface AccordionContextValue {
  value: string | string[] | null;
  onValueChange: (value: string) => void;
  type: AccordionType;
}

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onValueChange'> {
  type?: AccordionType;
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[] | null) => void;
  children: ReactNode;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isOpen?: boolean;
  children: ReactNode;
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  children: ReactNode;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const Accordion = ({ 
  type = "single", 
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props 
}: AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string | string[] | null>(
    type === "single" ? defaultValue as string : defaultValue || []
  );
  
  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (itemValue: string) => {
    let newValue: string | string[] | null;
    
    if (type === "single") {
      newValue = currentValue === itemValue && collapsible ? null : itemValue;
    } else {
      const currentArray = Array.isArray(currentValue) ? currentValue : [];
      newValue = currentArray.includes(itemValue)
        ? currentArray.filter(v => v !== itemValue)
        : [...currentArray, itemValue];
    }
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <AccordionContext.Provider 
      value={{ 
        value: currentValue, 
        onValueChange: handleValueChange,
        type 
      }}
    >
      <div className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, className, children, ...props }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error('AccordionItem must be used within Accordion');
  }

  const isOpen = context.type === "single" 
    ? context.value === value 
    : Array.isArray(context.value) && context.value.includes(value);

  return (
    <div
      className={cn(
        'border border-border rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, isOpen } as any)
          : child
      )}
    </div>
  );
};

const AccordionTrigger = ({ 
  value,
  isOpen,
  className, 
  children, 
  ...props 
}: AccordionTriggerProps) => {
  const context = useContext(AccordionContext);
  
  if (!context || !value) {
    throw new Error('AccordionTrigger must be used within AccordionItem with a value');
  }
  
  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted transition-colors focus-ring',
        className
      )}
      {...props}
    >
      {children}
      <CaretDown 
        size={16} 
        className={cn(
          'text-muted-foreground transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
};

const AccordionContent = ({ 
  isOpen,
  className, 
  children, 
  ...props 
}: AccordionContentProps) => {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}
    >
      <div className={cn('p-4 pt-0 text-muted-foreground', className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };