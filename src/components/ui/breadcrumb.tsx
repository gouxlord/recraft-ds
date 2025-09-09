import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { CaretRight } from '@phosphor-icons/react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isCurrentPage?: boolean;
}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface BreadcrumbSeparatorProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export interface BreadcrumbEllipsisProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const Breadcrumb = ({ className, children, ...props }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn('flex', className)}
      {...props}
    >
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
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
}: BreadcrumbItemProps) => {
  return (
    <li
      className={cn(
        'flex items-center',
        isCurrentPage && 'text-foreground font-medium',
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
}: BreadcrumbLinkProps) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick as any}
      className={cn(
        'hover:text-foreground transition-colors hover:underline focus-ring rounded',
        className
      )}
      {...props as any}
    >
      {children}
    </Component>
  );
};

const BreadcrumbSeparator = ({ className, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <li
      className={cn('text-muted-foreground/60 px-1', className)}
      role="presentation"
      {...props}
    >
      <CaretRight size={14} />
    </li>
  );
};

const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => {
  return (
    <li
      className={cn('text-muted-foreground/60', className)}
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