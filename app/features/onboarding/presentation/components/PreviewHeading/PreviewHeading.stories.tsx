import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react-native';

import PreviewHeading from './PreviewHeading';

const PreviewHeadingMeta: ComponentMeta<typeof PreviewHeading> = {
  title: 'PreviewHeading',
  component: PreviewHeading,
};

export default PreviewHeadingMeta;

type PreviewHeadingStory = ComponentStory<typeof PreviewHeading>;

export const Basic: PreviewHeadingStory = () => (
  <PreviewHeading heading="Preview heading" />
);
