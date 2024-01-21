import { Meta, StoryObj } from '@storybook/react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

import PreviewImage from './PreviewImage';

const meta: Meta<typeof PreviewImage> = {
  title: 'PreviewImage',
  component: PreviewImage,
  parameters: {
    notes: `This component uses a static image for presentation purposes, 
    therefore it is not possible to change the image source.`,
  },
};

export default meta;

type Story = StoryObj<typeof PreviewImage>;

export const Primary: Story = {
  args: {
    imageSource: HomeScreenPreviewImage,
  },
};
