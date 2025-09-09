import { type ReactNode, type HTMLAttributes, type ButtonHTMLAttributes, type ComponentType } from 'react';
import type { IconWeight } from '@phosphor-icons/react';

// Base component props that all components can extend
export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

// Variant types commonly used across components
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
export type Status = 'success' | 'warning' | 'error' | 'info';

// Form-related types
export interface FormFieldProps {
  error?: boolean | string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
}

// Button-specific types
export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

// Badge types
export interface BadgeVariant {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

// HR Business Entity types
export type HREntity = 
  | 'employee' 
  | 'team' 
  | 'contract' 
  | 'skill' 
  | 'training' 
  | 'performance' 
  | 'mission' 
  | 'objective';

// Skill status types
export type SkillLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'expert' 
  | 'master';

// Icon types for Phosphor Icons
export interface PhosphorIconProps {
  size?: number;
  weight?: IconWeight;
  className?: string;
}

export type PhosphorIcon = ComponentType<PhosphorIconProps>;

// Generic icon type that works with both Phosphor and other icon libraries
export type IconComponent = ComponentType<{
  size?: number;
  weight?: string;
  className?: string;
}> | ComponentType<PhosphorIconProps> | any;

// Common callback types
export type VoidCallback = () => void;
export type ValueCallback<T> = (value: T) => void;