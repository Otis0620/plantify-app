import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePreviewScreen from '../screens/HomePreviewScreen/HomePreviewScreen';
import DiagnosePreviewScreen from '../screens/DiagnosePreviewScreen/DiagnosePreviewScreen';
import MyPlantsPreviewScreen from '../screens/MyPlantsPreviewScreen/MyPlantsPreviewScreen';
import { Screen } from './utils/enums/Screen';

export type ParamList = {
  [Screen.HomePreview]: undefined;
  [Screen.DiagnosePreview]: undefined;
  [Screen.MyPlantsPreview]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const OnboardingStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={Screen.HomePreview}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={Screen.HomePreview}
      component={HomePreviewScreen}
    />
    <Stack.Screen
      name={Screen.DiagnosePreview}
      component={DiagnosePreviewScreen}
    />
    <Stack.Screen
      name={Screen.MyPlantsPreview}
      component={MyPlantsPreviewScreen}
    />
  </Stack.Navigator>
);

export default OnboardingStackNavigator;
