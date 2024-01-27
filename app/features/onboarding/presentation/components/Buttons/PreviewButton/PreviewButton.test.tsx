import { render } from '@testing-library/react-native';
import Color from '@core/utils/enums/Color';

import PreviewButton, { TEST_ID } from './PreviewButton';
import StyleProps from './utils/StyleProps';

describe('PreviewButton', () => {
  it('should render correctly', () => {
    const testStyles: StyleProps = {
      color: Color.white,
      backgroundColor: Color.primary900,
      width: '100%',
    };
    const { getByTestId } = render(
      <PreviewButton text="test" style={testStyles} />,
    );
    const previewButton = getByTestId(TEST_ID);

    expect(previewButton).toBeTruthy();
  });
});
