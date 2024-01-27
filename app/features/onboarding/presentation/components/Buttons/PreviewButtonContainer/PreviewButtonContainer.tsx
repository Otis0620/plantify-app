import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const PreviewButtonContainer = ({ children }: Props) => {
  return (
    <View style={styles.container} testID="preview-button-container">
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
