import { render } from '@testing-library/react-native';

import DiagnosePreviewScreen, {
  TEST_ID,
} from './DiagnosePreviewScreen';

describe('DiagnosePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<DiagnosePreviewScreen />);
    const diagnosePreviewScreen = getByTestId(TEST_ID);

    expect(diagnosePreviewScreen).toBeTruthy();
  });
});
