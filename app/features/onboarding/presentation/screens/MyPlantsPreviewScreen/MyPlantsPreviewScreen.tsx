import { StyleSheet, View } from 'react-native';
import Color from '@core/utils/enums/Color';
import MyPlantsScreenPreviewImage from '@assets/onboarding/my-plants-screen-preview.png';

import BezierCurveOverlay from '../../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import PreviewHeading from '../../components/PreviewHeading/PreviewHeading';
import PreviewDescription from '../../components/PreviewDescription/PreviewDescription';
import Ellipsis from '../../components/Ellipsis/Ellipsis';
import PreviewButtonGroup from '../../components/PreviewButtonGroup/PreviewButtonGroup';

const MyPlantsPreviewScreen = () => {
  return (
    <View style={styles.container} testID="my-plants-preview-screen">
      <PreviewImage imageSource={MyPlantsScreenPreviewImage} />

      <BezierCurveOverlay>
        <PreviewHeading heading="My Plants - A Green Diary Just for You" />

        <PreviewDescription description="Bring your garden to life! Add your favorite plants, set care reminders, snap progress photos, & explore your planting history." />

        <Ellipsis activeEllipsis={3} />

        <PreviewButtonGroup />
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

export default MyPlantsPreviewScreen;
