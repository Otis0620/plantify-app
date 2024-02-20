import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import RootStackNavigator from '~core/navigation/RootStackNavigator';

import Storybook from './.storybook';

//Ignore all log notifications
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default Constants.expoConfig?.extra?.storyBookEnabled
  ? Storybook
  : App;
