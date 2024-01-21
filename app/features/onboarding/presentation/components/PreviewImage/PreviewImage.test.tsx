import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

import PreviewImage from './PreviewImage';

describe('PreviewImage', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <PreviewImage imageSource={HomeScreenPreviewImage} />,
    );
    const previewImage = getByTestId('preview-image');

    expect(previewImage).toBeTruthy();
  });
});
