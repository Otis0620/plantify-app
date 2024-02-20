import { StyleSheet, View } from 'react-native';

import Color from '~core/utils/enums/Color';

type Props = {
  active: boolean;
};

export const TEST_ID = 'ellipsis-item';

const EllipsisItem = ({ active }: Props) => {
  return (
    <View
      style={[styles.ellipsis, active ? styles.activeEllipsis : {}]}
      testID={TEST_ID}
    />
  );
};

const styles = StyleSheet.create({
  ellipsis: {
    borderRadius: 1000,
    width: 8,
    height: 8,
    marginHorizontal: '.75%',
    backgroundColor: Color.greyScale200,
  },

  activeEllipsis: {
    backgroundColor: Color.primary900,
    width: '7.5%',
  },
});

export default EllipsisItem;
