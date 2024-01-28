import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePreviewScreen from '../screens/HomePreviewScreen/HomePreviewScreen';
import DiagnosePreviewScreen from '../screens/DiagnosePreviewScreen/DiagnosePreviewScreen';
import MyPlantsPreviewScreen from '../screens/MyPlantsPreviewScreen/MyPlantsPreviewScreen';

export enum Screens {
  HomePreview = 'HomePreview',
  DiagnosePreview = 'DiagnosePreview',
  MyPlantsPreview = 'MyPlantsPreview',
}

export type ParamList = {
  [Screens.HomePreview]: undefined;
  [Screens.DiagnosePreview]: undefined;
  [Screens.MyPlantsPreview]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const OnboardingStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={Screens.HomePreview}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={Screens.HomePreview}
      component={HomePreviewScreen}
    />
    <Stack.Screen
      name={Screens.DiagnosePreview}
      component={DiagnosePreviewScreen}
    />
    <Stack.Screen
      name={Screens.MyPlantsPreview}
      component={MyPlantsPreviewScreen}
    />
  </Stack.Navigator>
);

export default OnboardingStackNavigator;
