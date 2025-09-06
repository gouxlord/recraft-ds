import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Input } from '../components/ui/input';
import Select from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import StatCard from '../components/ui/stat-card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import DataTable from '../components/ui/data-table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { 
  Modal, 
  ModalHeader, 
  ModalTitle, 
  ModalContent, 
  ModalFooter 
} from '../components/ui/modal';
import { createToast, useToast } from '../components/ui/toast';
import { RadioGroup, RadioOption } from '../components/ui/radio';
import { Skeleton, SkeletonCard, SkeletonTable, SkeletonProfile } from '../components/ui/skeleton';
import { LoadingSpinner, PageSpinner, SectionSpinner } from '../components/ui/spinner';
import DatePicker from '../components/ui/date-picker';
import FileUpload from '../components/ui/file-upload';
import ActionCard, { TrainingCard, MentoringCard, ReadingCard } from '../components/ui/action-card';
import ActionButton, { ActionButtonWithBadge } from '../components/ui/action-button';
import CardAction, { CardActionGroup, QuickAction } from '../components/ui/card-action';
import PageHeader from '../components/ui/page-header';
import NavigationBar from '../components/ui/navigation-bar';
import SidebarMenu from '../components/ui/sidebar-menu';
import { BusinessEntityCard, SkillStatusCard, BusinessEntityBadge, BUSINESS_ENTITIES, SKILL_STATUS } from '../components/ui/business-entity';
import EmptyState, { 
  EmptyEmployees, 
  EmptyTraining, 
  EmptySearchResults 
} from '../components/ui/empty-state';
import EmployeeProfileCard from '../components/hr/employee-profile-card';
import SkillsRadar from '../components/hr/skills-radar';
import SkillsHeatmap from '../components/hr/skills-heatmap';
import CareerTimeline from '../components/hr/career-timeline';
import { 
  Users, 
  TrendUp, 
  GraduationCap, 
  Target,
  Plus,
  Download,
  Upload,
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
  CaretRight,
  Trash,
  PencilSimple,
  Eye,
  Buildings,
  ClockCounterClockwise,
  FileText,
  BriefcaseMetal,
  Chair,
  Lightning,
  UsersThree,
  Notebook,
  Medal,
  Warning,
  CircleDashed,
  CheckCircle,
  Crown
} from '@phosphor-icons/react';

