
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { BusinessEntityCard } from '../ui/business-entity';
import { 
  Users, 
  UsersThree,
  BriefcaseMetal,
  Chair,
  FileText,
  GraduationCap,
  Notebook,
  Medal,
  Warning,
  CircleDashed,
  CheckCircle,
  Crown
} from '@phosphor-icons/react';

const HRBusinessSemanticsSection = () => {
  return (
    <section className="mb-12">
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
  );
};

export default HRBusinessSemanticsSection;