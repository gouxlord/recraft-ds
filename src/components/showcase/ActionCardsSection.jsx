import React from 'react';
import ActionCard, { TrainingCard, MentoringCard, ReadingCard } from '../ui/action-card';

const ActionCardsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Action Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TrainingCard
          title="Formation React Avancé"
          description="Approfondissez vos connaissances en React avec les hooks avancés et les patterns modernes"
          category="Technique"
          duration="8 heures"
          participants={12}
          rating={4.8}
          status="available"
          onAction={() => alert('Commencer la formation')}
        />
        
        <MentoringCard
          title="Session Mentoring Leadership"
          description="Développez vos compétences de leadership avec un mentor expérimenté"
          category="Management" 
          duration="1 heure"
          status="available"
          dueDate="15 Mars 2024"
          onAction={() => alert('Planifier session')}
        />
        
        <TrainingCard
          title="Certification AWS"
          description="Préparation à la certification AWS Solutions Architect"
          category="Technique"
          duration="40 heures"
          participants={8}
          rating={4.9}
          progress={65}
          status="in_progress"
          onAction={() => alert('Continuer la formation')}
          actionLabel="Continuer"
        />
        
        <ReadingCard
          title="Guide des entretiens efficaces"
          description="Meilleures pratiques pour mener des entretiens d'évaluation constructifs"
          category="Management"
          duration="15 min"
          rating={4.5}
          status="available"
          onAction={() => alert('Lire article')}
        />
        
        <ActionCard
          type="goal"
          title="Objectif Q1 2024"
          description="Améliorer les processus RH et réduire les délais de traitement"
          progress={40}
          status="in_progress"
          dueDate="31 Mars 2024"
          onAction={() => alert('Voir objectif')}
          actionLabel="Voir les détails"
        />
        
        <TrainingCard
          title="Formation Communication"
          description="Améliorer sa communication interpersonnelle en entreprise"
          category="Communication"
          duration="6 heures"
          participants={15}
          rating={4.7}
          status="completed"
          progress={100}
          onAction={() => alert('Voir certificat')}
          actionLabel="Voir le certificat"
        />
      </div>
    </section>
  );
};

export default ActionCardsSection;