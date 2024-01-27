import { render } from '@testing-library/react-native';

import EllipsisItem, { TEST_ID } from './EllipsisItem';

describe('EllipsisItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<EllipsisItem active />);
    const ellipsisItem = getByTestId(TEST_ID);

    expect(ellipsisItem).toBeTruthy();
  });
});
