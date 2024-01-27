import { StyleSheet, View } from 'react-native';
import Color from '@core/utils/enums/Color';
import DiagnoseScreenPreviewImage from '@assets/onboarding/diagnose-screen-preview.png';

import BezierCurveOverlay from '../../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import PreviewHeading from '../../components/PreviewHeading/PreviewHeading';
import PreviewDescription from '../../components/PreviewDescription/PreviewDescription';
import Ellipsis from '../../components/Ellipsis/Ellipsis';
import PreviewButtonGroup from '../../components/PreviewButtonGroup/PreviewButtonGroup';

const DiagnosePreviewScreen = () => {
  return (
    <View style={styles.container} testID="diagnose-preview-screen">
      <PreviewImage imageSource={DiagnoseScreenPreviewImage} />

      <BezierCurveOverlay>
        <PreviewHeading heading="Your All-in-One Plant Care Companion" />

        <PreviewDescription description="Plantify helps you care for your plants. Set reminders, document their growth, and diagnose diseases with a quick camera scan." />

        <Ellipsis activeEllipsis={2} />

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

export default DiagnosePreviewScreen;
