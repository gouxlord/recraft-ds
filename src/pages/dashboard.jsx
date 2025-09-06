import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import StatCard from '../components/ui/stat-card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import SkillsRadar from '../components/hr/skills-radar';
import {
  Users,
  TrendUp,
  GraduationCap,
  Target,
  Calendar,
  Clock,
  ArrowRight,
  Warning,
  CheckCircle
} from '@phosphor-icons/react';

const DashboardPage = () => {
  const upcomingEvents = [
    { id: 1, title: 'Entretien annuel - Marie Dupont', time: '09:00', type: 'meeting' },
    { id: 2, title: 'Formation Leadership - Session 3', time: '14:00', type: 'training' },
    { id: 3, title: 'Revue trimestrielle équipe Tech', time: '16:30', type: 'review' }
  ];

  const recentActivities = [
    { id: 1, user: 'Jean Martin', action: 'a complété', target: 'Formation React Avancé', time: 'Il y a 2h', status: 'completed' },
    { id: 2, user: 'Sophie Bernard', action: 'a demandé', target: 'Congés du 15-20 Mars', time: 'Il y a 3h', status: 'pending' },
    { id: 3, user: 'Pierre Durand', action: 'a obtenu', target: 'Certification AWS', time: 'Hier', status: 'success' }
  ];

  const teamPerformance = [
    { name: 'Tech', performance: 92, members: 45 },
    { name: 'Product', performance: 88, members: 12 },
    { name: 'Design', performance: 95, members: 8 },
    { name: 'Marketing', performance: 78, members: 15 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord RH</h1>
          <p className="text-gray-500 mt-1">Bienvenue, Marie Dupont</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar size={16} />
            Aujourd'hui
          </Button>
          <Button className="gap-2">
            <TrendUp size={16} />
            Générer rapport
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
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
          description="en cours ce mois"
          trend="up"
          trendValue="+5"
          icon={GraduationCap}
          variant="primary"
        />
        <StatCard
          title="Taux de rétention"
          value="94.2%"
          description="sur 12 mois"
          trend="up"
          trendValue="+2.1%"
          icon={Target}
          variant="secondary"
        />
        <StatCard
          title="Score engagement"
          value="8.7/10"
          description="dernière enquête"
          trend="up"
          trendValue="+0.5"
          icon={TrendUp}
          variant="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Agenda */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Agenda du jour</span>
              <Badge variant="outline">{upcomingEvents.length} événements</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Clock size={18} className="text-gray-400" />
                    <span className="text-xs text-gray-500 mt-1">{event.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {event.type === 'meeting' && 'Réunion'}
                      {event.type === 'training' && 'Formation'}
                      {event.type === 'review' && 'Revue'}
                    </Badge>
                  </div>
                  <ArrowRight size={16} className="text-gray-400 mt-1" />
                </div>
              ))}
            </div>
            <Button variant="link" className="w-full mt-4 text-primary-600">
              Voir le calendrier complet →
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activités récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {activity.status === 'completed' && <CheckCircle size={20} className="text-success-600" weight="fill" />}
                    {activity.status === 'pending' && <Clock size={20} className="text-warning-600" weight="fill" />}
                    {activity.status === 'success' && <Target size={20} className="text-primary-600" weight="fill" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">{activity.user}</span>
                      <span className="text-gray-600"> {activity.action} </span>
                      <span className="font-medium text-gray-900">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Performance par équipe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamPerformance.map(team => (
                <div key={team.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{team.name}</span>
                      <Badge variant="outline" className="text-xs">{team.members} membres</Badge>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{team.performance}%</span>
                  </div>
                  <Progress 
                    value={team.performance} 
                    variant={team.performance >= 90 ? 'success' : team.performance >= 80 ? 'warning' : 'default'}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Overview */}
        <SkillsRadar showTarget={false} />
      </div>

      {/* Alerts Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Warning size={20} className="text-warning-600" />
            Actions requises
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-warning-50 rounded-lg border border-warning-200">
              <p className="font-medium text-warning-900">5 évaluations en attente</p>
              <p className="text-sm text-warning-700 mt-1">À compléter avant fin de semaine</p>
              <Button size="sm" variant="outline" className="mt-3">Voir les évaluations</Button>
            </div>
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="font-medium text-primary-900">12 demandes de congés</p>
              <p className="text-sm text-primary-700 mt-1">En attente de validation</p>
              <Button size="sm" variant="outline" className="mt-3">Traiter les demandes</Button>
            </div>
            <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
              <p className="font-medium text-secondary-900">3 postes ouverts</p>
              <p className="text-sm text-secondary-700 mt-1">28 candidatures reçues</p>
              <Button size="sm" variant="outline" className="mt-3">Voir les candidatures</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;