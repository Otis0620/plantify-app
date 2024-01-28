import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingStackNavigator from '~features/onboarding/presentation/navigation/OnboardingStackNavigator';

enum StackScreens {
  Onboarding = 'Onboarding',
}

type ParamList = {
  [StackScreens.Onboarding]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const RootStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={StackScreens.Onboarding}
      component={OnboardingStackNavigator}
    />
  </Stack.Navigator>
);

export default RootStackNavigator;
