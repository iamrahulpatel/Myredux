import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import Signup from '../components/AuthScreen/Signup';
import Profile from '../components/AuthScreen/Profile';
import EditProfile from '../components/AuthScreen/EditProfile';
import Header from '../components/common/Header';
import PostList from '../components/AuthScreen/PostList';
import PostDetail from '../components/AuthScreen/PostDetail';
import MyMap from '../mapView/MyMap';
import DeepLink from '../components/AuthScreen/DeepLinking/DeepLink';
import CameraRolling from "../components/AuthScreen/CameraRoll/CameraRolling";
import {Linking} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppState } from '../components/common/useAppState';


const Stack = createStackNavigator();


const AppNavigation = () => {

  const currentAppState = useAppState()

  const deepLink = {
    prefixes: ["my-redux://", "https://my-redux.com/app"],
    config: {
      Profile: 'profile',
      MyMap: 'maps',
      DeepLink: {
        path: 'deep/:id',
        params: {
          id: null
        }
      }
    }
  }


  React.useEffect(() => {
    Linking.addEventListener("url", ({ url }) => {
      // console.log("listener")
      if (url) {
        // letarr = url.split("/")
        // idParam = arr[arr.length - 1]
        // dummyDeepLinkedUrl = url;
        // if (idParam.includes("_")) {
        //   idParam = idParam.substring(0, idParam.indexOf("_"))
        // }
        // navigateToUrl(url, idParam)
        console.log("event listener",url)
      }
    })
    if (currentAppState == 'active') {
      Linking.getInitialURL().then(url => {
        console.log("second listener", url)
      });
    }
    return (() => {
      removeLinkingListeners()
    })
  }, [])

  const removeLinkingListeners = async () => {
    Linking.removeAllListeners('url')
  }

useEffect(()=>{
  console.log("currentAppState ",currentAppState)
},[currentAppState])

  return (
    <NavigationContainer linking={deepLink}>
      <Stack.Navigator headerMode={false} initialRouteName={Signup}>

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="MyMap" component={MyMap} />
        <Stack.Screen name="DeepLink" component={DeepLink} />
        <Stack.Screen name="CameraRolling" component={CameraRolling} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppNavigation;