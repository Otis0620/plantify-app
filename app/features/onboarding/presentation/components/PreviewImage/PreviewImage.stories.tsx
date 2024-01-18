import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

import PreviewImage from './PreviewImage';

const PreviewImageMeta: ComponentMeta<typeof PreviewImage> = {
  title: 'PreviewImage',
  component: PreviewImage,
  parameters: {
    notes: `This component uses a static image for presentation purposes, 
    therefore it is not possible to change the image source.`,
  },
};

export default PreviewImageMeta;

type PreviewImageStory = ComponentStory<typeof PreviewImage>;

export const Basic: PreviewImageStory = () => (
  <PreviewImage imageSource={HomeScreenPreviewImage} />
);
