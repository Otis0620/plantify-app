import { StyleSheet, Text, View } from 'react-native';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';

const deviceSizeApi = DeviceSizeApi.getInstance();
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
    paddingVertical: deviceSizeApi.verticalScale(8),
    paddingHorizontal: deviceSizeApi.scale(24),
  },

  description: {
    alignSelf: 'stretch',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 29,
    fontFamily: 'Urbanist-Regular',
    color: '#616161',
    textAlign: 'center',
  },
});

export default PreviewDescription;
