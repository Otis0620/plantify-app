import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

import PreviewImage from './PreviewImage';

describe('PreviewImage', () => {
  it('renders properly', () => {
    const { getByTestId } = render(
      <PreviewImage imageSource={HomeScreenPreviewImage} />,
    );
    const imageComponent = getByTestId('preview-image');

    expect(imageComponent).toBeTruthy();
  });
});
