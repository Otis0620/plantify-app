import { Meta, StoryObj } from '@storybook/react-native';

import NavigationDecorator from '~storybook/decorators/NavigationDecorator';

import PreviewButtonGroup from './PreviewButtonGroup';

const meta: Meta<typeof PreviewButtonGroup> = {
  title: 'PreviewButtonGroup',
  component: PreviewButtonGroup,
  decorators: [NavigationDecorator],
};

export default meta;

type Story = StoryObj<typeof PreviewButtonGroup>;

export const Primary: Story = {
  args: {
    navigateTo: '',
  },
};
