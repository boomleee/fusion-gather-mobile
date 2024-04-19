import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import DemoMap from '../screens/maps/DemoMap';
import FlashMessage from 'react-native-flash-message';
import Home from '../screens/home';
import Event from '../screens/event';
import QRCode from '../screens/qr';
import BoothPage from '../screens/booth';
const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ScanQR" component={QRCode} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Map" component={DemoMap} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Booth" component={BoothPage} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default MainRoute;
