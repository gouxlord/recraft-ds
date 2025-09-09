import React, { MouseEvent } from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';

export interface NavigationBadge {
  label: string | number;
  className?: string;
}

export interface NavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  icon?: React.ComponentType<{ size?: number; weight?: string }>;
  label: string;
  isActive?: boolean;
  badge?: NavigationBadge;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavigationActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<{ size?: number; weight?: string }>;
  badge?: boolean;
  tooltip?: string;
}

export interface UserData {
  name?: string;
  email?: string;
  avatar?: string;
  initials?: string;
}

export interface UserMenuItem {
  label: string;
  icon?: React.ComponentType<{ size?: number; weight?: string }>;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export interface UserMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: UserData;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  menuItems?: UserMenuItem[];
}

export interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavigationItemProps[];
  actions?: NavigationActionProps[];
  user?: UserData;
  userMenuItems?: UserMenuItem[];
}

// Item de navigation
const NavigationItem = ({ 
  href = "#", 
  icon: Icon, 
  label, 
  isActive = false, 
  badge,
  onClick,
  className,
  ...props 
}: NavigationItemProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors",
        isActive 
          ? "text-primary hover:text-primary" 
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} weight="duotone" />}
      <span>{label}</span>
      {badge && (
        <Badge 
          variant="outline" 
          className={badge.className || "status-error text-xs"}
        >
          {badge.label}
        </Badge>
      )}
    </a>
  );
};

// Bouton d'action dans la barre de navigation
const NavigationAction = ({ 
  icon: Icon, 
  onClick, 
  badge,
  tooltip,
  className,
  ...props 
}: NavigationActionProps) => {
  return (
    <button 
      onClick={onClick}
      title={tooltip}
      className={cn(
        "p-2 text-muted-foreground hover:text-foreground hover:bg-background rounded-lg transition-colors relative focus-ring",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} weight="duotone" />}
      {badge && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
      )}
    </button>
  );
};

// Menu déroulant utilisateur
const UserMenu = ({ 
  user, 
  isOpen, 
  onToggle, 
  onClose,
  menuItems = [],
  className,
  ...props 
}: UserMenuProps) => {
  const defaultUser: Required<UserData> = {
    name: 'Utilisateur',
    email: 'user@company.com',
    avatar: '',
    initials: 'U'
  };

  const userData = { ...defaultUser, ...user };
  
  return (
    <div className={cn("relative", className)} {...props}>
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 p-2 text-foreground hover:bg-background rounded-lg transition-colors focus-ring"
      >
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          {userData.avatar ? (
            <img src={userData.avatar} alt={userData.name} className="w-8 h-8 rounded-full" />
          ) : (
            <span className="text-primary text-xs font-medium">{userData.initials}</span>
          )}
        </div>
        <span className="text-sm font-medium hidden md:block">{userData.name}</span>
      </button>
      
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={onClose}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-20">
            <div className="p-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {userData.avatar ? (
                    <img src={userData.avatar} alt={userData.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <span className="text-primary text-xs font-medium">{userData.initials}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{userData.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{userData.email}</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick?.();
                    onClose();
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left focus-ring",
                    item.variant === 'danger' 
                      ? "text-destructive hover:bg-destructive/10" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.icon && <item.icon size={16} weight="duotone" />}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Barre de navigation principale
const NavigationBar = ({ 
  items = [], 
  actions = [],
  user,
  userMenuItems = [],
  className,
  ...props 
}: NavigationBarProps) => {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const closeUserMenu = () => setUserMenuOpen(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 bg-muted/50 rounded-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-6">
        {items.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </div>
      
      <div className="flex items-center gap-3">
        {actions.map((action, index) => (
          <NavigationAction key={index} {...action} />
        ))}
        
        <UserMenu 
          user={user}
          isOpen={userMenuOpen}
          onToggle={toggleUserMenu}
          onClose={closeUserMenu}
          menuItems={userMenuItems}
        />
      </div>
    </div>
  );
};

export { NavigationBar, NavigationItem, NavigationAction, UserMenu };
export default NavigationBar;