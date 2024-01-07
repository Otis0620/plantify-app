import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button onPress={() => {}} title="Press Me" />,
    );
    const buttonElement = getByText('Press Me');
    expect(buttonElement).toBeDefined();
  });

  it('triggers onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Press Me" />,
    );
    const buttonElement = getByText('Press Me');

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
