import { Pressable, StyleSheet, Text } from 'react-native';
import Font from '@core/utils/enums/Font';

import StyleProps from './utils/StyleProps';

interface Props {
  text: string;
  style: StyleProps;
}

export const TEST_ID = 'preview-button';

const PreviewButton = ({ text, style }: Props) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: style.backgroundColor,
        width: style.width,
      }}
      testID={TEST_ID}
    >
      <Text style={{ ...styles.text, color: style.color }}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 1000,
    paddingVertical: '3.5%',
  },

  text: {
    alignSelf: 'stretch',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Font.primaryBold,
    textAlign: 'center',
  },
});

export default PreviewButton;
