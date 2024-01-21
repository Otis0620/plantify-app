import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react-native';

import PreviewDescription from './PreviewDescription';

const PreviewDescriptionMeta: ComponentMeta<
  typeof PreviewDescription
> = {
  title: 'PreviewDescription',
  component: PreviewDescription,
};

export default PreviewDescriptionMeta;

type PreviewDescriptionStory = ComponentStory<
  typeof PreviewDescription
>;

export const Basic: PreviewDescriptionStory = () => (
  <PreviewDescription description="Preview description" />
);
