import { render } from '@testing-library/react-native';

import PreviewButtonGroup from './PreviewButtonGroup';

describe('PreviewButtonGroup', () => {
  it('should render with the correct amount of children', () => {
    const { getByTestId } = render(<PreviewButtonGroup />);
    const previewButtonGroup = getByTestId(
      'preview-button-container',
    );
    const previewButtonGroupChildren =
      previewButtonGroup.props.children;

    expect(
      (previewButtonGroupChildren as React.ReactElement[]).length,
    ).toBe(2);
  });
});
