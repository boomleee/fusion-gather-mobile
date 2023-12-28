import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
