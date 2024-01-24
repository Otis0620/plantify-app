import { render } from '@testing-library/react-native';

import PreviewButtonGroup from './PreviewButtonGroup';

describe('PreviewButtonGroup', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<PreviewButtonGroup />);
    const previewButtonGroup = getByTestId('preview-button-group');

    expect(previewButtonGroup).toBeTruthy();
  });
});
