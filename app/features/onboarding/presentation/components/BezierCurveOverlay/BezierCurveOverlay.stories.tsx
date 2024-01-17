import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import BezierCurveOverlay from './BezierCurveOverlay';

const BezierCurveOverlayMeta: ComponentMeta<
  typeof BezierCurveOverlay
> = {
  title: 'BezierCurveOverlay',
  component: BezierCurveOverlay,
  decorators: [withBackgrounds],
  parameters: {
    notes:
      'This component is white by default, therefore a black background is needed to see it.',
    backgrounds: {
      default: 'plain',
      values: [{ name: 'plain', value: 'black' }],
    },
  },
};

export default BezierCurveOverlayMeta;

type BezierCurveOverlayStory = ComponentStory<
  typeof BezierCurveOverlay
>;

export const Basic: BezierCurveOverlayStory = () => (
  <BezierCurveOverlay />
);
