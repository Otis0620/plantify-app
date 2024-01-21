import { render } from '@testing-library/react-native';

import HomePreviewScreen from './HomePreviewScreen';

describe('HomePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<HomePreviewScreen />);
    const homePreviewScreen = getByTestId('home-preview-screen');

    expect(homePreviewScreen).toBeTruthy();
  });
});
