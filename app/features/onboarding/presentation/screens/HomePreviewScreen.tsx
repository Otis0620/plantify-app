import { Image, StyleSheet, View } from 'react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';

import BezierCurveOverlay from '../components/BezierCurveOverlay';

const deviceSizeApi = DeviceSizeApi.getInstance();

const HomePreviewScreen = () => {
  return (
    <View
      style={styles.container}
      testID="home-preview-screen-container"
    >
      <View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={HomeScreenPreviewImage}
        />
      </View>
      <BezierCurveOverlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a86b',
  },

  image: {
    marginTop: '5%',
    alignSelf: 'center',
    width: deviceSizeApi.scale(300),
    height: deviceSizeApi.scale(570),
  },
});

export default HomePreviewScreen;
