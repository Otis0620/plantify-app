import Color from '@core/utils/enums/Color';

import PreviewButton from '../PreviewButton/PreviewButton';
import StyleProps from '../PreviewButton/utils/StyleProps';
import PreviewButtonContainer from '../PreviewButtonContainer/PreviewButtonContainer';

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
    <PreviewButtonContainer>
      <PreviewButton text="skip" style={skipButtonStyle} />

      <PreviewButton text="Continue" style={continueButtonStyle} />
    </PreviewButtonContainer>
  );
};

export default PreviewButtonGroup;
