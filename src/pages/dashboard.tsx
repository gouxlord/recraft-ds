import React, { ReactNode } from 'react';
import PageHeader from '../components/ui/page-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import StatCard from '../components/ui/stat-card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import DataTable from '../components/ui/data-table';
import SkillsHeatmap from '../components/hr/skills-heatmap';
import { BusinessEntityCard } from '../components/ui/business-entity';
import ActionButton, { ActionButtonWithBadge } from '../components/ui/action-button';
import CardAction, { CardActionGroup } from '../components/ui/card-action';
import { 
  House,
  ChartBar,
  Users,
  UsersThree,
  UserCircle,
  Gear,
  Calendar,
  FolderOpen,
  ChatCircle,
  GraduationCap,
  Target,
  BriefcaseMetal,
  Chair,
  FileText,
  Lightning,
  TrendUp,
  Plus,
  Download,
  Eye,
  Medal,
  Buildings,
  ClockCounterClockwise,
  CaretDown
} from '@phosphor-icons/react';

interface StatData {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: any;
  iconColor: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  time: string;
  type: 'meeting' | 'training' | 'review';
}

interface RecentActivity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  status: 'completed' | 'pending' | 'success';
}

interface TeamPerformance {
  name: string;
  performance: number;
  members: number;
}

interface EmployeeData {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  status: string;
  joinDate: string;
  performance: number;
}

