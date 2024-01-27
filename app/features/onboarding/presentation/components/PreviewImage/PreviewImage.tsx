import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

export const TEST_ID = 'preview-image';

interface Props {
  imageSource: ImageSourcePropType;
}

const PreviewImage = ({ imageSource }: Props) => {
  return (
    <View style={styles.container} testID={TEST_ID}>
      <Image
        style={{
          ...styles.image,
          marginTop: Platform.OS === 'ios' ? 0 : '5%',
        }}
        resizeMode="contain"
        source={imageSource}
      />
    </View>
  );
};

export default PreviewImage;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },

  image: {
    alignSelf: 'center',
    width: '85%',
  },
});
