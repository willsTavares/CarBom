import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './TabsNavigator';

function Router() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

export default Router;
