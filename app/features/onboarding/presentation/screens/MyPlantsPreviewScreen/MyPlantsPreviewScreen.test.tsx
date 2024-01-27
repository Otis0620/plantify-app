import { render } from '@testing-library/react-native';

import MyPlantsPreviewScreen from './MyPlantsPreviewScreen';

describe('MyPlantsPreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<MyPlantsPreviewScreen />);
    const myPlantsPreviewScreen = getByTestId(
      'my-plants-preview-screen',
    );

    expect(myPlantsPreviewScreen).toBeTruthy();
  });
});
