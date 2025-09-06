import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const BadgesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Badges</h2>
      <Card className="hover-lift animate-slide-up">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BadgesSection;