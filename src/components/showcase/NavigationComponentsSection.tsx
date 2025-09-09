
import { Card, CardContent } from '../ui/card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator 
} from '../ui/breadcrumb';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const NavigationComponentsSection = () => {
  return (
    <section className="mb-12">
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
  );
};

export default NavigationComponentsSection;