import { render } from '@testing-library/react-native';

import MyPlantsPreviewScreen, {
  TEST_ID,
} from './MyPlantsPreviewScreen';

describe('MyPlantsPreviewScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<MyPlantsPreviewScreen />);
    const myPlantsPreviewScreen = getByTestId(TEST_ID);

    expect(myPlantsPreviewScreen).toBeTruthy();
  });
});
