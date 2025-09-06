import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';

const ProgressSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Progress Bars</h2>
      <Card>
        <CardContent className="pt-6 space-y-4">
          <Progress value={25} />
          <Progress value={50} variant="secondary" />
          <Progress value={75} variant="success" />
          <Progress value={90} variant="warning" showLabel />
        </CardContent>
      </Card>
    </section>
  );
};

export default ProgressSection;