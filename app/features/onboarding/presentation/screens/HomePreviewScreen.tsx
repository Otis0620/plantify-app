import { Image, StyleSheet, View } from 'react-native';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';
import { scale } from 'react-native-size-matters';

import BezierCurveOverlay from '../components/BezierCurveOverlay';

const HomePreviewScreen = () => {
  return (
    <View style={styles.container}>
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
    width: scale(300),
    height: scale(570),
  },
});

export default HomePreviewScreen;
