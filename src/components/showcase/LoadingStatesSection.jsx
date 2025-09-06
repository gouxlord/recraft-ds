import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Skeleton, SkeletonCard } from '../ui/skeleton';
import { LoadingSpinner, SectionSpinner } from '../ui/spinner';
import ActionButton from '../ui/action-button';
import { Upload } from '@phosphor-icons/react';

const LoadingStatesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">États de chargement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Skeleton Loading</CardTitle>
            <CardDescription>Affichage de contenu en cours de chargement</CardDescription>
          </CardHeader>
          <CardContent>
            <SkeletonCard />
          </CardContent>
        </Card>
        
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Spinners</CardTitle>
            <CardDescription>Indicateurs de chargement animés</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoadingSpinner text="Chargement des données..." />
            <div className="flex gap-4 justify-center">
              <SectionSpinner />
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <ActionButton variant="primary" loading>
                Chargement
              </ActionButton>
              <ActionButton variant="secondary" icon={Upload}>
                Upload terminé
              </ActionButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoadingStatesSection;