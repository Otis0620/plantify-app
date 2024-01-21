import { StyleSheet, Text, View } from 'react-native';

interface Props {
  heading: string;
}

const PreviewHeading = ({ heading }: Props) => {
  return (
    <View style={styles.container} testID="preview-heading">
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  heading: {
    fontSize: 32,
    lineHeight: 51,
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: '#212121',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});

export default PreviewHeading;
