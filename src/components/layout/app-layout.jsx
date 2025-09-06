import React, { useState } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { cn } from '../../lib/utils';

const AppLayout = ({ children, className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={cn("flex h-screen bg-gray-50", isDarkMode && "dark")}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar 
          isDarkMode={isDarkMode} 
          onToggleDarkMode={handleToggleDarkMode}
        />
        <main className={cn(
          "flex-1 overflow-y-auto p-6",
          className
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;