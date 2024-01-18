import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';

const deviceSizeApi = DeviceSizeApi.getInstance();

interface Props {
  imageSource: ImageSourcePropType;
}

const PreviewImage = ({ imageSource }: Props) => {
  return (
    <View testID="preview-image">
      <Image
        style={styles.image}
        resizeMode="contain"
        source={imageSource}
      />
    </View>
  );
};

export default PreviewImage;

const styles = StyleSheet.create({
  image: {
    marginTop: '5%',
    alignSelf: 'center',
    width: deviceSizeApi.scale(300),
    height: deviceSizeApi.scale(570),
  },
});
