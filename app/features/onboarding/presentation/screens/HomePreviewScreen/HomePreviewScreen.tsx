import { StyleSheet, View } from 'react-native';

import HomeScreenPreviewImage from '~assets/onboarding/home-screen-preview.png';
import Color from '~core/utils/enums/Color';

import BezierCurveOverlay from '../../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import PreviewHeading from '../../components/PreviewHeading/PreviewHeading';
import PreviewDescription from '../../components/PreviewDescription/PreviewDescription';
import Ellipsis from '../../components/Ellipsis/Ellipsis';
import PreviewButtonGroup from '../../components/Buttons/PreviewButtonGroup/PreviewButtonGroup';
import { Screens } from '../../navigation/OnboardingStackNavigator';

export const TEST_ID = 'home-preview-screen';

const HomePreviewScreen = () => {
  return (
    <View style={styles.container} testID={TEST_ID}>
      <PreviewImage imageSource={HomeScreenPreviewImage} />

      <BezierCurveOverlay>
        <PreviewHeading heading="Identify the Green World Around You" />

        <PreviewDescription
          description="Turn your smartphone into a plant expert. Scan any plant using
        your camera and let Plantify identify it for you."
        />

        <Ellipsis activeEllipsis={1} />

        <PreviewButtonGroup navigateTo={Screens.DiagnosePreview} />
      </BezierCurveOverlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary900,
  },
});

export default HomePreviewScreen;
