import { render } from '@testing-library/react-native';

import HomePreviewScreen, { TEST_ID } from './HomePreviewScreen';

describe('HomePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<HomePreviewScreen />);
    const homePreviewScreen = getByTestId(TEST_ID);

    expect(homePreviewScreen).toBeTruthy();
  });
});
