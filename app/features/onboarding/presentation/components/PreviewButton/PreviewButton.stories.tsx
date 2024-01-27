import { Meta, StoryObj } from '@storybook/react-native';

import PreviewButton from './PreviewButton';

const meta: Meta<typeof PreviewButton> = {
  title: 'PreviewButton',
  component: PreviewButton,
};

export default meta;

type Story = StoryObj<typeof PreviewButton>;

export const Primary: Story = {
  args: {
    text: 'Press Me',
    style: {
      color: 'white',
      backgroundColor: 'green',
      width: '100%',
    },
  },
};
