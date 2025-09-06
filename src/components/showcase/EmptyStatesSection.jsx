import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { EmptyEmployees, EmptyTraining } from '../ui/empty-state';

const EmptyStatesSection = () => {
  return (
    <section className="mb-12">
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
  );
};

export default EmptyStatesSection;