import React from 'react';
import { StyleSheet, View } from 'react-native';

import HomePreviewScreen from './app/features/onboarding/presentation/HomePreviewScreen';

export default function App() {
  return (
    <View style={styles.container} testID="container">
      <HomePreviewScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
