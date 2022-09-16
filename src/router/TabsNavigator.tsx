import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '@screens/Details';
import Home from '@screens/Home';
import Working from '@screens/Working';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

function TabsNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Details" component={Details} options={{ headerShown: false }}/>
      <Screen name="Working" component={Working} options={{ headerShown: false }}/>
    </Navigator>
  );
} 

export default TabsNavigator;
