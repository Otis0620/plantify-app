import { StyleSheet, View } from 'react-native';
import Color from '@core/utils/enums/Color';
import MyPlantsScreenPreviewImage from '@assets/onboarding/my-plants-screen-preview.png';

import BezierCurveOverlay from '../../components/BezierCurveOverlay/BezierCurveOverlay';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import PreviewHeading from '../../components/PreviewHeading/PreviewHeading';
import PreviewDescription from '../../components/PreviewDescription/PreviewDescription';
import Ellipsis from '../../components/Ellipsis/Ellipsis';
import PreviewButton from '../../components/Buttons/PreviewButton/PreviewButton';
import PreviewButtonContainer from '../../components/Buttons/PreviewButtonContainer/PreviewButtonContainer';

export const TEST_ID = 'my-plants-preview-screen';

const MyPlantsPreviewScreen = () => {
  return (
    <View style={styles.container} testID={TEST_ID}>
      <PreviewImage imageSource={MyPlantsScreenPreviewImage} />

      <BezierCurveOverlay>
        <PreviewHeading heading="My Plants - A Green Diary Just for You" />

        <PreviewDescription description="Bring your garden to life! Add your favorite plants, set care reminders, snap progress photos, & explore your planting history." />

        <Ellipsis activeEllipsis={3} />

        <PreviewButtonContainer>
          <PreviewButton
            text="Get Started"
            style={{
              color: Color.white,
              backgroundColor: Color.primary900,
              width: '90%',
            }}
          />
        </PreviewButtonContainer>
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
