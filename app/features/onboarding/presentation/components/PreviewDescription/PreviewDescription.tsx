import Color from '@core/enums/Color';
import Font from '@core/enums/Font';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  description: string;
}
const PreviewDescription = ({ description }: Props) => {
  return (
    <View style={styles.container} testID="preview-description">
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '1%',
  },

  description: {
    alignSelf: 'stretch',
    fontSize: 18,
    lineHeight: 29,
    fontFamily: Font.primary,
    color: Color.greyScale700,
    textAlign: 'center',
  },
});

export default PreviewDescription;
