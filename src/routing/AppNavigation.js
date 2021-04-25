import 'react-native-gesture-handler';
import React from 'react';
import Signup from '../components/AuthScreen/Signup';
import Profile from '../components/AuthScreen/Profile';
import EditProfile from '../components/AuthScreen/EditProfile';
import SagaScreen from '../components/AuthScreen/SagaScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName={Signup}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SagaScreen" component={SagaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppNavigation;