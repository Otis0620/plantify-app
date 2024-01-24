import { StyleSheet, View } from 'react-native';

import EllipsisItem from './EllipsisItem/EllipsisItem';

interface Props {
  activeEllipsis: number;
}

const Ellipsis = ({ activeEllipsis }: Props) => {
  const numberOfEllipsis = [1, 2, 3];

  return (
    <View style={styles.container} testID="ellipsis">
      {numberOfEllipsis.map((index) => (
        <EllipsisItem key={index} active={index === activeEllipsis} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '1.6%',
  },
});

export default Ellipsis;
