import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';
import { CaretDown } from '@phosphor-icons/react';

const AccordionContext = createContext();

const Accordion = ({ 
  type = "single", 
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState(
    type === "single" ? defaultValue : defaultValue || []
  );
  
  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (itemValue) => {
    let newValue;
    
    if (type === "single") {
      newValue = currentValue === itemValue && collapsible ? null : itemValue;
    } else {
      newValue = currentValue.includes(itemValue)
        ? currentValue.filter(v => v !== itemValue)
        : [...currentValue, itemValue];
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

const AccordionItem = ({ value, className, children, ...props }) => {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error('AccordionItem must be used within Accordion');
  }

  const isOpen = context.type === "single" 
    ? context.value === value 
    : context.value?.includes(value);

  return (
    <div
      className={cn(
        'border border-gray-200 rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, isOpen })
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
}) => {
  const context = useContext(AccordionContext);
  
  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-colors',
        className
      )}
      {...props}
    >
      {children}
      <CaretDown 
        size={16} 
        className={cn(
          'text-gray-500 transition-transform duration-200',
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
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}
    >
      <div className={cn('p-4 pt-0 text-gray-600', className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };