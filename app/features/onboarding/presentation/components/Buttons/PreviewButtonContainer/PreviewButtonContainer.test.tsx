import { render } from '@testing-library/react-native';

import PreviewButtonContainer from './PreviewButtonContainer';

describe('PreviewButtonContainer', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <PreviewButtonContainer>
        <></>
      </PreviewButtonContainer>,
    );
    const previewButtonContainer = getByTestId(
      'preview-button-container',
    );

    expect(previewButtonContainer).toBeTruthy();
  });
});
