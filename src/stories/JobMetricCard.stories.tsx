import type { Meta, StoryObj } from '@storybook/react';
import JobMetricCard from '../components/ui/job-metric-card';
import { Crown, Warning, Target, CheckCircle } from '@phosphor-icons/react';

const meta: Meta<typeof JobMetricCard> = {
  title: 'Design System/HR/JobMetricCard',
  component: JobMetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Compétences manquantes',
    value: '1/8',
    subtitle: 'À acquérir',
    icon: Warning,
    variant: 'error',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <JobMetricCard
        title="Niveau mentor"
        value="1/8"
        subtitle="Expertises"
        icon={Crown}
        variant="warning"
      />
      <JobMetricCard
        title="Compétences manquantes"
        value="1/8"
        subtitle="À acquérir"
        icon={Warning}
        variant="error"
      />
      <JobMetricCard
        title="À développer"
        value="1/8"
        subtitle="En progression"
        icon={Target}
        variant="warning"
      />
      <JobMetricCard
        title="Au niveau requis"
        value="1/8"
        subtitle="Maîtrisées"
        icon={CheckCircle}
        variant="success"
      />
    </div>
  ),
};