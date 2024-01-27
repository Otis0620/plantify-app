import { StyleSheet, View } from 'react-native';
import Color from '@core/utils/enums/Color';

import PreviewButton from '../PreviewButton/PreviewButton';
import StyleProps from '../PreviewButton/utils/StyleProps';

const buttonWidth = '45%';

const skipButtonStyle: StyleProps = {
  color: Color.primary900,
  backgroundColor: Color.backgroundGreen,
  width: buttonWidth,
};

const continueButtonStyle: StyleProps = {
  color: Color.white,
  backgroundColor: Color.primary900,
  width: buttonWidth,
};

const PreviewButtonGroup = () => {
  return (
    <View style={styles.container} testID="preview-button-group">
      <PreviewButton text="skip" style={skipButtonStyle} />

      <PreviewButton text="Continue" style={continueButtonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '7%',
  },
});

export default PreviewButtonGroup;
