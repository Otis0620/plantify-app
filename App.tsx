import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Storybook from './.storybook';
// import HomePreviewScreen from './app/features/onboarding/presentation/screens/HomePreviewScreen/HomePreviewScreen';
// import DiagnosePreviewScreen from './app/features/onboarding/presentation/screens/DiagnosePreviewScreen/DiagnosePreviewScreen';
import MyPlantsPreviewScreen from './app/features/onboarding/presentation/screens/MyPlantsPreviewScreen/MyPlantsPreviewScreen';

function App() {
  return (
    <SafeAreaView style={styles.container} testID="container">
      <View style={styles.container}>
        {/* <HomePreviewScreen /> */}
        {/* <DiagnosePreviewScreen /> */}
        <MyPlantsPreviewScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Constants.expoConfig?.extra?.storyBookEnabled
  ? Storybook
  : App;
