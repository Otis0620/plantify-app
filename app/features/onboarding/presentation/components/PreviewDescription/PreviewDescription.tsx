import Color from '@core/utils/enums/Color';
import Font from '@core/utils/enums/Font';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  description: string;
}

export const TEST_ID = 'preview-description';

const PreviewDescription = ({ description }: Props) => {
  return (
    <View style={styles.container} testID={TEST_ID}>
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
