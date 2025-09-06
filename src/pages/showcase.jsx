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
import ColorsSection from '../components/showcase/ColorsSection';
import TypographySection from '../components/showcase/TypographySection';
import PageHeadersSection from '../components/showcase/PageHeadersSection';
import ButtonsSection from '../components/showcase/ButtonsSection';
import NavigationComponentsSection from '../components/showcase/NavigationComponentsSection';
import FormElementsSection from '../components/showcase/FormElementsSection';
import BadgesSection from '../components/showcase/BadgesSection';
import ProgressSection from '../components/showcase/ProgressSection';
import LoadingStatesSection from '../components/showcase/LoadingStatesSection';
import ActionCardsSection from '../components/showcase/ActionCardsSection';
import StatCardsSection from '../components/showcase/StatCardsSection';
import TablesSection from '../components/showcase/TablesSection';
import DataTableSection from '../components/showcase/DataTableSection';
import ModalToastSection from '../components/showcase/ModalToastSection';
import EmptyStatesSection from '../components/showcase/EmptyStatesSection';
import NavigationMenusSection from '../components/showcase/NavigationMenusSection';
import ModernActionButtonsSection from '../components/showcase/ModernActionButtonsSection';
import HRBusinessSemanticsSection from '../components/showcase/HRBusinessSemanticsSection';
import DisplayCardsSection from '../components/showcase/DisplayCardsSection';
import HRComponentsSection from '../components/showcase/HRComponentsSection';
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

        {/* ===== 1. 🎨 DESIGN TOKENS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Design Tokens</h1>
            <p className="text-gray-600">Fondations visuelles du design system : couleurs, typographie et tokens de base</p>
          </div>
          <ColorsSection />
          <TypographySection />
        </div>

        {/* ===== 2. 🧱 BASIC ELEMENTS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Éléments de base</h1>
            <p className="text-gray-600">Composants atomiques et éléments visuels simples</p>
          </div>
          <BadgesSection />
          <ProgressSection />
          <ButtonsSection />
          <ModernActionButtonsSection />
        </div>

        {/* ===== 3. 📝 FORMS & INPUTS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Formulaires & Saisie</h1>
            <p className="text-gray-600">Éléments de formulaire et composants de saisie</p>
          </div>
          <FormElementsSection />
        </div>

        {/* ===== 4. ⚡ STATES & FEEDBACK ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">États & Retours utilisateur</h1>
            <p className="text-gray-600">Gestion des états de l'interface et feedback utilisateur</p>
          </div>
          <LoadingStatesSection />
          <EmptyStatesSection />
          <ModalToastSection />
        </div>

        {/* ===== 5. 🧭 NAVIGATION ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Navigation</h1>
            <p className="text-gray-600">Systèmes de navigation et composants de déplacement</p>
          </div>
          <NavigationComponentsSection />
          <NavigationMenusSection />
        </div>

        {/* ===== 6. 📊 DATA VISUALIZATION ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Visualisation de données</h1>
            <p className="text-gray-600">Affichage et présentation de données structurées</p>
          </div>
          <StatCardsSection />
          <TablesSection />
          <DataTableSection />
        </div>

        {/* ===== 7. 🏗️ LAYOUT COMPONENTS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Composants de mise en page</h1>
            <p className="text-gray-600">Structure et organisation des pages</p>
          </div>
          <PageHeadersSection />
          <DisplayCardsSection />
        </div>

        {/* ===== 8. 🚀 INTERACTIVE COMPONENTS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Composants interactifs</h1>
            <p className="text-gray-600">Composants avancés avec interactions complexes</p>
          </div>
          <ActionCardsSection />
        </div>

        {/* ===== 9. 👥 BUSINESS COMPONENTS ===== */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Composants métier RH</h1>
            <p className="text-gray-600">Composants spécialisés pour les processus RH</p>
          </div>
          <HRBusinessSemanticsSection />
          <HRComponentsSection />
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
