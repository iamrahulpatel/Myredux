import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigation from './src/routing/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
