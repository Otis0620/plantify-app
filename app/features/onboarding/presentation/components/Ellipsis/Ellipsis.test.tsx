import { ReactElement } from 'react';
import { render } from '@testing-library/react-native';

import Ellipsis, { TEST_ID } from './Ellipsis';

describe('Ellipsis', () => {
  let ellipsis: ReactElement;

  beforeEach(() => {
    const { getByTestId } = render(<Ellipsis activeEllipsis={1} />);

    ellipsis = getByTestId(TEST_ID);
  });

  it('should render correctly', () => {
    expect(ellipsis).toBeTruthy();
  });

  it('should render with the correct amount of children', () => {
    const ellipsisItems = ellipsis.props.children;

    expect((ellipsisItems as React.ReactElement[]).length).toBe(3);
  });
});
