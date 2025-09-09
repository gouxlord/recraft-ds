import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Modal, 
  ModalHeader, 
  ModalTitle, 
  ModalContent, 
  ModalFooter 
} from '../ui/modal';
import { createToast } from '../ui/toast';

const ModalToastSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Interactions</h2>
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsModalOpen(true)}>
              Ouvrir Modal
            </Button>
            <Button variant="outline" onClick={() => createToast.success('Succès !', 'Action réalisée avec succès')}>
              Toast Succès
            </Button>
            <Button variant="outline" onClick={() => createToast.error('Erreur !', 'Une erreur est survenue')}>
              Toast Erreur
            </Button>
            <Button variant="outline" onClick={() => createToast.warning('Attention !', 'Vérifiez vos données')}>
              Toast Warning
            </Button>
            <Button variant="outline" onClick={() => createToast.info('Information', 'Voici une notification informative')}>
              Toast Info
            </Button>
            <Button variant="outline" onClick={() => {
              const promise = new Promise((resolve) => 
                setTimeout(() => resolve('Données sauvegardées !'), 2000)
              );
              createToast.promise(promise, {
                loading: 'Sauvegarde en cours...',
                success: 'Sauvegarde terminée !',
                error: 'Erreur lors de la sauvegarde'
              });
            }}>
              Toast Promise
            </Button>
            <Button variant="outline" onClick={() => createToast.success('Action avec bouton', 'Cliquez sur "Voir plus" pour en savoir plus', {
              action: 'Voir plus',
              onAction: () => alert('Action exécutée !')
            })}>
              Toast avec Action
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader onClose={() => setIsModalOpen(false)}>
          <ModalTitle>Confirmer l'action</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <p className="text-gray-600">
            Êtes-vous sûr de vouloir effectuer cette action ? 
            Cette opération ne peut pas être annulée.
          </p>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>
            Confirmer
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default ModalToastSection;