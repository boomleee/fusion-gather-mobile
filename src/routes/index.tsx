import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {NavigationContainer} from '@react-navigation/native';
import DemoMap from '../screens/maps/DemoMap';
import FlashMessage from 'react-native-flash-message';
const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Map" component={DemoMap} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default MainRoute;
