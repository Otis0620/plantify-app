import { render } from '@testing-library/react-native';
import React from 'react';

import App, { TEST_ID } from './App';

describe('App', () => {
  it('renders properly', async () => {
    const { getByTestId } = render(<App />);

    const containerElement = getByTestId(TEST_ID);
    expect(containerElement).toBeDefined();
  });
});