const DashboardPage = () => {
  // Données d'exemple
  const sampleEmployee = {
    name: "Alexandre Martin",
    role: "Lead Developer",
    department: "Développement",
    email: "alexandre.martin@company.com",
    phone: "+33 6 12 34 56 78",
    location: "Lyon, France",
    joinDate: "Mars 2022",
    skills: ["React", "Node.js", "TypeScript", "Leadership"],
    performance: 94,
    status: "active" as const
  };


  const stats: StatData[] = [
    {
      title: "Employés actifs",
      value: "124",
      change: "+12%",
      changeType: "positive",
      icon: UsersThree,
      iconColor: "blue"
    },
    {
      title: "Formations en cours",
      value: "18",
      change: "+25%",
      changeType: "positive",
      icon: GraduationCap,
      iconColor: "yellow"
    },
    {
      title: "Objectifs atteints",
      value: "89%",
      change: "+5%",
      changeType: "positive",
      icon: Target,
      iconColor: "green"
    },
    {
      title: "Satisfaction équipe",
      value: "4.6/5",
      change: "+0.2",
      changeType: "positive",
      icon: Medal,
      iconColor: "purple"
    }
  ];

  const upcomingEvents: UpcomingEvent[] = [
    { id: 1, title: 'Entretien annuel - Marie Dupont', time: '09:00', type: 'meeting' },
    { id: 2, title: 'Formation Leadership - Session 3', time: '14:00', type: 'training' },
    { id: 3, title: 'Revue trimestrielle équipe Tech', time: '16:30', type: 'review' }
  ];

  const recentActivities: RecentActivity[] = [
    { id: 1, user: 'Jean Martin', action: 'a complété', target: 'Formation React Avancé', time: 'Il y a 2h', status: 'completed' },
    { id: 2, user: 'Sophie Bernard', action: 'a demandé', target: 'Congés du 15-20 Mars', time: 'Il y a 3h', status: 'pending' },
    { id: 3, user: 'Pierre Durand', action: 'a obtenu', target: 'Certification AWS', time: 'Hier', status: 'success' }
  ];

  const teamPerformance: TeamPerformance[] = [
    { name: 'Tech', performance: 92, members: 45 },
    { name: 'Product', performance: 88, members: 12 },
    { name: 'Design', performance: 95, members: 8 },
    { name: 'Marketing', performance: 78, members: 15 }
  ];

  const employeeData: EmployeeData[] = [
    {
      id: 1,
      name: "Marie Dupont",
      role: "RH Manager",
      department: "Ressources Humaines",
      email: "marie.dupont@company.com",
      status: "Actif",
      joinDate: "2020-01-15",
      performance: 92
    },
    {
      id: 2,
      name: "Alexandre Martin",
      role: "Lead Developer",
      department: "Développement",
      email: "alexandre.martin@company.com",
      status: "Actif",
      joinDate: "2022-03-10",
      performance: 94
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "UX Designer",
      department: "Design",
      email: "sarah.chen@company.com",
      status: "Actif",
      joinDate: "2023-06-01",
      performance: 88
    },
    {
      id: 4,
      name: "Pierre Durand",
      role: "Marketing Manager",
      department: "Marketing",
      email: "pierre.durand@company.com",
      status: "En congé",
      joinDate: "2021-09-20",
      performance: 85
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Data Analyst",
      department: "Données",
      email: "lisa.wang@company.com",
      status: "Actif",
      joinDate: "2023-02-14",
      performance: 91
    }
  ];

  // Console logs to use variables and avoid TS6133 errors
  console.log('Sample data loaded:', { sampleEmployee, upcomingEvents, recentActivities, teamPerformance });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Menu - Sticky Full Height */}
      <div className="w-[270px] bg-white border-r border-gray-200 sticky top-0 h-screen overflow-y-auto flex-shrink-0">
        <div className="p-4 h-full">
          <div className="mb-4">
            <div className="flex items-center justify-center px-3 py-2 text-gray-900">
              <img src="/Vector.svg" alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          
          <nav className="space-y-1">
            {/* Tableau de bord */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg transition-colors">
              <House size={18} weight="duotone" />
              <span>Tableau de bord</span>
            </a>
            
            {/* Employés avec sous-menu */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <Users size={18} weight="duotone" />
                <span className="flex-1 text-left">Employés</span>
                <CaretDown size={14} className="transform transition-transform" />
              </button>
              <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <UserCircle size={14} weight="duotone" />
                  Liste des employés
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Plus size={14} weight="duotone" />
                  Ajouter un employé
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Buildings size={14} weight="duotone" />
                  Organigramme
                </a>
              </div>
            </div>
            
            {/* Analytics */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <ChartBar size={18} weight="duotone" />
              <span>Analytics</span>
            </a>
            
            {/* Formations avec sous-menu */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <GraduationCap size={18} weight="duotone" />
                <span className="flex-1 text-left">Formations</span>
                <CaretDown size={14} className="transform transition-transform" />
              </button>
              <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <FolderOpen size={14} weight="duotone" />
                  Catalogue
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Calendar size={14} weight="duotone" />
                  Planification
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <ClockCounterClockwise size={14} weight="duotone" />
                  Historique
                </a>
              </div>
            </div>
            
            {/* Planning */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <Calendar size={18} weight="duotone" />
              <span>Planning</span>
            </a>
            
            {/* Documents avec sous-menu */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <FolderOpen size={18} weight="duotone" />
                <span className="flex-1 text-left">Documents</span>
                <CaretDown size={14} className="transform transition-transform" />
              </button>
              <div className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <FileText size={14} weight="duotone" />
                  Contrats
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <FolderOpen size={14} weight="duotone" />
                  Dossiers RH
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors">
                  <Download size={14} weight="duotone" />
                  Templates
                </a>
              </div>
            </div>
            
            {/* Séparateur */}
            <div className="my-4 border-t border-gray-200"></div>
            
            {/* Paramètres */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <Gear size={18} weight="duotone" />
              <span>Paramètres</span>
            </a>
            
            {/* Support */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
              <ChatCircle size={18} weight="duotone" />
              <span>Support</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Page Header */}
        <PageHeader
          icon={ChartBar}
          iconColor="blue"
          title="Tableau de bord RH"
          subtitle="Vue d'ensemble de la performance et des activités de votre équipe"
          statusBadge={{
            label: "Mise à jour en temps réel",
            className: "bg-green-50 text-green-700 border-green-200"
          }}
          badges={[
            { label: "Q4 2024", className: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "124 employés", className: "bg-purple-50 text-purple-700 border-purple-200" }
          ]}
          actions={[
            {
              label: "Exporter",
              icon: Download,
              variant: "outline",
              onClick: () => console.log('Export clicked')
            },
            {
              label: "Générer rapport",
              icon: FileText,
              onClick: () => console.log('Report clicked')
            }
          ]}
        />

        {/* Content Container */}
        <div className="flex-1 p-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Actions recommandées en premier */}
            <Card variant="elevated" className="w-full border-l-2 border-l-accent-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-accent-50 rounded-lg flex items-center justify-center">
                    <Lightning size={16} className="text-accent-600" weight="duotone" />
                  </div>
                  <CardTitle  className="text-neutral-900">
                    Actions recommandées
                  </CardTitle>
                </div>
                <CardDescription>
                  Opportunités d'amélioration pour optimiser votre performance et celle de votre équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardActionGroup>
                  <CardAction
                    icon={GraduationCap}
                    title="Formation recommandée : Leadership avancé"
                    description="Développez vos compétences en management pour accompagner votre équipe vers l'excellence."
                    badge="Nouveau"
                    badgeVariant="success"
                    priority="high"
                    actionLabel="S'inscrire"
                    onAction={() => console.log('Formation clicked')}
                  />
                  
                  <CardAction
                    icon={Target}
                    title="Définir vos objectifs Q1 2025"
                    description="Planifiez vos objectifs du prochain trimestre en alignement avec la stratégie d'entreprise."
                    badge="Échéance : 15 déc"
                    badgeVariant="warning"
                    priority="normal"
                    actionLabel="Commencer"
                    onAction={() => console.log('Objectifs clicked')}
                  />
                </CardActionGroup>
              </CardContent>
            </Card>

            {/* DataTable - Liste employés */}
            <Card variant="default" className="w-full">
              <CardHeader>
                <CardTitle  className="text-neutral-900">
                  Liste des employés
                </CardTitle>
                <CardDescription className="mt-1">
                  Gestion et suivi de tous les collaborateurs de l'entreprise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={employeeData}
                  columns={[
                    {
                      key: 'name',
                      label: 'Nom',
                      sortable: true,
                      render: (value: any, row: EmployeeData) => (
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                            <span className="text-neutral-600 text-xs font-medium">{String(value).charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900">{String(value)}</p>
                            <p className="text-sm text-neutral-500">{row.role}</p>
                          </div>
                        </div>
                      )
                    },
                    {
                      key: 'department',
                      label: 'Département',
                      sortable: true
                    },
                    {
                      key: 'email',
                      label: 'Email',
                      sortable: true
                    },
                    {
                      key: 'status',
                      label: 'Statut',
                      render: (value: any) => (
                        <Badge 
                          variant="outline"
                          className={
                            String(value) === 'Actif' ? 'text-green-700 border-green-200' :
                            String(value) === 'En congé' ? 'text-orange-700 border-orange-200' :
                            'text-gray-700 border-gray-200'
                          }
                        >
                          {String(value)}
                        </Badge>
                      )
                    },
                    {
                      key: 'joinDate',
                      label: 'Date d\'embauche',
                      sortable: true,
                      render: (value: any) => new Date(String(value)).toLocaleDateString('fr-FR')
                    },
                    {
                      key: 'performance',
                      label: 'Performance',
                      sortable: true,
                      render: (value: any) => {
                        const numValue = Number(value);
                        return (
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{numValue}%</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full">
                              <div 
                                className={`h-2 rounded-full ${
                                  numValue >= 90 ? 'bg-green-500' :
                                  numValue >= 80 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`}
                                style={{ width: `${numValue}%` }}
                              />
                            </div>
                          </div>
                        );
                      }
                    }
                  ]}
                  searchable={true}
                  sortable={true}
                  paginated={true}
                  pageSize={5}
                />
              </CardContent>
            </Card>

            {/* Stats Section */}
            <Card variant="default" className="w-full">
              <CardHeader>
                <CardTitle  className="text-neutral-900">
                  Métriques clés
                </CardTitle>
                <CardDescription className="mt-1">
                  Indicateurs de performance et statistiques importantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <StatCard 
                      key={index} 
                      title={stat.title}
                      value={stat.value}
                      icon={stat.icon}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions rapides */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Actions rapides
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600">
                  Accès direct aux fonctionnalités les plus utilisées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className=" border-l-4 border-l-hr-employee">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 hr-entity-employee border rounded-lg flex items-center justify-center">
                          <UsersThree size={20} weight="duotone" />
                        </div>
                        <CardTitle className="text-lg">Gestion d'équipe</CardTitle>
                      </div>
                      <CardDescription>
                        Gérer les employés, les équipes et l'organisation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <ActionButton variant="primary" size="sm" icon={Plus}>
                          Nouvel employé
                        </ActionButton>
                        <ActionButtonWithBadge 
                          variant="outline" 
                          size="sm" 
                          icon={FileText}
                          badge="3"
                          badgeVariant="warning"
                        >
                          Contrats
                        </ActionButtonWithBadge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className=" border-l-4 border-l-hr-training">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 hr-entity-training border rounded-lg flex items-center justify-center">
                          <GraduationCap size={20} weight="duotone" />
                        </div>
                        <CardTitle className="text-lg">Formation</CardTitle>
                      </div>
                      <CardDescription>
                        Programmes de formation et développement des compétences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <ActionButton variant="warning" size="sm" icon={Calendar}>
                          Planifier
                        </ActionButton>
                        <ActionButton variant="outline" size="sm" icon={Eye}>
                          Voir tout
                        </ActionButton>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className=" border-l-4 border-l-status-success">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 status-success border border-green-200 rounded-lg flex items-center justify-center">
                          <ChartBar size={20} weight="duotone" />
                        </div>
                        <CardTitle className="text-lg">Performance</CardTitle>
                      </div>
                      <CardDescription>
                        Suivi des objectifs et évaluation des performances
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <ActionButton variant="success" size="sm" icon={Target}>
                          Objectifs
                        </ActionButton>
                        <ActionButton variant="outline" size="sm" icon={TrendUp}>
                          Analyses
                        </ActionButton>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Business Entities */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Entités métier RH
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600">
                  Représentation visuelle des différentes entités RH avec leurs couleurs dédiées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <BusinessEntityCard entity="employee" icon={UsersThree} />
                  <BusinessEntityCard entity="job" icon={BriefcaseMetal} />
                  <BusinessEntityCard entity="position" icon={Chair} />
                  <BusinessEntityCard entity="training" icon={GraduationCap} />
                  <BusinessEntityCard entity="skill" icon={Medal} />
                  <BusinessEntityCard entity="team" icon={Users} />
                </div>
              </CardContent>
            </Card>

            {/* Activité récente */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Activité récente
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600">
                  Dernières actions et événements dans la plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: UsersThree,
                      color: "blue",
                      action: "Nouvel employé ajouté",
                      details: "Sarah Chen a rejoint l'équipe Développement",
                      time: "Il y a 2 heures"
                    },
                    {
                      icon: GraduationCap,
                      color: "yellow",
                      action: "Formation terminée",
                      details: "Module 'Leadership avancé' complété par 8 employés",
                      time: "Il y a 4 heures"
                    },
                    {
                      icon: Target,
                      color: "green",
                      action: "Objectif atteint",
                      details: "Équipe Marketing a dépassé l'objectif Q4 de 12%",
                      time: "Il y a 1 jour"
                    },
                    {
                      icon: FileText,
                      color: "indigo",
                      action: "Contrat renouvelé",
                      details: "3 contrats CDD convertis en CDI",
                      time: "Il y a 2 jours"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                        activity.color === 'blue' ? 'hr-entity-employee' :
                        activity.color === 'yellow' ? 'hr-entity-training' :
                        activity.color === 'green' ? 'status-success' :
                        'hr-entity-contract'
                      }`}>
                        <activity.icon size={18} weight="duotone" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {activity.action}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {activity.details}
                        </p>
                        <div className="flex items-center gap-2">
                          <ClockCounterClockwise size={14} className="text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card variant="default" className="w-full">
              <CardHeader>
                <CardTitle  className="text-neutral-900">
                  Vue d'ensemble des compétences
                </CardTitle>
                <CardDescription className="mt-1">
                  Radar des compétences de l'équipe avec indicateurs de performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsHeatmap className="w-full" showHeader={false} showCard={false} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;