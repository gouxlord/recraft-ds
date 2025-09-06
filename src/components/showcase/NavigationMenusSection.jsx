import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { 
  Users, 
  House,
  ChartBar,
  UserCircle,
  Gear,
  Bell,
  Calendar,
  FolderOpen,
  ChatCircle,
  SignOut,
  CaretDown,
  Trash,
  PencilSimple,
  Eye,
  Buildings,
  ClockCounterClockwise,
  FileText,
  Download,
  Plus,
  GraduationCap
} from '@phosphor-icons/react';

const NavigationMenusSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Menus de navigation</h2>
      
      {/* Sidebar Menu - Full Width Demo */}
      <div className="mb-8">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Menu latéral principal avec sous-menus</CardTitle>
            <CardDescription>Navigation principale de l'application avec système hiérarchique</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[270px] h-[500px] bg-white border border-gray-200 rounded-lg p-4 overflow-y-auto shadow-soft">
              <div className="mb-6">
                <div className="flex items-center gap-3 px-3 py-2 text-gray-900">
                  <Buildings size={24} className="text-primary-600" weight="duotone" />
                  <div>
                    <h3 className="font-semibold text-sm">Mon Entreprise RH</h3>
                    <p className="text-xs text-gray-500">Version 2.1.0</p>
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1">
                {/* Tableau de bord */}
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg transition-colors">
                  <House size={18} weight="duotone" />
                  <span>Tableau de bord</span>
                </a>
                
                {/* Employés avec sous-menu */}
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <Users size={18} weight="duotone" />
                    <span className="flex-1 text-left">Employés</span>
                    <CaretDown size={14} className="transform transition-transform" />
                  </button>
                  <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <UserCircle size={14} weight="duotone" />
                      Liste des employés
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <Plus size={14} weight="duotone" />
                      Ajouter un employé
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <Buildings size={14} weight="duotone" />
                      Organigramme
                    </a>
                  </div>
                </div>
                
                {/* Analytics */}
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChartBar size={18} weight="duotone" />
                  <span>Analytics</span>
                </a>
                
                {/* Formations avec sous-menu */}
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <GraduationCap size={18} weight="duotone" />
                    <span className="flex-1 text-left">Formations</span>
                    <CaretDown size={14} className="transform transition-transform" />
                  </button>
                  <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <FolderOpen size={14} weight="duotone" />
                      Catalogue
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <Calendar size={14} weight="duotone" />
                      Planification
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <ClockCounterClockwise size={14} weight="duotone" />
                      Historique
                    </a>
                  </div>
                </div>
                
                {/* Planning */}
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Calendar size={18} weight="duotone" />
                  <span>Planning</span>
                </a>
                
                {/* Documents avec sous-menu */}
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <FolderOpen size={18} weight="duotone" />
                    <span className="flex-1 text-left">Documents</span>
                    <CaretDown size={14} className="transform transition-transform" />
                  </button>
                  <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <FileText size={14} weight="duotone" />
                      Contrats
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <FolderOpen size={14} weight="duotone" />
                      Dossiers RH
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      <Download size={14} weight="duotone" />
                      Templates
                    </a>
                  </div>
                </div>
                
                {/* Séparateur */}
                <div className="my-4 border-t border-gray-200"></div>
                
                {/* Paramètres */}
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Gear size={18} weight="duotone" />
                  <span>Paramètres</span>
                </a>
                
                {/* Support */}
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChatCircle size={18} weight="duotone" />
                  <span>Support</span>
                </a>
              </nav>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Top Navigation - Full Width */}
      <Card className="hover-lift mb-8">
        <CardHeader>
          <CardTitle>Barre de navigation supérieure</CardTitle>
          <CardDescription>Navigation horizontale avec actions - 100% width</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                <House size={16} weight="duotone" />
                Accueil
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <Users size={16} weight="duotone" />
                Équipe
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <ChartBar size={16} weight="duotone" />
                Rapports
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <GraduationCap size={16} weight="duotone" />
                Formations
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <Calendar size={16} weight="duotone" />
                Planning
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors">
                <Bell size={18} weight="duotone" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors">
                <ChatCircle size={18} weight="duotone" />
              </button>
              <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                <UserCircle size={18} weight="duotone" />
                <CaretDown size={14} />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Dropdown Menu */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Menu déroulant utilisateur</CardTitle>
            <CardDescription>Actions utilisateur et paramètres</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-large">
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCircle size={18} className="text-primary-600" weight="duotone" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">Marie Dupont</p>
                      <p className="text-xs text-gray-500 truncate">marie.dupont@company.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <UserCircle size={16} weight="duotone" />
                    Mon profil
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Gear size={16} weight="duotone" />
                    Paramètres
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Bell size={16} weight="duotone" />
                    Notifications
                  </a>
                  <hr className="my-1 border-gray-200" />
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
                    <SignOut size={16} weight="duotone" />
                    Se déconnecter
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Context Menu */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Menu contextuel</CardTitle>
            <CardDescription>Actions rapides au clic droit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="w-44 bg-white border border-gray-200 rounded-lg shadow-large">
                <div className="p-1">
                  <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left">
                    <Eye size={16} weight="duotone" />
                    Voir les détails
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left">
                    <PencilSimple size={16} weight="duotone" />
                    Modifier
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left">
                    <Download size={16} weight="duotone" />
                    Télécharger
                  </button>
                  <hr className="my-1 border-gray-200" />
                  <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors text-left">
                    <Trash size={16} weight="duotone" />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <Card className="hover-lift lg:col-span-2">
          <CardHeader>
            <CardTitle>Navigation par onglets</CardTitle>
            <CardDescription>Organisation du contenu en onglets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-b border-gray-200">
              <nav className="flex gap-8">
                <a href="#" className="flex items-center gap-2 px-1 py-3 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                  <UserCircle size={16} weight="duotone" />
                  Profil
                </a>
                <a href="#" className="flex items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent transition-colors">
                  <GraduationCap size={16} weight="duotone" />
                  Formations
                </a>
                <a href="#" className="flex items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent transition-colors">
                  <ChartBar size={16} weight="duotone" />
                  Performance
                </a>
                <a href="#" className="flex items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent transition-colors">
                  <Gear size={16} weight="duotone" />
                  Paramètres
                </a>
              </nav>
            </div>
          </CardContent>
        </Card>

        {/* Breadcrumb Navigation */}
        <Card className="hover-lift lg:col-span-2">
          <CardHeader>
            <CardTitle>Fil d'Ariane</CardTitle>
            <CardDescription>Navigation hiérarchique avec icônes</CardDescription>
          </CardHeader>
          <CardContent>
            <nav className="flex items-center gap-2 text-sm">
              <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                <House size={14} weight="duotone" />
                Accueil
              </a>
              <span className="text-gray-300">/</span>
              <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                <Users size={14} weight="duotone" />
                Employés
              </a>
              <span className="text-gray-300">/</span>
              <a href="#" className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                <UserCircle size={14} weight="duotone" />
                Marie Dupont
              </a>
              <span className="text-gray-300">/</span>
              <span className="flex items-center gap-1 text-gray-900 font-medium">
                <GraduationCap size={14} weight="duotone" />
                Formations
              </span>
            </nav>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NavigationMenusSection;