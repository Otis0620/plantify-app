import { Meta, StoryObj } from '@storybook/react-native';

import PreviewButtonGroup from './PreviewButtonGroup';

const meta: Meta<typeof PreviewButtonGroup> = {
  title: 'PreviewButtonGroup',
  component: PreviewButtonGroup,
};

export default meta;

type Story = StoryObj<typeof PreviewButtonGroup>;

export const Primary: Story = {};
