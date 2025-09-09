
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import ActionButton, { ActionButtonWithBadge } from '../ui/action-button';
import { 
  Lightning,
  GraduationCap,
  Target,
  Bell,
  Eye,
  Download,
  Gear,
  Calendar,
  Users,
  UserCircle
} from '@phosphor-icons/react';

const ModernActionButtonsSection = () => {
  return (
    <section className="mb-12">
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
              <ActionButton variant="ghost" icon={Gear} className="bg-gradient-to-r from-primary-100 to-secondary-100">
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
  );
};

export default ModernActionButtonsSection;