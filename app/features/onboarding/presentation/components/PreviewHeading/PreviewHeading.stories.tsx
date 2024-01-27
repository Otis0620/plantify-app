import { Meta, StoryObj } from '@storybook/react-native';

import PreviewHeading from './PreviewHeading';

const meta: Meta<typeof PreviewHeading> = {
  title: 'PreviewHeading',
  component: PreviewHeading,
};

export default meta;

type Story = StoryObj<typeof PreviewHeading>;

export const Primary: Story = {
  args: {
    heading: 'Preview Heading Text',
  },
};
