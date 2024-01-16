import { render } from '@testing-library/react-native';

import HomePreviewScreen from './HomePreviewScreen';

describe('HomePreviewScreen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<HomePreviewScreen />);
    const container = getByTestId('home-preview-screen-container');

    expect(container).toBeTruthy();
  });
});
