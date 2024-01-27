import { StyleSheet, View } from 'react-native';
import Svg from '@core/lib/components/react-native-svg/Svg';
import Path from '@core/lib/components/react-native-svg/Path';
import Color from '@core/utils/enums/Color';

interface Props {
  children: React.ReactNode;
}

export const TEST_ID = 'bezier-curve-overlay';

const BezierCurveOverlay = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {/*
        The viewBox attribute in SVG defines the position and
        dimensions of the SVG viewport. In this case, the viewBox value
        "0 0 100 100" means that the SVG viewport starts at the top-left
        corner (0, 0) and has a width and height of 100 units each.
      */}
      <Svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        testID={TEST_ID}
      >
        {/* 
          This code defines an SVG path element with a series of commands to control its shape and movement.
          The commands used are 'M' to move to a point, 'L' to draw a straight line, and 'Q' to draw a quadratic Bézier curve.
          The path starts at (0, 100), moves to (100, 200), then to (100, 0), and finally draws a quadratic Bézier curve to (0, 0) with a control point at (50, 26). 
        */}
        <Path
          d="M0,100 L100,200 L100,0 Q50, 20 0, 0"
          fill={Color.white}
        />

        <View style={styles.childrenContainer}>{children}</View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: '5%',
  },

  childrenContainer: {
    marginTop: '15%',
  },
});

export default BezierCurveOverlay;
