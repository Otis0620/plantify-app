import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '@core/enums/Colors';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';

import BezierCurveOverlay from '../../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import PreviewHeading from '../../components/PreviewHeading/PreviewHeading';
import PreviewDescription from '../../components/PreviewDescription/PreviewDescription';
import Ellipsis from '../../components/Ellipsis/Ellipsis';

const deviceSizeApi = DeviceSizeApi.getInstance();

const HomePreviewScreen = () => {
  return (
    <View style={styles.container} testID="home-preview-screen">
      <PreviewImage imageSource={HomeScreenPreviewImage} />

      <BezierCurveOverlay />

      <PreviewHeading heading="Identify the Green World Around You" />

      <PreviewDescription
        description=" Turn your smartphone into a plant expert. Scan any plant using
        your camera and let Plantify identify it for you."
      />

      <Ellipsis activeEllipsis={1} />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonSkip}>
          <Text style={styles.buttonSkipText}>Skip</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary900,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: deviceSizeApi.verticalScale(30),
    width: '100%',
  },

  button: {
    backgroundColor: '#00a86b',
    marginHorizontal: deviceSizeApi.scale(8),
    justifyContent: 'center',
    borderRadius: 1000,
    overflow: 'hidden',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },

  buttonText: {
    alignSelf: 'stretch',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: '#fff',
    textAlign: 'center',
  },

  buttonSkip: {
    backgroundColor: '#ebf8f3',
    marginHorizontal: deviceSizeApi.scale(10),
    justifyContent: 'center',
    borderRadius: 1000,
    overflow: 'hidden',
    paddingHorizontal: 70,
    paddingVertical: 10,
  },

  buttonSkipText: {
    alignSelf: 'stretch',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: '#00a86b',
    textAlign: 'center',
  },
});

export default HomePreviewScreen;
