import { StyleSheet, View } from 'react-native';
import Colors from '@core/enums/Colors';

type Props = {
  active: boolean;
};

const EllipsisItem = ({ active }: Props) => {
  return (
    <View
      style={[styles.ellipsis, active ? styles.activeEllipsis : {}]}
      testID="ellipsis-item"
    />
  );
};

const styles = StyleSheet.create({
  ellipsis: {
    borderRadius: 1000,
    width: 8,
    height: 8,
    marginHorizontal: '.75%',
    backgroundColor: Colors.greyScale200,
  },

  activeEllipsis: {
    backgroundColor: Colors.primary900,
    width: '7.5%',
  },
});

export default EllipsisItem;
