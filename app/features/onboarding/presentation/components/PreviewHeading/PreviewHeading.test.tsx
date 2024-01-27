import { render } from '@testing-library/react-native';

import PreviewHeading, { TEST_ID } from './PreviewHeading';

describe('PreviewHeading', () => {
  it('should render correctly', () => {
    const heading = 'Test Heading';
    const { getByTestId } = render(
      <PreviewHeading heading={heading} />,
    );
    const previewHeading = getByTestId(TEST_ID);

    expect(previewHeading).toBeTruthy();
  });
});
