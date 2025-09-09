
import SkillsHeatmap from '../hr/skills-heatmap';
import CompetenceMiniCard from '../ui/competence-mini-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const HRComponentsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Composants RH</h2>
      
      {/* Competence Mini Cards */}
      <div className="mb-8">
        <Card className="hover-lift animate-slide-up">
          <CardHeader>
            <CardTitle>Compétences Mini Cards</CardTitle>
            <CardDescription>
              Cards compactes pour afficher les compétences avec scores et couleurs sémantiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CompetenceMiniCard 
                name="Communication"
                score={4.2}
                level="expert"
                onViewDetails={() => console.log('Voir Communication')}
              />
              <CompetenceMiniCard 
                name="Leadership"
                score={3.8}
                level="advanced"
                onViewDetails={() => console.log('Voir Leadership')}
              />
              <CompetenceMiniCard 
                name="Gestion de projet"
                score={3.4}
                level="intermediate"
                onViewDetails={() => console.log('Voir Gestion')}
              />
              <CompetenceMiniCard 
                name="Négociation"
                score={2.8}
                level="intermediate"
                onViewDetails={() => console.log('Voir Négociation')}
              />
              <CompetenceMiniCard 
                name="Analyse de données"
                score={2.1}
                level="beginner"
                onViewDetails={() => console.log('Voir Analyse')}
              />
              <CompetenceMiniCard 
                name="Management"
                score={4.0}
                level="expert"
                onViewDetails={() => console.log('Voir Management')}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Skills Heatmap - Full Width */}
      <div className="mb-8">
        <SkillsHeatmap className="hover-lift" />
      </div>
    </section>
  );
};

export default HRComponentsSection;