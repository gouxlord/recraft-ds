import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onValueChange'> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const currentValue = value !== undefined ? value : internalValue;
  
  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ className, children, ...props }: TabsListProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const TabsTrigger = ({ value, className, children, ...props }: TabsTriggerProps) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }
  
  const isActive = context.value === value;
  
  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'hover:text-foreground',
        isActive && 'bg-background text-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, className, children, ...props }: TabsContentProps) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }
  
  if (context.value !== value) {
    return null;
  }
  
  return (
    <div
      className={cn(
        'mt-4 focus-ring animate-fade-in',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };