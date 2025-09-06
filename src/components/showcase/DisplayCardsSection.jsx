import React from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import CardAction, { CardActionGroup, QuickAction } from '../ui/card-action';
import { 
  Download,
  Eye,
  Lightning,
  Calendar,
  GraduationCap,
  Target,
  Users,
  UserCircle,
  FileText,
  Bell
} from '@phosphor-icons/react';

const DisplayCardsSection = () => {
  return (
    <section className="mb-12">
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
  );
};

export default DisplayCardsSection;