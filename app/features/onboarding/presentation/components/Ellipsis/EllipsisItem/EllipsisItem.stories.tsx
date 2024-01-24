import { Meta, StoryObj } from '@storybook/react-native';

import EllipsisItem from './EllipsisItem';

const meta: Meta<typeof EllipsisItem> = {
  title: 'EllipsisItem',
  component: EllipsisItem,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EllipsisItem>;

export const Primary: Story = {
  args: {
    active: true,
  },
};
