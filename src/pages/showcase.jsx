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
import { Toast, useToast } from '../components/ui/toast';
import { RadioGroup, RadioOption } from '../components/ui/radio';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Skeleton, SkeletonCard, SkeletonTable, SkeletonProfile } from '../components/ui/skeleton';
import { LoadingSpinner, PageSpinner, SectionSpinner } from '../components/ui/spinner';
import DatePicker from '../components/ui/date-picker';
import FileUpload from '../components/ui/file-upload';
import ActionCard, { TrainingCard, MentoringCard, ReadingCard } from '../components/ui/action-card';
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
  Trash,
  PencilSimple,
  Eye
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
    <div className="min-h-screen bg-gray-50 p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Design System HR SaaS
          </h1>
          <p className="text-lg text-gray-600">
            Showcase de tous les composants du design system
          </p>
        </div>

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

        {/* Data Display Advanced */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Affichage avancé</h2>
          
          {/* Accordion */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Accordion</h3>
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible defaultValue="item1">
                  <AccordionItem value="item1">
                    <AccordionTrigger>
                      Comment gérer les évaluations ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Vous pouvez créer et assigner des évaluations à vos employés via le module RH. 
                      Les évaluations peuvent être périodiques ou ponctuelles selon vos besoins.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item2">
                    <AccordionTrigger>
                      Planification des formations
                    </AccordionTrigger>
                    <AccordionContent>
                      Planifiez des formations en groupe ou individuelles. Le système enverra 
                      automatiquement des rappels aux participants.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item3">
                    <AccordionTrigger>
                      Suivi des compétences
                    </AccordionTrigger>
                    <AccordionContent>
                      Suivez l'évolution des compétences de vos équipes avec des tableaux de bord 
                      détaillés et des rapports personnalisables.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Loading States */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">États de chargement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Skeleton Loading</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkeletonCard />
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Spinners</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <LoadingSpinner text="Chargement des données..." />
                  <div className="flex gap-4 justify-center">
                    <SectionSpinner />
                  </div>
                </CardContent>
              </Card>
            </div>
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
                <Button variant="outline" onClick={() => success('Succès !', 'Action réalisée avec succès')}>
                  Toast Succès
                </Button>
                <Button variant="outline" onClick={() => error('Erreur !', 'Une erreur est survenue')}>
                  Toast Erreur
                </Button>
                <Button variant="outline" onClick={() => warning('Attention !', 'Vérifiez vos données')}>
                  Toast Warning
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sidebar Menu */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Menu latéral principal</CardTitle>
                <CardDescription>Navigation principale de l'application</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg transition-colors">
                    <House size={18} weight="duotone" />
                    Tableau de bord
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <Users size={18} weight="duotone" />
                    Employés
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChartBar size={18} weight="duotone" />
                    Analytics
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <GraduationCap size={18} weight="duotone" />
                    Formations
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <Calendar size={18} weight="duotone" />
                    Planning
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <FolderOpen size={18} weight="duotone" />
                    Documents
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Top Navigation */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Barre de navigation supérieure</CardTitle>
                <CardDescription>Navigation horizontale avec actions</CardDescription>
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

            {/* Dropdown Menu */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Menu déroulant utilisateur</CardTitle>
                <CardDescription>Actions utilisateur et paramètres</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="w-48 bg-white border border-gray-200 rounded-lg shadow-large">
                    <div className="p-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <UserCircle size={18} className="text-primary-600" weight="duotone" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Marie Dupont</p>
                          <p className="text-xs text-gray-500">marie.dupont@company.com</p>
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