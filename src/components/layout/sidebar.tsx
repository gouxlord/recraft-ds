import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import {
  House,
  Users,
  Target,
  ChartBar,
  Gear,
  CaretLeft,
  User,
  Briefcase,
  Certificate,
  GraduationCap
} from '@phosphor-icons/react';

export interface SidebarProps {
  className?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  badge: string | null;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: House, badge: null },
    { id: 'employees', label: 'Employés', icon: Users, badge: '124' },
    { id: 'skills', label: 'Compétences', icon: Target, badge: null },
    { id: 'careers', label: 'Carrières', icon: Briefcase, badge: null },
    { id: 'training', label: 'Formations', icon: GraduationCap, badge: '3' },
    { id: 'certifications', label: 'Certifications', icon: Certificate, badge: null },
    { id: 'analytics', label: 'Analytics', icon: ChartBar, badge: null },
    { id: 'settings', label: 'Paramètres', icon: Gear, badge: null },
  ];

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={cn(
          "flex items-center gap-3 transition-opacity",
          isCollapsed && "opacity-0"
        )}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">HR</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">HR Platform</h2>
            <p className="text-xs text-gray-500">Gestion RH</p>
          </div>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CaretLeft 
            size={20} 
            className={cn(
              "text-gray-600 transition-transform",
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                "hover:bg-gray-50",
                isActive && "bg-primary-50 text-primary-700 hover:bg-primary-100",
                !isActive && "text-gray-600 hover:text-gray-900"
              )}
            >
              <Icon size={22} weight={isActive ? "fill" : "regular"} />
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left text-sm font-medium">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className={cn(
                      "px-2 py-0.5 text-xs rounded-full",
                      isActive 
                        ? "bg-primary-600 text-white" 
                        : "bg-gray-200 text-gray-700"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-all",
          isCollapsed && "justify-center"
        )}>
          <div className="w-9 h-9 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center">
            <User size={20} weight="bold" className="text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Marie Dupont</p>
              <p className="text-xs text-gray-500">RH Manager</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;