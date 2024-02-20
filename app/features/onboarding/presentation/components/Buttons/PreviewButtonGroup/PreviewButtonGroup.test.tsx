import { render } from '@testing-library/react-native';

import { Screen } from '~features/onboarding/presentation/navigation/utils/enums/Screen';

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
      <PreviewButtonGroup navigateTo={Screen.HomePreview} />,
    );
    const previewButtonGroup = getByTestId(TEST_ID);
    const previewButtonGroupChildren =
      previewButtonGroup.props.children;

    expect(
      (previewButtonGroupChildren as React.ReactElement[]).length,
    ).toBe(2);
  });
});
