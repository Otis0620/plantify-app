import { render } from '@testing-library/react-native';

import PreviewButtonGroup from './PreviewButtonGroup';
import { TEST_ID } from '../PreviewButtonContainer/PreviewButtonContainer';

describe('PreviewButtonGroup', () => {
  it('should render with the correct amount of children', () => {
    const { getByTestId } = render(<PreviewButtonGroup />);
    const previewButtonGroup = getByTestId(TEST_ID);
    const previewButtonGroupChildren =
      previewButtonGroup.props.children;

    expect(
      (previewButtonGroupChildren as React.ReactElement[]).length,
    ).toBe(2);
  });
});
