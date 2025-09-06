import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './badge';

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
}) => {
  const handleClick = (e) => {
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
          ? "text-primary-600 hover:text-primary-700" 
          : "text-gray-600 hover:text-gray-900",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} weight="duotone" />}
      <span>{label}</span>
      {badge && (
        <Badge 
          variant="outline" 
          className={badge.className || "bg-red-100 text-red-800 text-xs"}
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
}) => {
  return (
    <button 
      onClick={onClick}
      title={tooltip}
      className={cn(
        "p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors relative",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} weight="duotone" />}
      {badge && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
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
}) => {
  const defaultUser = {
    name: 'Utilisateur',
    email: 'user@company.com',
    avatar: null,
    initials: 'U'
  };

  const userData = { ...defaultUser, ...user };
  
  return (
    <div className={cn("relative", className)} {...props}>
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 p-2 text-gray-700 hover:bg-white rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          {userData.avatar ? (
            <img src={userData.avatar} alt={userData.name} className="w-8 h-8 rounded-full" />
          ) : (
            <span className="text-primary-600 text-xs font-medium">{userData.initials}</span>
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
          <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-large z-20">
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {userData.avatar ? (
                    <img src={userData.avatar} alt={userData.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <span className="text-primary-600 text-xs font-medium">{userData.initials}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{userData.name}</p>
                  <p className="text-xs text-gray-500 truncate">{userData.email}</p>
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
                    "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left",
                    item.variant === 'danger' 
                      ? "text-red-600 hover:bg-red-50" 
                      : "text-gray-700 hover:bg-gray-100"
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
}) => {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const closeUserMenu = () => setUserMenuOpen(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
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