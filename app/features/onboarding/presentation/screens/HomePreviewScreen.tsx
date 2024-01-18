import { StyleSheet, View } from 'react-native';
import Colors from '@core/constants/colors';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

import BezierCurveOverlay from '../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../components/PreviewImage/PreviewImage';

const HomePreviewScreen = () => {
  return (
    <View
      style={styles.container}
      testID="home-preview-screen-container"
    >
      <PreviewImage imageSource={HomeScreenPreviewImage} />

      <BezierCurveOverlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary900,
  },
});

export default HomePreviewScreen;
