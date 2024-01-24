import { render } from '@testing-library/react-native';

import PreviewHeading from './PreviewHeading';

describe('PreviewHeading', () => {
  it('should render correctly', () => {
    const heading = 'Test Heading';
    const { getByTestId } = render(
      <PreviewHeading heading={heading} />,
    );
    const previewHeading = getByTestId('preview-heading');

    expect(previewHeading).toBeTruthy();
  });
});
