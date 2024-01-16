import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import HomePreviewScreen from './app/features/onboarding/presentation/screens/HomePreviewScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container} testID="container">
      <View style={styles.container}>
        <HomePreviewScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00a86b',
  },
});