const ShowcasePage = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [checkedState, setCheckedState] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectedDate, setSelectedDate] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const { success, error, warning, info } = useToast();

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const tableData = [
    { id: 1, name: 'Marie Dupont', role: 'RH Manager', department: 'Ressources Humaines', status: 'active' },
    { id: 2, name: 'Jean Martin', role: 'Développeur Senior', department: 'Tech', status: 'active' },
    { id: 3, name: 'Sophie Bernard', role: 'Product Manager', department: 'Product', status: 'leave' },
    { id: 4, name: 'Pierre Durand', role: 'Designer UX', department: 'Design', status: 'active' },
  ];

  const sampleEmployee = {
    name: "Marie Dupont",
    role: "RH Manager",
    department: "Ressources Humaines",
    email: "marie.dupont@company.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    joinDate: "Janvier 2020",
    skills: ["Leadership", "Communication", "Gestion d'équipe", "Recrutement"],
    performance: 92,
    status: "active"
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Page Header using PageHeader component */}
      <PageHeader
        icon={UsersThree}
        iconColor="blue"
        title="Design System HR SaaS"
        subtitle="Showcase complet de tous les composants et patterns du design system pour applications RH"
        statusBadge={{
          label: "v2.1.0",
          className: "bg-green-50 text-green-700 border-green-200"
        }}
        badges={[
          { label: "Design System", className: "bg-blue-50 text-blue-700 border-blue-200" },
          { label: "React", className: "bg-purple-50 text-purple-700 border-purple-200" },
          { label: "Tailwind CSS", className: "bg-orange-50 text-orange-700 border-orange-200" },
          { label: "Phosphor Icons", className: "bg-teal-50 text-teal-700 border-teal-200" }
        ]}
        actions={[
          {
            label: "Exporter",
            icon: Download,
            variant: "outline",
            onClick: () => createToast.info('Code exporté', 'Composants exportés avec succès')
          },
          {
            label: "Prévisualiser",
            icon: Eye,
            variant: "outline"
          },
          {
            label: "Créer un composant",
            icon: Plus,
            onClick: () => createToast.success('Composant créé', 'Nouveau composant ajouté au design system')
          }
        ]}
      />

      <div className="max-w-7xl mx-auto p-8 space-y-12">

        {/* Page Header Component */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Header de page</h2>
          
          {/* Header simple */}
          <div className="mb-8">
            <PageHeader
              icon={BriefcaseMetal}
              iconColor="purple"
              title="Référentiel des Métiers"
              subtitle="Catalogue complet des métiers et spécialisations de l'entreprise"
              statusBadge={{
                label: "Actif",
                className: "bg-blue-50 text-blue-700 border-blue-200"
              }}
              badges={[
                { label: "Référentiel", className: "bg-purple-50 text-purple-700 border-purple-200 text-xs" },
                { label: "Métiers", className: "bg-orange-50 text-orange-700 border-orange-200 text-xs" },
                { label: "Compétences", className: "bg-teal-50 text-teal-700 border-teal-200 text-xs" }
              ]}
              actions={[
                {
                  label: "Modifier",
                  icon: PencilSimple,
                  variant: "outline",
                  size: "sm"
                },
                {
                  label: "Ajouter",
                  icon: Plus,
                  size: "sm"
                }
              ]}
            />
          </div>

          {/* Header avec informations 2 colonnes */}
          <div className="mb-8">
            <PageHeader
              icon={Users}
              iconColor="blue"
              title="Gestion des Employés"
              subtitle="Vue d'ensemble de votre équipe et de leurs performances"
              statusBadge={{
                label: "127 actifs",
                className: "bg-green-50 text-green-700 border-green-200"
              }}
              badges={[
                { label: "RH", className: "bg-blue-50 text-blue-700 border-blue-200 text-xs" },
                { label: "Management", className: "bg-indigo-50 text-indigo-700 border-indigo-200 text-xs" }
              ]}
              actions={[
                {
                  label: "Exporter",
                  icon: Download,
                  variant: "outline",
                  size: "sm"
                },
                {
                  label: "Nouveau",
                  icon: Plus,
                  size: "sm"
                }
              ]}
              infoSections={[
                {
                  title: "ÉQUIPE",
                  fields: [
                    { label: "Responsable RH", value: "Marie Dubois" },
                    { label: "Effectif total", value: "127 employés" },
                    { label: "Dernière évaluation", value: "Q3 2024" }
                  ]
                },
                {
                  title: "PERFORMANCES",
                  fields: [
                    { label: "Taux de satisfaction", value: "94%" },
                    { label: "Turnover annuel", value: "8.2%" },
                    { label: "Absentéisme", value: "3.1%" }
                  ]
                }
              ]}
            />
          </div>

          {/* Header avec informations 3 colonnes */}
          <div className="mb-8">
            <PageHeader
              icon={GraduationCap}
              iconColor="yellow"
              title="Centre de Formation"
              subtitle="Développez les compétences de vos équipes avec nos programmes personnalisés"
              statusBadge={{
                label: "15 formations",
                className: "bg-orange-50 text-orange-700 border-orange-200"
              }}
              badges={[
                { label: "Formation", className: "bg-yellow-50 text-yellow-700 border-yellow-200 text-xs" },
                { label: "E-learning", className: "bg-purple-50 text-purple-700 border-purple-200 text-xs" },
                { label: "Certifiant", className: "bg-green-50 text-green-700 border-green-200 text-xs" }
              ]}
              actions={[
                {
                  label: "Planifier",
                  icon: Calendar,
                  variant: "outline",
                  size: "sm"
                },
                {
                  label: "Créer formation",
                  icon: Plus,
                  size: "sm"
                }
              ]}
              infoSections={[
                {
                  title: "PROGRAMMES",
                  fields: [
                    { label: "Formations actives", value: "15" },
                    { label: "Modules e-learning", value: "28" },
                    { label: "Certifications", value: "7" }
                  ]
                },
                {
                  title: "PARTICIPANTS",
                  fields: [
                    { label: "Inscrits total", value: "89 employés" },
                    { label: "Taux completion", value: "87%" },
                    { label: "Satisfaction moyenne", value: "4.6/5" }
                  ]
                },
                {
                  title: "PLANIFICATION",
                  fields: [
                    { label: "Prochaine session", value: "12 Nov 2024" },
                    { label: "Budget utilisé", value: "68%" },
                    { label: "Formateurs", value: "12 actifs" }
                  ]
                }
              ]}
            />
          </div>

        </section>

        {/* Colors Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Palette de couleurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Primary (Violet)</h3>
              <div className="space-y-2">
                {[
                  { shade: 50, hex: '#F3EFFD' },
                  { shade: 100, hex: '#E7DFFB' },
                  { shade: 200, hex: '#D0BFF6' },
                  { shade: 300, hex: '#B99FF2' },
                  { shade: 400, hex: '#B18AF9' },
                  { shade: 500, hex: '#9B6FE8' },
                  { shade: 600, hex: '#8556D6' },
                  { shade: 700, hex: '#6E3DC4' },
                  { shade: 800, hex: '#5728A3' },
                  { shade: 900, hex: '#411C82' }
                ].map(({ shade, hex }) => (
                  <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                    <div 
                      className="w-12 h-8 rounded shadow-sm border border-gray-200"
                      style={{ backgroundColor: hex }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{shade}</span>
                        <span className="text-xs text-gray-500 font-mono">{hex}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Secondary (Orange)</h3>
              <div className="space-y-2">
                {[
                  { shade: 50, hex: '#FFF3EF' },
                  { shade: 100, hex: '#FFE7DE' },
                  { shade: 200, hex: '#FFCFBD' },
                  { shade: 300, hex: '#FFB79C' },
                  { shade: 400, hex: '#FF9F7B' },
                  { shade: 500, hex: '#FF6D33' },
                  { shade: 600, hex: '#FF4500' },
                  { shade: 700, hex: '#CC3700' },
                  { shade: 800, hex: '#992900' },
                  { shade: 900, hex: '#661B00' }
                ].map(({ shade, hex }) => (
                  <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                    <div 
                      className="w-12 h-8 rounded shadow-sm border border-gray-200"
                      style={{ backgroundColor: hex }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{shade}</span>
                        <span className="text-xs text-gray-500 font-mono">{hex}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gray Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Gray</h3>
              <div className="space-y-2">
                {[
                  { shade: 50, hex: '#F9FAFB' },
                  { shade: 100, hex: '#F3F4F6' },
                  { shade: 200, hex: '#E5E7EB' },
                  { shade: 300, hex: '#D1D5DB' },
                  { shade: 400, hex: '#9CA3AF' },
                  { shade: 500, hex: '#6B7280' },
                  { shade: 600, hex: '#4B5563' },
                  { shade: 700, hex: '#374151' },
                  { shade: 800, hex: '#1F2937' },
                  { shade: 900, hex: '#111827' }
                ].map(({ shade, hex }) => (
                  <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                    <div 
                      className="w-12 h-8 rounded shadow-sm border border-gray-200"
                      style={{ backgroundColor: hex }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{shade}</span>
                        <span className="text-xs text-gray-500 font-mono">{hex}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Sémantiques</h3>
              <div className="space-y-2">
                {/* Success */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-success-700">Success</h4>
                  {[
                    { shade: 50, hex: '#F0FDF4' },
                    { shade: 500, hex: '#22C55E' },
                    { shade: 600, hex: '#16A34A' },
                    { shade: 700, hex: '#15803D' }
                  ].map(({ shade, hex }) => (
                    <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                      <div 
                        className="w-8 h-6 rounded shadow-sm border border-gray-200"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <span className="text-xs font-medium text-gray-900">{shade}</span>
                      <span className="text-xs text-gray-500 font-mono">{hex}</span>
                    </div>
                  ))}
                </div>

                {/* Warning */}
                <div className="space-y-1 mt-3">
                  <h4 className="text-sm font-medium text-warning-700">Warning</h4>
                  {[
                    { shade: 50, hex: '#FFFBEB' },
                    { shade: 500, hex: '#F59E0B' },
                    { shade: 600, hex: '#D97706' },
                    { shade: 700, hex: '#B45309' }
                  ].map(({ shade, hex }) => (
                    <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                      <div 
                        className="w-8 h-6 rounded shadow-sm border border-gray-200"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <span className="text-xs font-medium text-gray-900">{shade}</span>
                      <span className="text-xs text-gray-500 font-mono">{hex}</span>
                    </div>
                  ))}
                </div>

                {/* Error */}
                <div className="space-y-1 mt-3">
                  <h4 className="text-sm font-medium text-error-700">Error</h4>
                  {[
                    { shade: 50, hex: '#FEF2F2' },
                    { shade: 500, hex: '#EF4444' },
                    { shade: 600, hex: '#DC2626' },
                    { shade: 700, hex: '#B91C1C' }
                  ].map(({ shade, hex }) => (
                    <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                      <div 
                        className="w-8 h-6 rounded shadow-sm border border-gray-200"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <span className="text-xs font-medium text-gray-900">{shade}</span>
                      <span className="text-xs text-gray-500 font-mono">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Typographie</h2>
          <Card className="hover-lift animate-slide-up">
            <CardContent className="pt-6">
              <div className="space-y-8">
                {/* Headings */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Titres</h4>
                  <div className="space-y-3">
                    <div className="mb-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                      <p className="text-sm text-primary-700">
                        <strong>Police Lexend</strong> - Utilisée pour tous les titres pour une meilleure lisibilité et un aspect moderne.
                      </p>
                    </div>
                    <h1 className="font-heading text-4xl font-bold text-gray-900">Titre H1 - Grande taille (Lexend)</h1>
                    <h2 className="font-heading text-3xl font-semibold text-gray-900">Titre H2 - Moyenne taille (Lexend)</h2>
                    <h3 className="font-heading text-2xl font-semibold text-gray-900">Titre H3 - Section (Lexend)</h3>
                    <h4 className="font-heading text-xl font-medium text-gray-900">Titre H4 - Sous-section (Lexend)</h4>
                    <h5 className="font-heading text-lg font-medium text-gray-900">Titre H5 - Petit titre (Lexend)</h5>
                    <h6 className="font-heading text-base font-medium text-gray-900">Titre H6 - Mini titre (Lexend)</h6>
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Texte de corps</h4>
                  <div className="space-y-3">
                    <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Police Inter</strong> - Utilisée pour tout le texte de corps, optimisée pour la lisibilité à l'écran.
                      </p>
                    </div>
                    <p className="text-lg text-gray-900">
                      Texte large (Inter) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-base text-gray-900">
                      Texte normal - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <p className="text-sm text-gray-600">
                      Texte petit - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </p>
                    <p className="text-xs text-gray-500">
                      Texte très petit - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Text Styles */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Styles de texte</h4>
                  <div className="space-y-2">
                    <p className="text-base font-bold text-gray-900">Texte en gras</p>
                    <p className="text-base font-semibold text-gray-900">Texte semi-gras</p>
                    <p className="text-base font-medium text-gray-900">Texte medium</p>
                    <p className="text-base font-normal text-gray-900">Texte normal</p>
                    <p className="text-base font-light text-gray-600">Texte léger</p>
                    <p className="text-base italic text-gray-600">Texte italique</p>
                    <p className="text-base underline text-gray-900">Texte souligné</p>
                    <p className="text-base line-through text-gray-500">Texte barré</p>
                    <p className="text-base uppercase tracking-wide text-gray-700">Texte majuscules</p>
                    <p className="text-base font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">Code monospace</p>
                  </div>
                </div>

                {/* Color Variations */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Couleurs de texte</h4>
                  <div className="space-y-2">
                    <p className="text-base text-gray-900">Texte principal - Gray 900</p>
                    <p className="text-base text-gray-700">Texte secondaire - Gray 700</p>
                    <p className="text-base text-gray-600">Texte tertiaire - Gray 600</p>
                    <p className="text-base text-gray-500">Texte subtil - Gray 500</p>
                    <p className="text-base text-primary-600">Texte primaire - Primary 600</p>
                    <p className="text-base text-secondary-600">Texte secondaire - Secondary 600</p>
                    <p className="text-base text-success-600">Texte succès - Success 600</p>
                    <p className="text-base text-warning-600">Texte attention - Warning 600</p>
                    <p className="text-base text-error-600">Texte erreur - Error 600</p>
                  </div>
                </div>

                {/* Line Height & Spacing */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Espacement et hauteur de ligne</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Interligne serré (leading-tight)</p>
                      <p className="text-base leading-tight text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Interligne normal (leading-normal)</p>
                      <p className="text-base leading-normal text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Interligne aéré (leading-relaxed)</p>
                      <p className="text-base leading-relaxed text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lists */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Listes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Liste à puces</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Premier élément de liste</li>
                        <li>Deuxième élément de liste</li>
                        <li>Troisième élément avec du texte plus long pour tester le retour à la ligne</li>
                        <li>Quatrième élément</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Liste numérotée</p>
                      <ol className="list-decimal list-inside space-y-1 text-gray-600">
                        <li>Premier élément numéroté</li>
                        <li>Deuxième élément numéroté</li>
                        <li>Troisième élément avec du texte plus long pour tester le retour à la ligne</li>
                        <li>Quatrième élément numéroté</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Liens</h4>
                  <div className="space-y-2">
                    <p className="text-base text-gray-600">
                      Voici un <a href="#" className="text-primary-600 hover:text-primary-700 underline hover:no-underline transition-colors">lien principal</a> dans du texte.
                    </p>
                    <p className="text-base text-gray-600">
                      Voici un <a href="#" className="text-secondary-600 hover:text-secondary-700 underline hover:no-underline transition-colors">lien secondaire</a> dans du texte.
                    </p>
                    <p className="text-base text-gray-600">
                      Voici un <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">lien subtil</a> dans du texte.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Boutons</h2>
          <Card className="hover-lift animate-slide-up">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus size={20} /></Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button className="gap-2"><Download size={16} /> With Icon</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Badges</h2>
          <Card className="hover-lift animate-slide-up">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Progress Bars</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Progress value={25} />
              <Progress value={50} variant="secondary" />
              <Progress value={75} variant="success" />
              <Progress value={90} variant="warning" showLabel />
            </CardContent>
          </Card>
        </section>

        {/* Form Elements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Éléments de formulaire</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Input</label>
                <Input placeholder="Entrez du texte..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Input with error</label>
                <Input placeholder="Email invalide" error />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select</label>
                <Select 
                  options={selectOptions}
                  value={selectedValue}
                  onChange={setSelectedValue}
                  placeholder="Choisir une option"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    checked={checkedState}
                    onCheckedChange={setCheckedState}
                  />
                  <label className="text-sm text-gray-700">Checkbox</label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={switchState}
                    onCheckedChange={setSwitchState}
                  />
                  <label className="text-sm text-gray-700">Switch</label>
                </div>
              </div>
              
              {/* Radio Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Radio Group</label>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <RadioOption 
                    value="option1" 
                    label="Option 1" 
                    description="Description de l'option 1" 
                  />
                  <RadioOption 
                    value="option2" 
                    label="Option 2" 
                    description="Description de l'option 2" 
                  />
                  <RadioOption 
                    value="option3" 
                    label="Option 3" 
                  />
                </RadioGroup>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Picker</label>
                <DatePicker 
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Choisir une date"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
                <FileUpload
                  onFileSelect={setUploadedFiles}
                  accept="image/*,.pdf,.doc,.docx"
                  multiple={true}
                  maxSize={5 * 1024 * 1024} // 5MB
                />
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Loading States Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">États de chargement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Skeleton Loading</CardTitle>
                <CardDescription>Affichage de contenu en cours de chargement</CardDescription>
              </CardHeader>
              <CardContent>
                <SkeletonCard />
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Spinners</CardTitle>
                <CardDescription>Indicateurs de chargement animés</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <LoadingSpinner text="Chargement des données..." />
                <div className="flex gap-4 justify-center">
                  <SectionSpinner />
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <ActionButton variant="primary" loading>
                    Chargement
                  </ActionButton>
                  <ActionButton variant="secondary" icon={Upload}>
                    Upload terminé
                  </ActionButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Cards Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Action Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TrainingCard
              title="Formation React Avancé"
              description="Approfondissez vos connaissances en React avec les hooks avancés et les patterns modernes"
              category="Technique"
              duration="8 heures"
              participants={12}
              rating={4.8}
              status="available"
              onAction={() => alert('Commencer la formation')}
            />
            
            <MentoringCard
              title="Session Mentoring Leadership"
              description="Développez vos compétences de leadership avec un mentor expérimenté"
              category="Management" 
              duration="1 heure"
              status="available"
              dueDate="15 Mars 2024"
              onAction={() => alert('Planifier session')}
            />
            
            <TrainingCard
              title="Certification AWS"
              description="Préparation à la certification AWS Solutions Architect"
              category="Technique"
              duration="40 heures"
              participants={8}
              rating={4.9}
              progress={65}
              status="in_progress"
              onAction={() => alert('Continuer la formation')}
              actionLabel="Continuer"
            />
            
            <ReadingCard
              title="Guide des entretiens efficaces"
              description="Meilleures pratiques pour mener des entretiens d'évaluation constructifs"
              category="Management"
              duration="15 min"
              rating={4.5}
              status="available"
              onAction={() => alert('Lire article')}
            />
            
            <ActionCard
              type="goal"
              title="Objectif Q1 2024"
              description="Améliorer les processus RH et réduire les délais de traitement"
              progress={40}
              status="in_progress"
              dueDate="31 Mars 2024"
              onAction={() => alert('Voir objectif')}
              actionLabel="Voir les détails"
            />
            
            <TrainingCard
              title="Formation Communication"
              description="Améliorer sa communication interpersonnelle en entreprise"
              category="Communication"
              duration="6 heures"
              participants={15}
              rating={4.7}
              status="completed"
              progress={100}
              onAction={() => alert('Voir certificat')}
              actionLabel="Voir le certificat"
            />
          </div>
        </section>

        {/* Stat Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cartes de statistiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Employés"
              value="1,234"
              description="vs mois dernier"
              trend="up"
              trendValue="+12%"
              icon={Users}
            />
            <StatCard
              title="Formations actives"
              value="42"
              description="en cours"
              trend="up"
              trendValue="+5"
              icon={GraduationCap}
              variant="primary"
            />
            <StatCard
              title="Taux de complétion"
              value="87%"
              description="objectifs atteints"
              trend="neutral"
              icon={Target}
              variant="secondary"
            />
            <StatCard
              title="Performance"
              value="92.5"
              description="score moyen"
              trend="up"
              trendValue="+3.2"
              icon={TrendUp}
              variant="success"
            />
          </div>
        </section>

        {/* Table Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Table</h2>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Département</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.department}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={row.status === 'active' ? 'success' : 'warning'}
                        >
                          {row.status === 'active' ? 'Actif' : 'En congé'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost">
                            <Eye size={16} />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <PencilSimple size={16} />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* DataTable Section */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">DataTable avancée</h2>
          <Card>
            <CardHeader>
              <CardTitle>Table de données interactive</CardTitle>
              <CardDescription>
                Table avec recherche, filtres, tri, sélection, pagination et gestion des colonnes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={[
                  { 
                    id: 1, 
                    name: 'Marie Dupont', 
                    role: 'RH Manager', 
                    department: 'Ressources Humaines',
                    status: 'active',
                    salary: '65000€',
                    joinDate: '2020-01-15',
                    location: 'Paris',
                    experience: '8 ans'
                  },
                  { 
                    id: 2, 
                    name: 'Pierre Martin', 
                    role: 'Développeur Senior', 
                    department: 'IT',
                    status: 'active',
                    salary: '75000€',
                    joinDate: '2019-03-22',
                    location: 'Lyon',
                    experience: '10 ans'
                  },
                  { 
                    id: 3, 
                    name: 'Sophie Bernard', 
                    role: 'Designer UI/UX', 
                    department: 'Design',
                    status: 'leave',
                    salary: '58000€',
                    joinDate: '2021-06-10',
                    location: 'Paris',
                    experience: '5 ans'
                  },
                  { 
                    id: 4, 
                    name: 'Thomas Leroy', 
                    role: 'Chef de Projet', 
                    department: 'Gestion de Projet',
                    status: 'active',
                    salary: '68000€',
                    joinDate: '2018-11-05',
                    location: 'Toulouse',
                    experience: '12 ans'
                  },
                  { 
                    id: 5, 
                    name: 'Julie Moreau', 
                    role: 'Analyste Business', 
                    department: 'Stratégie',
                    status: 'active',
                    salary: '62000€',
                    joinDate: '2022-02-14',
                    location: 'Paris',
                    experience: '6 ans'
                  },
                  { 
                    id: 6, 
                    name: 'Laurent Petit', 
                    role: 'Développeur Frontend', 
                    department: 'IT',
                    status: 'active',
                    salary: '55000€',
                    joinDate: '2023-01-20',
                    location: 'Marseille',
                    experience: '3 ans'
                  },
                  { 
                    id: 7, 
                    name: 'Camille Robert', 
                    role: 'Responsable Marketing', 
                    department: 'Marketing',
                    status: 'leave',
                    salary: '70000€',
                    joinDate: '2020-08-12',
                    location: 'Lyon',
                    experience: '9 ans'
                  },
                  { 
                    id: 8, 
                    name: 'Nicolas Durand', 
                    role: 'Comptable', 
                    department: 'Finance',
                    status: 'active',
                    salary: '48000€',
                    joinDate: '2021-04-03',
                    location: 'Paris',
                    experience: '4 ans'
                  },
                  { 
                    id: 9, 
                    name: 'Émilie Blanc', 
                    role: 'Consultante', 
                    department: 'Conseil',
                    status: 'active',
                    salary: '72000€',
                    joinDate: '2019-09-30',
                    location: 'Nice',
                    experience: '11 ans'
                  },
                  { 
                    id: 10, 
                    name: 'Julien Fournier', 
                    role: 'Ingénieur DevOps', 
                    department: 'IT',
                    status: 'active',
                    salary: '78000€',
                    joinDate: '2020-05-18',
                    location: 'Bordeaux',
                    experience: '7 ans'
                  },
                  { 
                    id: 11, 
                    name: 'Céline Garnier', 
                    role: 'Juriste', 
                    department: 'Juridique',
                    status: 'leave',
                    salary: '65000€',
                    joinDate: '2022-07-25',
                    location: 'Paris',
                    experience: '8 ans'
                  },
                  { 
                    id: 12, 
                    name: 'Antoine Roux', 
                    role: 'Data Analyst', 
                    department: 'IT',
                    status: 'active',
                    salary: '60000€',
                    joinDate: '2023-03-15',
                    location: 'Lyon',
                    experience: '2 ans'
                  }
                ]}
                columns={[
                  { 
                    key: 'name', 
                    label: 'Nom complet',
                    render: (value, row) => (
                      <div className="font-medium text-gray-900">{value}</div>
                    )
                  },
                  { 
                    key: 'role', 
                    label: 'Poste'
                  },
                  { 
                    key: 'department', 
                    label: 'Département'
                  },
                  { 
                    key: 'status', 
                    label: 'Statut',
                    render: (value) => (
                      <Badge 
                        variant={value === 'active' ? 'success' : 'warning'}
                      >
                        {value === 'active' ? 'Actif' : 'En congé'}
                      </Badge>
                    )
                  },
                  { 
                    key: 'salary', 
                    label: 'Salaire',
                    align: 'right',
                    render: (value) => (
                      <span className="font-mono text-sm font-medium">{value}</span>
                    )
                  },
                  { 
                    key: 'location', 
                    label: 'Localisation'
                  },
                  { 
                    key: 'experience', 
                    label: 'Expérience',
                    align: 'center'
                  },
                  { 
                    key: 'joinDate', 
                    label: 'Date d\'embauche',
                    render: (value) => new Date(value).toLocaleDateString('fr-FR')
                  }
                ]}
                searchable={true}
                filterable={true}
                sortable={true}
                selectable={true}
                paginated={true}
                pageSize={5}
              />
            </CardContent>
          </Card>
        </section>

        {/* Navigation Components */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Navigation</h2>
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Breadcrumbs</h3>
            <Card>
              <CardContent className="pt-6">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/employees">Employés</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem isCurrentPage>
                    Marie Dupont
                  </BreadcrumbItem>
                </Breadcrumb>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tabs</h3>
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="profile">
                  <TabsList>
                    <TabsTrigger value="profile">Profil</TabsTrigger>
                    <TabsTrigger value="skills">Compétences</TabsTrigger>
                    <TabsTrigger value="history">Historique</TabsTrigger>
                  </TabsList>
                  <TabsContent value="profile">
                    <p className="text-gray-600">Informations du profil employé</p>
                  </TabsContent>
                  <TabsContent value="skills">
                    <p className="text-gray-600">Compétences et évaluations</p>
                  </TabsContent>
                  <TabsContent value="history">
                    <p className="text-gray-600">Historique de carrière</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Modal & Toast Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Interactions</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setIsModalOpen(true)}>
                  Ouvrir Modal
                </Button>
                <Button variant="outline" onClick={() => createToast.success('Succès !', 'Action réalisée avec succès')}>
                  Toast Succès
                </Button>
                <Button variant="outline" onClick={() => createToast.error('Erreur !', 'Une erreur est survenue')}>
                  Toast Erreur
                </Button>
                <Button variant="outline" onClick={() => createToast.warning('Attention !', 'Vérifiez vos données')}>
                  Toast Warning
                </Button>
                <Button variant="outline" onClick={() => createToast.info('Information', 'Voici une notification informative')}>
                  Toast Info
                </Button>
                <Button variant="outline" onClick={() => {
                  const promise = new Promise((resolve) => 
                    setTimeout(() => resolve('Données sauvegardées !'), 2000)
                  );
                  createToast.promise(promise, {
                    loading: 'Sauvegarde en cours...',
                    success: 'Sauvegarde terminée !',
                    error: 'Erreur lors de la sauvegarde'
                  });
                }}>
                  Toast Promise
                </Button>
                <Button variant="outline" onClick={() => createToast.success('Action avec bouton', 'Cliquez sur "Voir plus" pour en savoir plus', {
                  action: 'Voir plus',
                  onAction: () => alert('Action exécutée !')
                })}>
                  Toast avec Action
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader onClose={() => setIsModalOpen(false)}>
              <ModalTitle>Confirmer l'action</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-600">
                Êtes-vous sûr de vouloir effectuer cette action ? 
                Cette opération ne peut pas être annulée.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirmer
              </Button>
            </ModalFooter>
          </Modal>
        </section>

        {/* Empty States Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">États vides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Employés</CardTitle>
              </CardHeader>
              <CardContent>
                <EmptyEmployees onAddEmployee={() => alert('Ajouter employé')} />
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Formations</CardTitle>
              </CardHeader>
              <CardContent>
                <EmptyTraining onCreateTraining={() => alert('Créer formation')} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Menus Section */}
        <section>
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

        {/* Modern Action Buttons Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Boutons d'actions modernes</h2>
          <p className="text-gray-600 mb-8">Boutons avec effets visuels avancés pour attirer l'attention sur les actions importantes</p>
          
          <div className="space-y-8">
            {/* Basic Action Buttons */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Boutons basiques avec effets</CardTitle>
                <CardDescription>Gradients, ombres et animations hover</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <ActionButton variant="primary" icon={Lightning}>
                    Action principale
                  </ActionButton>
                  <ActionButton variant="secondary" icon={GraduationCap}>
                    Formation
                  </ActionButton>
                  <ActionButton variant="success" icon={Target}>
                    Valider
                  </ActionButton>
                  <ActionButton variant="warning" icon={Bell}>
                    Attention
                  </ActionButton>
                  <ActionButton variant="info" icon={Eye}>
                    Information
                  </ActionButton>
                  <ActionButton variant="outline" icon={Download}>
                    Télécharger
                  </ActionButton>
                  <ActionButton variant="glass" icon={Gear} className="bg-gradient-to-r from-primary-100 to-secondary-100">
                    Effet verre
                  </ActionButton>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Action Buttons */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Boutons avancés</CardTitle>
                <CardDescription>Avec badges, progress et états de chargement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Boutons avec badges */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Avec badges de notification</h4>
                    <div className="flex flex-wrap gap-4">
                      <ActionButtonWithBadge 
                        variant="primary" 
                        icon={Bell} 
                        badge="12"
                        badgeVariant="error"
                      >
                        Notifications
                      </ActionButtonWithBadge>
                      <ActionButtonWithBadge 
                        variant="outline" 
                        icon={Calendar} 
                        badge="3"
                        badgeVariant="warning"
                      >
                        Rendez-vous
                      </ActionButtonWithBadge>
                      <ActionButtonWithBadge 
                        variant="success" 
                        icon={Users} 
                        badge="5"
                        badgeVariant="success"
                      >
                        Nouvelles candidatures
                      </ActionButtonWithBadge>
                    </div>
                  </div>


                </div>
              </CardContent>
            </Card>

            {/* Action avec badge simple */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Bouton d'action avec badge</CardTitle>
                <CardDescription>Action avec indicateur ou notification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <ActionButtonWithBadge 
                    variant="primary" 
                    icon={UserCircle} 
                    badge="3"
                    badgeVariant="error"
                  >
                    Notifications
                  </ActionButtonWithBadge>
                  <ActionButtonWithBadge 
                    variant="outline" 
                    icon={Bell} 
                    badge="new"
                    badgeVariant="success"
                  >
                    Messages
                  </ActionButtonWithBadge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* HR Business Semantics Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Sémantique métier RH</h2>
          <p className="text-gray-600 mb-8">Ensemble des entités métier avec leurs icônes et couleurs associées</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <BusinessEntityCard entity="employee" icon={UsersThree} />
            <BusinessEntityCard entity="job" icon={BriefcaseMetal} />
            <BusinessEntityCard entity="position" icon={Chair} />
            <BusinessEntityCard entity="contract" icon={FileText} />
            <BusinessEntityCard entity="training" icon={GraduationCap} />
            <BusinessEntityCard entity="mission" icon={Notebook} />
            <BusinessEntityCard entity="skill" icon={Medal} />
            <BusinessEntityCard entity="team" icon={Users} />
          </div>

          {/* Compatibility Section with Heatmap Icons */}
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">Compatibilité avec la heatmap</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Critique */}
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
                  <Warning size={24} className="text-red-700" weight="duotone" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Critique</h3>
                <p className="text-xs text-gray-500">#B91C1C</p>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 mt-2">
                  Warning
                </Badge>
              </CardContent>
            </Card>

            {/* À améliorer */}
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
                  <CircleDashed size={24} className="text-orange-700" weight="duotone" />
                </div>
                <h3 className="font-semibold text-orange-700 mb-2">À améliorer</h3>
                <p className="text-xs text-gray-500">#C2410C</p>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 mt-2">
                  CircleDashed
                </Badge>
              </CardContent>
            </Card>

            {/* Acquis */}
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                  <CheckCircle size={24} className="text-green-700" weight="duotone" />
                </div>
                <h3 className="font-semibold text-green-700 mb-2">Acquis</h3>
                <p className="text-xs text-gray-500">#15803D</p>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mt-2">
                  CheckCircle
                </Badge>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                  <Crown size={24} className="text-yellow-500" weight="duotone" />
                </div>
                <h3 className="font-semibold text-green-700 mb-2">Expertise</h3>
                <p className="text-xs text-gray-500">Couronne dorée</p>
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 mt-2">
                  Crown
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Guide d'utilisation</CardTitle>
              <CardDescription>Comment utiliser ces entités métier dans vos interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Couleurs principales</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-blue-600"></div>
                      <span className="text-gray-600">Employé - Bleu (#3B82F6)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-purple-600"></div>
                      <span className="text-gray-600">Métier - Violet (#9333EA)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-green-600"></div>
                      <span className="text-gray-600">Poste - Vert (#059669)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-indigo-600"></div>
                      <span className="text-gray-600">Contrat - Indigo (#4F46E5)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-yellow-600"></div>
                      <span className="text-gray-600">Formation - Jaune (#D97706)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-slate-600"></div>
                      <span className="text-gray-600">Mission - Slate (#475569)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-teal-600"></div>
                      <span className="text-gray-600">Compétence - Teal (#0D9488)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-pink-600"></div>
                      <span className="text-gray-600">Équipe - Rose (#DB2777)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Exemples d'utilisation</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <UsersThree size={16} className="text-blue-600" weight="duotone" />
                      <span>Profils employés, annuaires RH</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BriefcaseMetal size={16} className="text-purple-600" weight="duotone" />
                      <span>Fiches métier, référentiel de postes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chair size={16} className="text-green-600" weight="duotone" />
                      <span>Organigramme, définitions de poste</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-indigo-600" weight="duotone" />
                      <span>Gestion contractuelle, avenants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-yellow-600" weight="duotone" />
                      <span>Catalogues de formation, parcours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Notebook size={16} className="text-red-600" weight="duotone" />
                      <span>Projets, objectifs, missions temporaires</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Medal size={16} className="text-teal-600" weight="duotone" />
                      <span>Référentiel compétences, évaluations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-pink-600" weight="duotone" />
                      <span>Groupes de travail, équipes projet</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section Statuts de la Heatmap */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Statuts de compétences (Heatmap)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">Couleurs de statut</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-red-600"></div>
                        <span className="text-gray-600">Critique - Rouge (#B91C1C)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-orange-600"></div>
                        <span className="text-gray-600">À améliorer - Orange (#C2410C)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-green-600"></div>
                        <span className="text-gray-600">Acquis - Vert (#15803D)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-yellow-500"></div>
                        <span className="text-gray-600">Expertise - Couronne dorée</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">Usage des icônes</h5>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Warning size={16} className="text-red-600" weight="duotone" />
                        <span>Compétences critiques nécessitant une action urgente</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CircleDashed size={16} className="text-orange-600" weight="duotone" />
                        <span>Compétences en développement, formation requise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" weight="duotone" />
                        <span>Compétences maîtrisées, niveau attendu atteint</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Crown size={16} className="text-yellow-500" weight="duotone" />
                        <span>Niveau d'expertise, mentor potentiel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Display Cards Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Display Cards</h2>
          <p className="text-gray-600 mb-8">Cartes d'affichage pour présenter du contenu structuré</p>
          
          <div className="space-y-8">
            {/* Standard Display Card */}
            <Card className="w-full hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      Évaluation des performances Q4 2024
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600">
                      Bilan des objectifs et résultats obtenus durant le dernier trimestre
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Exporter
                    </Button>
                    <Button size="sm">
                      <Eye size={16} className="mr-2" />
                      Consulter
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Actionnable Display Card */}
            <Card className="w-full hover-lift border-l-4 border-l-primary-500 bg-primary-50/30">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <Lightning size={14} className="text-primary-600" weight="duotone" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Actions recommandées
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      Opportunités d'amélioration pour optimiser votre performance et celle de votre équipe
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Calendar size={16} className="mr-2" />
                      Planifier
                    </Button>
                    <Button size="sm" className="bg-primary-600 hover:bg-primary-700 text-white">
                      <Lightning size={16} className="mr-2" />
                      Agir maintenant
                    </Button>
                  </div>
                </div>
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

                  <CardAction
                    icon={Users}
                    title="Feedback 360° disponible"
                    description="Recueillez les retours de vos collègues et superviseurs pour une évaluation complète."
                    badge="Urgent"
                    badgeVariant="error"
                    priority="urgent"
                    actionLabel="Voir"
                    onAction={() => console.log('Feedback clicked')}
                  />
                </CardActionGroup>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Actions rapides</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <QuickAction
                      icon={UserCircle}
                      label="Mettre à jour le profil"
                      variant="default"
                      onClick={() => console.log('Profil clicked')}
                    />
                    <QuickAction
                      icon={Calendar}
                      label="Planifier entretiens"
                      count="3"
                      variant="warning"
                      onClick={() => console.log('Entretiens clicked')}
                    />
                    <QuickAction
                      icon={FileText}
                      label="Valider documents"
                      count="7"
                      variant="success"
                      onClick={() => console.log('Documents clicked')}
                    />
                    <QuickAction
                      icon={Bell}
                      label="Configurer alertes"
                      variant="default"
                      onClick={() => console.log('Alertes clicked')}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* HR Components Section */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Composants RH</h2>
          
          {/* Skills Heatmap - Full Width */}
          <div className="mb-8">
            <SkillsHeatmap className="hover-lift" />
          </div>

        </section>
      </div>
    </div>
  );
};

export default ShowcasePage;