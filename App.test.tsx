import { render } from '@testing-library/react-native';
import React from 'react';

import App from './App';

describe('App', () => {
  it('renders properly', async () => {
    const { getByTestId } = render(<App />);

    const containerElement = getByTestId('container');
    expect(containerElement).toBeDefined();
  });
});
