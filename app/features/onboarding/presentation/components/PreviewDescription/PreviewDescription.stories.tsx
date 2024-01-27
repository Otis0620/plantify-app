import { Meta, StoryObj } from '@storybook/react-native';

import PreviewDescription from './PreviewDescription';

const meta: Meta<typeof PreviewDescription> = {
  title: 'PreviewDescription',
  component: PreviewDescription,
};

export default meta;

type Story = StoryObj<typeof PreviewDescription>;

export const Primary: Story = {
  args: {
    description: 'Preview Description Text',
  },
};
