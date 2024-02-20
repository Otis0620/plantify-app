import { StyleSheet, View } from 'react-native';

import EllipsisItem from './EllipsisItem/EllipsisItem';

interface Props {
  activeEllipsis: 1 | 2 | 3;
}

export const TEST_ID = 'ellipsis';

const Ellipsis = ({ activeEllipsis }: Props) => {
  const numberOfEllipsis = 3;

  return (
    <View style={styles.container} testID={TEST_ID}>
      {[...Array(numberOfEllipsis).keys()].map((index) => (
        <EllipsisItem
          key={index}
          active={index + 1 === activeEllipsis}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default Ellipsis;
