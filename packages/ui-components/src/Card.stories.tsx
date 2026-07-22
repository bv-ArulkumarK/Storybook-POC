import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a simple card component with title and description.',
  },
};

export const WithContent: Story = {
  args: {
    title: 'Card with Content',
    description: 'This card has additional content inside.',
    children: (
      <div className="bg-blue-50 p-4 rounded text-blue-800">
        Additional content can go here!
      </div>
    ),
  },
};
