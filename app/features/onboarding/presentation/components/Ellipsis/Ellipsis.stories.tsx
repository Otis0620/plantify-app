import { Meta, StoryObj } from '@storybook/react-native';

import Ellipsis from './Ellipsis';

const meta: Meta<typeof Ellipsis> = {
  title: 'Ellipsis',
  component: Ellipsis,
  argTypes: {
    activeEllipsis: {
      control: {
        type: 'radio',
      },
      options: [1, 2, 3],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Ellipsis>;

export const Primary: Story = {
  args: {
    activeEllipsis: 1,
  },
};
