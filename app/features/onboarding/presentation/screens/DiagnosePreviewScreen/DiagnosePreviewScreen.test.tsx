import { render } from '@testing-library/react-native';

import DiagnosePreviewScreen, {
  TEST_ID,
} from './DiagnosePreviewScreen';

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

describe('DiagnosePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<DiagnosePreviewScreen />);
    const diagnosePreviewScreen = getByTestId(TEST_ID);

    expect(diagnosePreviewScreen).toBeTruthy();
  });
});
