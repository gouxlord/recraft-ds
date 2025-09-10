import type { Meta, StoryObj } from '@storybook/react';
import CompetenceMiniCard from '../components/ui/competence-mini-card';

const meta: Meta<typeof CompetenceMiniCard> = {
  title: 'Design System/HR/CompetenceMiniCard',
  component: CompetenceMiniCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Communication',
    score: 4.0,
    onViewDetails: () => console.log('View details clicked'),
  },
};

export const DifferentLevels: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <CompetenceMiniCard
        name="Expert Level"
        score={4.2}
        onViewDetails={() => console.log('Expert clicked')}
      />
      <CompetenceMiniCard
        name="Advanced Level"
        score={3.8}
        onViewDetails={() => console.log('Advanced clicked')}
      />
      <CompetenceMiniCard
        name="Intermediate Level"
        score={2.9}
        onViewDetails={() => console.log('Intermediate clicked')}
      />
      <CompetenceMiniCard
        name="Beginner Level"
        score={2.1}
        onViewDetails={() => console.log('Beginner clicked')}
      />
    </div>
  ),
};

export const AllScores: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {[4.5, 4.0, 3.8, 3.5, 3.0, 2.8, 2.5, 2.0, 1.5, 1.0].map((score, index) => (
        <CompetenceMiniCard
          key={index}
          name={`Compétence ${score}`}
          score={score}
          onViewDetails={() => console.log(`Score ${score} clicked`)}
        />
      ))}
    </div>
  ),
};