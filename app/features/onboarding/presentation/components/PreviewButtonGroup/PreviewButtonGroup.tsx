import { Pressable, StyleSheet, Text, View } from 'react-native';
import Color from '@core/utils/enums/Color';
import Font from '@core/utils/enums/Font';

const PreviewButtonGroup = () => {
  return (
    <View style={styles.container} testID="preview-button-group">
      <Pressable
        style={{
          ...styles.button,
          backgroundColor: Color.backgroundGreen,
        }}
      >
        <Text
          style={{ ...styles.buttonText, color: Color.primary900 }}
        >
          Skip
        </Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={{ ...styles.buttonText, color: Color.white }}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: '7%',
  },

  button: {
    backgroundColor: Color.primary900,
    borderRadius: 1000,
    paddingVertical: '2.5%',
    width: '45%',
  },

  buttonText: {
    alignSelf: 'stretch',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: '700',
    fontFamily: Font.primaryBold,
    textAlign: 'center',
  },
});

export default PreviewButtonGroup;
