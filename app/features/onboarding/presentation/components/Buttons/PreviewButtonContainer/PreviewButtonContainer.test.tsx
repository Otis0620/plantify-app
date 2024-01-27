import { render } from '@testing-library/react-native';

import PreviewButtonContainer, {
  TEST_ID,
} from './PreviewButtonContainer';

describe('PreviewButtonContainer', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <PreviewButtonContainer>
        <></>
      </PreviewButtonContainer>,
    );
    const previewButtonContainer = getByTestId(TEST_ID);

    expect(previewButtonContainer).toBeTruthy();
  });
});
