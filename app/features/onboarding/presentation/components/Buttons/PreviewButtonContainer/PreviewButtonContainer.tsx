import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const TEST_ID = 'preview-button-container';

const PreviewButtonContainer = ({ children }: Props) => {
  return (
    <View style={styles.container} testID={TEST_ID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '7%',
  },
});

export default PreviewButtonContainer;
