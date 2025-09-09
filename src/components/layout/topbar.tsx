import { useState } from 'react';
import { cn } from '../../lib/utils';
import {
  MagnifyingGlass,
  Bell,
  Question,
  Moon,
  Sun,
  User,
  SignOut,
  Gear
} from '@phosphor-icons/react';

export interface TopbarProps {
  className?: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

const Topbar = ({ className, isDarkMode, onToggleDarkMode }: TopbarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications: Notification[] = [
    {
      id: 1,
      title: 'Nouvelle demande de formation',
      description: 'Jean Martin a demandé une formation React',
      time: 'Il y a 5 min',
      unread: true
    },
    {
      id: 2,
      title: 'Évaluation terminée',
      description: 'Sophie Durand a complété son évaluation annuelle',
      time: 'Il y a 2h',
      unread: true
    },
    {
      id: 3,
      title: 'Rappel: Entretiens',
      description: '3 entretiens programmés pour demain',
      time: 'Il y a 1 jour',
      unread: false
    }
  ];

  return (
    <header className={cn(
      "bg-white border-b border-gray-200 px-6 py-3",
      className
    )}>
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <MagnifyingGlass 
              size={20} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Rechercher un employé, une compétence..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-6">
          {/* Help */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Question size={20} className="text-gray-600" />
          </button>

          {/* Dark Mode Toggle */}
          <button 
            onClick={onToggleDarkMode}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-gray-600" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-large border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={cn(
                        "p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0",
                        notif.unread && "bg-primary-50/30"
                      )}
                    >
                      <div className="flex gap-3">
                        {notif.unread && (
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{notif.description}</p>
                          <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200">
                  <button className="w-full text-center text-sm text-primary-600 font-medium hover:text-primary-700">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-2 pl-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 text-right">Marie Dupont</p>
                <p className="text-xs text-gray-500 text-right">RH Manager</p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center">
                <User size={20} weight="bold" className="text-white" />
              </div>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-large border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900">Marie Dupont</p>
                  <p className="text-sm text-gray-500">m.dupont@company.com</p>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                    <User size={18} />
                    Mon profil
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Gear size={18} />
                    Paramètres
                  </button>
                </div>
                <div className="p-2 border-t border-gray-200">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-error-600 hover:bg-error-50 rounded-lg">
                    <SignOut size={18} />
                    Déconnexion
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;