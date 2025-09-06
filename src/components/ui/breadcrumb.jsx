import React from 'react';
import { cn } from '../../lib/utils';
import { CaretRight } from '@phosphor-icons/react';

const Breadcrumb = ({ className, children, ...props }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn('flex', className)}
      {...props}
    >
      <ol className="flex items-center space-x-1 text-sm text-gray-600">
        {children}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ 
  children, 
  className, 
  isCurrentPage = false, 
  ...props 
}) => {
  return (
    <li
      className={cn(
        'flex items-center',
        isCurrentPage && 'text-gray-900 font-medium',
        className
      )}
      aria-current={isCurrentPage ? 'page' : undefined}
      {...props}
    >
      {children}
    </li>
  );
};

const BreadcrumbLink = ({ 
  href, 
  children, 
  className, 
  onClick,
  ...props 
}) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        'hover:text-gray-900 transition-colors hover:underline',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

const BreadcrumbSeparator = ({ className, ...props }) => {
  return (
    <li
      className={cn('text-gray-400 px-1', className)}
      role="presentation"
      {...props}
    >
      <CaretRight size={14} />
    </li>
  );
};

const BreadcrumbEllipsis = ({ className, ...props }) => {
  return (
    <li
      className={cn('text-gray-400', className)}
      role="presentation"
      {...props}
    >
      <span>...</span>
    </li>
  );
};

export { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
};