import Color from '@core/utils/enums/Color';
import Font from '@core/utils/enums/Font';
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
    fontFamily: Font.primaryBold,
    color: Color.greyScale900,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});

export default PreviewHeading;
