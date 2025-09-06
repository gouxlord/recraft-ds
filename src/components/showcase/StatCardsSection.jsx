import React from 'react';
import StatCard from '../ui/stat-card';
import { Users, GraduationCap, Target, TrendUp } from '@phosphor-icons/react';

const StatCardsSection = () => {
  return (
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
  );
};

export default StatCardsSection;