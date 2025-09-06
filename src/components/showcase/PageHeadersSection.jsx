import React from 'react';
import PageHeader from '../ui/page-header';
import {
  Users,
  GraduationCap,
  BriefcaseMetal,
  PencilSimple,
  Plus,
  Download,
  Calendar
} from '@phosphor-icons/react';

const PageHeadersSection = () => {
  return (
    <section className="mb-12">
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
  );
};

export default PageHeadersSection;