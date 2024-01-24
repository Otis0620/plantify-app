import { render } from '@testing-library/react-native';

import EllipsisItem from './EllipsisItem';

describe('EllipsisItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<EllipsisItem active />);
    const ellipsisItem = getByTestId('ellipsis-item');

    expect(ellipsisItem).toBeTruthy();
  });
});
