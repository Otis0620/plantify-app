import { render } from '@testing-library/react-native';

import BezierCurveOverlay from './BezierCurveOverlay';

describe('BezierCurveOverlay', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BezierCurveOverlay />);
    const svgElement = getByTestId('bezier-curve-overlay-svg');

    expect(svgElement).toBeTruthy();
  });
});
