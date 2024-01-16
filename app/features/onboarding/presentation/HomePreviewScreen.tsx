import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Svg, { Path } from 'react-native-svg';
import HomeScreenPreviewImage from '@assets/onboarding/home-screen-preview.png';

const HomePreviewScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={HomeScreenPreviewImage}
        />
      </View>

      <Svg style={styles.rectangle} viewBox="0 0 100 100">
        <Path
          // This code defines an SVG path element with a series of commands to control its shape and movement.
          // The commands used are 'M' to move to a point, 'L' to draw a straight line, and 'Q' to draw a quadratic Bézier curve.
          // The path starts at (0, 100), moves to (100, 200), then to (100, 0), and finally draws a quadratic Bézier curve to (0, 0) with a control point at (50, 26).
          d="M0,100 L100,200 L100,0 Q50, 26 0, 0"
          fill="#ffffff"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00a86b',
  },
  groupIcon: {
    marginTop: 56,
    marginLeft: 43,
    width: 345,
    height: 700,
  },
  rectangle: {
    flex: 1,
    width: '100%',
    height: 500,
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
  },
});

export default HomePreviewScreen;
