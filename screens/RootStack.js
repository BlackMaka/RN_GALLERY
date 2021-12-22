import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import {useUserContext} from '../contexts/UserContext';
import MainTab from './MainTab';

export default function RootStack() {
  const {user} = useUserContext();
  const {Navigator: StackNavigator, Screen: StackScreen} =
    createNativeStackNavigator();

  return (
    <StackNavigator>
      {user ? (
        <>
          <StackScreen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <StackScreen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <StackScreen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </StackNavigator>
  );
}
