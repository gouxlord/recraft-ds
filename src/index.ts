// Design System Main Index - Monorepo Export
// Central export file for @company/design-system package

// Core UI Components
export { Button, buttonVariants } from './components/ui/button';
export type { ButtonProps } from './components/ui/button';

export { Badge, badgeVariants } from './components/ui/badge';
export type { BadgeProps } from './components/ui/badge';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';
export type { CardProps, CardVariant } from './components/ui/card';

export { Input } from './components/ui/input';
export { Checkbox } from './components/ui/checkbox';
export { Switch } from './components/ui/switch';
export { Progress } from './components/ui/progress';
export { Skeleton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonProfile } from './components/ui/skeleton';
export { Spinner, LoadingSpinner, ButtonSpinner, PageSpinner, SectionSpinner } from './components/ui/spinner';

// Form Components
export { default as Select } from './components/ui/select';
export { RadioGroup, RadioGroupItem } from './components/ui/radio';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

// Layout Components
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/ui/table';
export { default as DataTable } from './components/ui/data-table';
export { default as Modal } from './components/ui/modal';
export { default as PageHeader } from './components/ui/page-header';

// Navigation Components
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis } from './components/ui/breadcrumb';
export { default as NavigationBar, NavigationItem, NavigationAction, UserMenu } from './components/ui/navigation-bar';
export { default as SidebarMenu, SidebarMenuItem, SidebarMenuGroup, SidebarHeader } from './components/ui/sidebar-menu';

// Interactive Components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
export { default as DatePicker } from './components/ui/date-picker';
export { default as FileUpload } from './components/ui/file-upload';
export { default as EmptyState, EmptyEmployees, EmptyTraining, EmptySearchResults, EmptyGoals } from './components/ui/empty-state';

// Action Components
export { default as ActionButton, ActionButtonWithBadge, FloatingActionButton, FloatingActionGroup } from './components/ui/action-button';
export { default as ActionCard, TrainingCard, MentoringCard, ReadingCard, GoalCard } from './components/ui/action-card';
export { default as CardAction, CardActionGroup, QuickAction } from './components/ui/card-action';

// Feedback Components
export { createToast, ToastProvider, CustomToast, useToast } from './components/ui/toast';

// HR-Specific Components
export { BusinessEntityBadge, BusinessEntityCard, SkillStatusBadge, SkillStatusCard } from './components/ui/business-entity';
export { default as StatCard } from './components/ui/stat-card';
export { default as EmployeeInfo, EmployeeInfoSection } from './components/ui/employee-info';

// New v1.0 Components
export { default as CompetenceMiniCard } from './components/ui/competence-mini-card';
export type { CompetenceMiniCardProps, CompetenceLevel } from './components/ui/competence-mini-card';

export { default as JobMetricCard } from './components/ui/job-metric-card';
export type { JobMetricCardProps } from './components/ui/job-metric-card';

export { default as JobDescriptionCard } from './components/ui/job-description-card';
export type { JobDescriptionCardProps } from './components/ui/job-description-card';

export { default as EvolutionWishCard } from './components/ui/evolution-wish-card';
export type { EvolutionWishCardProps } from './components/ui/evolution-wish-card';

export { default as HelpLink } from './components/ui/help-link';
export type { HelpLinkProps } from './components/ui/help-link';

// Utilities
export { cn } from './lib/utils';

// Types
export * from './types/index';