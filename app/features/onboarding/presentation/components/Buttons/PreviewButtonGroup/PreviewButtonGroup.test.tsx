import { render } from '@testing-library/react-native';

import { Screens } from '~features/onboarding/presentation/navigation/OnboardingStackNavigator';

import PreviewButtonGroup from './PreviewButtonGroup';
import { TEST_ID } from '../PreviewButtonContainer/PreviewButtonContainer';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');

  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('PreviewButtonGroup', () => {
  it('should render with the correct amount of children', () => {
    const { getByTestId } = render(
      <PreviewButtonGroup navigateTo={Screens.HomePreview} />,
    );
    const previewButtonGroup = getByTestId(TEST_ID);
    const previewButtonGroupChildren =
      previewButtonGroup.props.children;

    expect(
      (previewButtonGroupChildren as React.ReactElement[]).length,
    ).toBe(2);
  });
});
