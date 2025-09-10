import PageHeader from '../components/ui/page-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import CompetenceMiniCard from '../components/ui/competence-mini-card';
import JobMetricCard from '../components/ui/job-metric-card';
import JobDescriptionCard from '../components/ui/job-description-card';
import SkillsHeatmap from '../components/hr/skills-heatmap';
import EvolutionWishCard from '../components/ui/evolution-wish-card';
import HelpLink from '../components/ui/help-link';
import { ArrowRight, Eye, Crown, Warning, CircleNotch, Info, List, ChartLine } from '@phosphor-icons/react';
import { 
  House,
  ChartBar,
  Users,
  UsersThree,
  UserCircle,
  Gear,
  Calendar,
  GraduationCap,
  Target,
  FileText,
  Buildings,
  CaretDown,
  TrendUp,
  DotsThree
} from '@phosphor-icons/react';

const EmployeeProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Menu - Identique au dashboard */}
      <div className="w-[270px] bg-white border-r border-gray-200 sticky top-0 h-screen flex-shrink-0">
        <div className="h-full flex flex-col">
          {/* Logo section - Fixed */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-center px-3 py-2 text-foreground">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          
          {/* Scrollable navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
            {/* Tableau de bord */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <House size={18} weight="duotone" className="menu-icon" />
              <span>Tableau de bord</span>
            </a>
            
            {/* Progresser avec sous-menu - ACTIF */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg transition-colors">
                <TrendUp size={18} weight="duotone" className="menu-icon" />
                <span className="flex-1 text-left">Progresser</span>
                <CaretDown size={14} className="transform transition-transform rotate-180" />
              </button>
              <div className="ml-6 space-y-1 border-l-2 border-primary/30 pl-4">
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-primary bg-primary/5 rounded transition-colors">
                  <Users size={14} weight="duotone" className="menu-icon" />
                  Mon profil
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Target size={14} weight="duotone" className="menu-icon" />
                  Compétences
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <FileText size={14} weight="duotone" className="menu-icon" />
                  Carrière
                </a>
              </div>
            </div>
            
            {/* Manager avec sous-menu */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <UsersThree size={18} weight="duotone" className="menu-icon" />
                <span className="flex-1 text-left">Manager</span>
                <CaretDown size={14} className="transform transition-transform" />
              </button>
              <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Users size={14} weight="duotone" className="menu-icon" />
                  Équipes
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <UserCircle size={14} weight="duotone" className="menu-icon" />
                  Entretiens
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Calendar size={14} weight="duotone" className="menu-icon" />
                  Missions
                </a>
              </div>
            </div>
            
            {/* Piloter avec sous-sections structurées */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <ChartBar size={18} weight="duotone" className="menu-icon" />
                <span className="flex-1 text-left">Piloter</span>
                <CaretDown size={14} className="transform transition-transform" />
              </button>
              <div className="ml-6 space-y-3 border-l-2 border-gray-200 pl-4">
                {/* Sous-section Analytics */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">Analytics</h4>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <ChartBar size={14} weight="duotone" className="menu-icon" />
                      Tableaux de bord
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <FileText size={14} weight="duotone" className="menu-icon" />
                      Rapports
                    </a>
                  </div>
                </div>
                
                {/* Sous-section Performance */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">Performance</h4>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <Target size={14} weight="duotone" className="menu-icon" />
                      Objectifs
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <UserCircle size={14} weight="duotone" className="menu-icon" />
                      Entretiens
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <Calendar size={14} weight="duotone" className="menu-icon" />
                      Évaluations
                    </a>
                  </div>
                </div>
                
                {/* Sous-section Équipes */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">Équipes</h4>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <Users size={14} weight="duotone" className="menu-icon" />
                      Gestion d'équipe
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <Buildings size={14} weight="duotone" className="menu-icon" />
                      Organigramme
                    </a>
                  </div>
                </div>
                
                {/* Sous-section Compétences */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">Compétences</h4>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <GraduationCap size={14} weight="duotone" className="menu-icon" />
                      Formations
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                      <Target size={14} weight="duotone" className="menu-icon" />
                      Évaluations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Séparateur */}
            <div className="my-4 border-t border-gray-200"></div>
            
            {/* Paramétrer */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <Gear size={18} weight="duotone" className="menu-icon" />
              <span>Paramétrer</span>
            </a>
            </nav>
          </div>
          
          {/* User Profile Section - Fixed bottom SaaS standard */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
              {/* Avatar with initials - Professional SaaS style */}
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-semibold">SD</span>
              </div>
              
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Sophie Durani</p>
                <p className="text-xs text-muted-foreground truncate">RH Manager</p>
              </div>
              
              {/* Menu Actions - Always visible for accessibility */}
              <button className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
                <DotsThree size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Employee Header - Using our PageHeader component */}
        <PageHeader
          avatar="https://i.pravatar.cc/150?img=44"
          title="Sophie Durani"
          subtitle="RH Manager - Ressources Humaines"
          actions={[
            {
              label: "",
              icon: DotsThree,
              variant: "outline",
              size: "icon",
              onClick: () => console.log('Menu actions')
            }
          ]}
          infoSections={[
            {
              title: "CONTACT",
              fields: [
                { label: "Téléphone", value: "06 65 89 67 67" },
                { label: "Email", value: "sophie.durani@company.com" }
              ]
            },
            {
              title: "MÉTIER",
              fields: [
                { label: "Poste", value: "RH Manager" },
                { label: "Département", value: "Ressources Humaines" }
              ]
            },
            {
              title: "CONTRAT",
              fields: [
                { label: "Type", value: "CDI" },
                { label: "Début", value: "15 Mars 2020" }
              ]
            }
          ]}
        />
        
        {/* Content Area */}
        <div className="flex-1 p-8">
          {/* Passeport de compétences */}
          <Card className="mb-8">
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div className="space-y-1.5">
                <CardTitle>Passeport de compétences</CardTitle>
                <CardDescription>
                  Compétences clés de Sophie avec évaluation détaillée
                </CardDescription>
              </div>
              <Button variant="default" size="sm" className="flex-shrink-0 gap-2">
                <ChartLine size={14} weight="duotone" />
                M'autoévaluer
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <CompetenceMiniCard 
                  name="Communication"
                  score={4.2}
                  onViewDetails={() => console.log('Voir Communication')}
                />
                <CompetenceMiniCard 
                  name="Leadership"
                  score={3.8}
                  onViewDetails={() => console.log('Voir Leadership')}
                />
                <CompetenceMiniCard 
                  name="Gestion de projet"
                  score={4.0}
                  onViewDetails={() => console.log('Voir Gestion projet')}
                />
                <CompetenceMiniCard 
                  name="Négociation"
                  score={3.5}
                  onViewDetails={() => console.log('Voir Négociation')}
                />
                <CompetenceMiniCard 
                  name="Recrutement"
                  score={4.1}
                  onViewDetails={() => console.log('Voir Recrutement')}
                />
                <CompetenceMiniCard 
                  name="Formation d'équipe"
                  score={3.7}
                  onViewDetails={() => console.log('Voir Formation')}
                />
                <CompetenceMiniCard 
                  name="Analyse RH"
                  score={2.9}
                  onViewDetails={() => console.log('Voir Analyse RH')}
                />
                <CompetenceMiniCard 
                  name="Stratégie RH"
                  score={2.3}
                  onViewDetails={() => console.log('Voir Stratégie')}
                />
              </div>
              
              {/* Lien d'aide en bas à gauche */}
              <div className="flex justify-start mt-6">
                <HelpLink variant="primary">
                  Comment sont détectées et notées mes compétences?
                </HelpLink>
              </div>
            </CardContent>
          </Card>

          {/* Métier et Compétences requises */}
          <Card className="mb-8">
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div className="space-y-1.5">
                <CardTitle>Métier occupé et compétences requises</CardTitle>
                <CardDescription>
                  Vue d'ensemble du poste RH Manager et des compétences attendues
                </CardDescription>
              </div>
              <Button variant="default" size="sm" className="flex-shrink-0 gap-2">
                <Eye size={14} weight="duotone" />
                Voir la fiche métier
              </Button>
            </CardHeader>
            <CardContent>
              {/* 5 Cards de métriques métier */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                
                {/* Card 1: Info descriptive du métier */}
                <JobDescriptionCard
                  jobTitle="HR Business partner"
                  echelon="619"
                  seniority="5 ans"
                  department="Ressources Humaines"
                  variant="employee"
                />
                
                {/* Card 2: Niveau mentor (niveau le plus élevé) */}
                <JobMetricCard
                  title="Niveau mentor"
                  value="1/8"
                  subtitle="Expertises"
                  icon={Crown}
                  variant="success"
                />
                
                {/* Card 3: Compétences au niveau */}
                <JobMetricCard
                  title="compétences au niveau"
                  value="1/8"
                  subtitle="Maîtrisées"
                  icon={Target}
                  variant="success"
                />
                
                {/* Card 4: Compétences à développer */}
                <JobMetricCard
                  title="Compétences à développer"
                  value="1/8"
                  subtitle="En progression"
                  icon={CircleNotch}
                  variant="warning"
                />
                
                {/* Card 5: Compétences manquantes (niveau le plus bas) */}
                <JobMetricCard
                  title="compétences manquantes"
                  value="1/8"
                  subtitle="À acquérir"
                  icon={Warning}
                  variant="error"
                />
                
              </div>
              
              {/* Skills Heatmap en dessous des 5 cards */}
              <div className="mt-8">
                <SkillsHeatmap className="w-full" showHeader={false} showCard={false} />
              </div>
            </CardContent>
          </Card>
          
          {/* Souhaits d'évolution */}
          <Card className="mb-8">
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div className="space-y-1.5">
                <CardTitle>Souhaits d'évolution</CardTitle>
                <CardDescription>
                  Aspirations de carrière et objectifs professionnels
                </CardDescription>
              </div>
              <Button variant="default" size="sm" className="flex-shrink-0 gap-2">
                <List size={14} weight="duotone" />
                Préparer mon évolution
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <EvolutionWishCard
                  percentage={60}
                  jobTitle="HR Business partner"
                  echelon="619"
                  seniority="5 ans"
                  department="Ressources Humaines"
                  onView={() => console.log('Voir détails poste 1')}
                  onDelete={() => console.log('Supprimer souhait 1')}
                />
                
                <EvolutionWishCard
                  percentage={60}
                  jobTitle="HR Business partner"
                  echelon="619"
                  seniority="5 ans"
                  department="Ressources Humaines"
                  onView={() => console.log('Voir détails poste 2')}
                  onDelete={() => console.log('Supprimer souhait 2')}
                />
                
                <EvolutionWishCard
                  percentage={60}
                  jobTitle="HR Business partner"
                  echelon="619"
                  seniority="5 ans"
                  department="Ressources Humaines"
                  onView={() => console.log('Voir détails poste 3')}
                  onDelete={() => console.log('Supprimer souhait 3')}
                />
              </div>
              
              {/* Lien d'aide en bas */}
              <div className="flex justify-between items-center mt-6">
                <HelpLink variant="primary" className="text-xs">
                  Comment sont calculés les scores ?
                </HelpLink>
                
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye size={14} weight="duotone" />
                  Tous les métiers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;