import { render } from '@testing-library/react-native';

import DiagnosePreviewScreen from './DiagnosePreviewScreen';

describe('DiagnosePreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<DiagnosePreviewScreen />);
    const diagnosePreviewScreen = getByTestId(
      'diagnose-preview-screen',
    );

    expect(diagnosePreviewScreen).toBeTruthy();
  });
});
