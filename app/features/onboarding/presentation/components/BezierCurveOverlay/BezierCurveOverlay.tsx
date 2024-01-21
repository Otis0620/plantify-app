import { StyleSheet } from 'react-native';
import Svg from '@core/lib/components/react-native-svg/Svg';
import Path from '@core/lib/components/react-native-svg/Path';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';
import Colors from '@core/enums/Colors';

const deviceSizeApi = DeviceSizeApi.getInstance();

const BezierCurveOverlay = () => {
  return (
    /*
      The viewBox attribute in SVG defines the position and
      dimensions of the SVG viewport. In this case, the viewBox value
      "0 0 100 100" means that the SVG viewport starts at the top-left
      corner (0, 0) and has a width and height of 100 units each.
    */
    <Svg
      style={styles.container}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      testID="bezier-curve-overlay"
    >
      {/* 
        This code defines an SVG path element with a series of commands to control its shape and movement.
        The commands used are 'M' to move to a point, 'L' to draw a straight line, and 'Q' to draw a quadratic Bézier curve.
        The path starts at (0, 100), moves to (100, 200), then to (100, 0), and finally draws a quadratic Bézier curve to (0, 0) with a control point at (50, 26). 
      */}
      <Path
        d="M0,100 L100,200 L100,0 Q50, 26 0, 0"
        fill={Colors.white}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: deviceSizeApi.moderateScale(364),
    bottom: 0,
    position: 'absolute',
  },
});

export default BezierCurveOverlay;
