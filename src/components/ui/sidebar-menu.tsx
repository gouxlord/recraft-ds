import React, { ReactNode, MouseEvent } from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';

export interface SidebarMenuBadge {
  label: string | number;
  className?: string;
}

export interface SidebarMenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  href?: string;
  icon?: any;
  label: string;
  isActive?: boolean;
  badge?: SidebarMenuBadge;
  children?: SidebarMenuItemProps[];
  hasSubmenu?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: ReactNode | string;
  title?: string;
  subtitle?: string;
}

export interface SidebarMenuGroup {
  title?: string;
  items: SidebarMenuItemProps[];
}

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: SidebarHeaderProps;
  groups?: SidebarMenuGroup[];
  width?: number;
  height?: number;
}

// Item de menu latéral
const SidebarMenuItem = ({ 
  href = "#", 
  icon: Icon, 
  label, 
  isActive = false,
  badge,
  children,
  hasSubmenu = false,
  isExpanded = false,
  onToggle,
  onClick,
  className,
  ...props 
}: SidebarMenuItemProps) => {
  const hasChildren = children && children.length > 0;
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (hasChildren && onToggle) {
      e.preventDefault();
      onToggle();
    } else if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <a 
        href={href} 
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors group focus-ring",
          isActive 
            ? "bg-primary/10 text-primary font-medium" 
            : "text-foreground hover:bg-muted"
        )}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {Icon && (
            <Icon 
              size={16} 
              weight="duotone" 
              className={isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}
            />
          )}
          <span className="truncate">{label}</span>
          {badge && (
            <Badge 
              variant="outline" 
              className={badge.className || "status-error text-xs ml-auto"}
            >
              {badge.label}
            </Badge>
          )}
        </div>
        
        {hasChildren && (
          <div className={cn(
            "transition-transform duration-200",
            isExpanded ? "rotate-90" : ""
          )}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        )}
      </a>
      
      {hasChildren && isExpanded && (
        <div className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
          {children}
        </div>
      )}
    </div>
  );
};

// Groupe de menu latéral
const SidebarMenuGroup = ({ 
  title,
  children,
  className,
  ...props 
}: SidebarMenuGroupProps) => {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {title && (
        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

// Header du sidebar
const SidebarHeader = ({ 
  logo,
  title,
  subtitle,
  className,
  ...props 
}: SidebarHeaderProps) => {
  return (
    <div className={cn("p-4 border-b border-border", className)} {...props}>
      <div className="flex items-center gap-3">
        {logo && (
          <div className="flex-shrink-0">
            {React.isValidElement(logo) ? logo : (
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{logo}</span>
              </div>
            )}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-foreground truncate">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Menu latéral principal
const SidebarMenu = ({ 
  header,
  groups = [],
  width = 270,
  height = 500,
  className,
  ...props 
}: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  
  const toggleExpanded = (itemIndex: number, groupIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    const newExpanded = new Set(expandedItems);
    
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    
    setExpandedItems(newExpanded);
  };

  return (
    <div 
      className={cn(
        "bg-background border border-border rounded-lg shadow-sm overflow-y-auto",
        className
      )}
      style={{ width, height }}
      {...props}
    >
      {header && <SidebarHeader {...header} />}
      
      <div className="p-2 space-y-4">
        {groups.map((group, groupIndex) => (
          <SidebarMenuGroup key={groupIndex} title={group.title}>
            {group.items.map((item, itemIndex) => {
              const key = `${groupIndex}-${itemIndex}`;
              const isExpanded = expandedItems.has(key);
              
              return (
                <SidebarMenuItem
                  key={itemIndex}
                  {...item}
                  isExpanded={isExpanded}
                  onToggle={item.children ? () => toggleExpanded(itemIndex, groupIndex) : undefined}
                >
                  {item.children?.map((child, childIndex) => (
                    <SidebarMenuItem
                      key={childIndex}
                      {...child}
                      className="text-xs"
                    />
                  ))}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenuGroup>
        ))}
      </div>
    </div>
  );
};

export { SidebarMenu, SidebarMenuItem, SidebarMenuGroup, SidebarHeader };
export default SidebarMenu;