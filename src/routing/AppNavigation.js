import 'react-native-gesture-handler';
import React from 'react';
import Signup from '../components/AuthScreen/Signup';
import Profile from '../components/AuthScreen/Profile';
import EditProfile from '../components/AuthScreen/EditProfile';
import Header from '../components/common/Header';
import PostList from '../components/AuthScreen/PostList';
import PostDetail from '../components/AuthScreen/PostDetail';
import MyMap from '../mapView/MyMap';

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
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="MyMap" component={MyMap} />
      </Stack.Navigator> 
    </NavigationContainer>
  );

}

export default AppNavigation;