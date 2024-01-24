import { Meta, StoryObj } from '@storybook/react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';
import DiagnoseScreenPreviewImage from '@assets/onboarding/diagnose-screen-preview.png';
import MyPlantsScreenPreviewImage from '@assets/onboarding/my-plants-screen-preview.png';

import PreviewImage from './PreviewImage';

const imageSources = {
  HomeScreenPreviewImage,
  DiagnoseScreenPreviewImage,
  MyPlantsScreenPreviewImage,
};

const meta: Meta<typeof PreviewImage> = {
  title: 'PreviewImage',
  component: PreviewImage,
  argTypes: {
    imageSource: {
      defaultValue: 'HomeScreenPreviewImage',
      mapping: imageSources,
      options: Object.keys(imageSources),
      control: {
        type: 'select',
        labels: {
          HomeScreenPreviewImage: 'Home Screen',
          DiagnoseScreenPreviewImage: 'Diagnose Screen',
          MyPlantsScreenPreviewImage: 'My Plants Screen',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PreviewImage>;

export const Primary: Story = {};
