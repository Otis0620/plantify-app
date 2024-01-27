import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import BezierCurveOverlay, { TEST_ID } from './BezierCurveOverlay';

describe('BezierCurveOverlay', () => {
  it('should render correctly', () => {
    const testChild = <View />;
    const { getByTestId } = render(
      <BezierCurveOverlay children={testChild} />,
    );
    const bezierCurverOverlay = getByTestId(TEST_ID);

    expect(bezierCurverOverlay).toBeTruthy();
  });
});
