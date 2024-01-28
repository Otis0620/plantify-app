import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Color from '~core/utils/enums/Color';

import PreviewButton from '../PreviewButton/PreviewButton';
import StyleProps from '../PreviewButton/utils/StyleProps';
import PreviewButtonContainer from '../PreviewButtonContainer/PreviewButtonContainer';
import { ParamList } from '../../../navigation/OnboardingStackNavigator';

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

interface Props {
  navigateTo: keyof ParamList;
}

const PreviewButtonGroup = ({ navigateTo }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <PreviewButtonContainer>
      <PreviewButton text="skip" style={skipButtonStyle} />

      <PreviewButton
        text="Continue"
        style={continueButtonStyle}
        onPress={() => navigation.navigate(navigateTo)}
      />
    </PreviewButtonContainer>
  );
};

export default PreviewButtonGroup;
