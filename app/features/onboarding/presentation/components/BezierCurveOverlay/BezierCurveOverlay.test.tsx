import { render } from '@testing-library/react-native';

import BezierCurveOverlay from './BezierCurveOverlay';

describe('BezierCurveOverlay', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<BezierCurveOverlay />);
    const bezierCurverOverlay = getByTestId('bezier-curve-overlay');

    expect(bezierCurverOverlay).toBeTruthy();
  });
});
