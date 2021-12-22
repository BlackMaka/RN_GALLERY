import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {UserContextProvider} from './contexts/UserContext';
import RootStack from './screens/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <RootStack />
      </UserContextProvider>
    </NavigationContainer>
  );
}
