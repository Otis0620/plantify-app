import { render } from '@testing-library/react-native';

import HomePreviewScreen, { TEST_ID } from './HomePreviewScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('HomePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<HomePreviewScreen />);
    const homePreviewScreen = getByTestId(TEST_ID);

    expect(homePreviewScreen).toBeTruthy();
  });
});
