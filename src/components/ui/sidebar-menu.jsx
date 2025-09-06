import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';

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
}) => {
  const hasChildren = children && children.length > 0;
  
  const handleClick = (e) => {
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
          "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors group",
          isActive 
            ? "bg-primary-100 text-primary-700 font-medium" 
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {Icon && (
            <Icon 
              size={16} 
              weight="duotone" 
              className={isActive ? "text-primary-700" : "text-gray-500 group-hover:text-gray-700"}
            />
          )}
          <span className="truncate">{label}</span>
          {badge && (
            <Badge 
              variant="outline" 
              className={badge.className || "bg-red-100 text-red-800 text-xs ml-auto"}
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
        <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-3">
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
}) => {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {title && (
        <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
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
}) => {
  return (
    <div className={cn("p-4 border-b border-gray-200", className)} {...props}>
      <div className="flex items-center gap-3">
        {logo && (
          <div className="flex-shrink-0">
            {React.isValidElement(logo) ? logo : (
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{logo}</span>
              </div>
            )}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-gray-900 truncate">{title}</h3>
          {subtitle && (
            <p className="text-xs text-gray-500 truncate">{subtitle}</p>
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
}) => {
  const [expandedItems, setExpandedItems] = React.useState(new Set());
  
  const toggleExpanded = (itemIndex, groupIndex) => {
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
        "bg-white border border-gray-200 rounded-lg shadow-soft overflow-y-auto",
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