
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, Download } from '@phosphor-icons/react';

const ButtonsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Boutons</h2>
      <Card className="hover-lift animate-slide-up">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Plus size={20} /></Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button className="gap-2"><Download size={16} /> With Icon</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ButtonsSection;