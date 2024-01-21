import { Meta, StoryObj } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import BezierCurveOverlay from './BezierCurveOverlay';

const meta: Meta<typeof BezierCurveOverlay> = {
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

export default meta;

type Story = StoryObj<typeof BezierCurveOverlay>;

export const Primary: Story = {};
