import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type ParamList = {
  StorybookScreen: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const NavigationDecorator = (story: () => StoryFnReactReturnType) => {
  const Screen = () => story();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="StorybookScreen"
          component={Screen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationDecorator;
