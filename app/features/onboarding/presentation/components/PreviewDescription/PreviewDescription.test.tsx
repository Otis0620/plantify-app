import { render } from '@testing-library/react-native';

import PreviewDescription from './PreviewDescription';

describe('PreviewDescription', () => {
  it('should render correctly', () => {
    const description = 'This is a preview description';
    const { getByTestId } = render(
      <PreviewDescription description={description} />,
    );
    const previewDescription = getByTestId('preview-description');

    expect(previewDescription).toBeTruthy();
  });
});
