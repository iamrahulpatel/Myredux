import 'react-native-gesture-handler';
import React from 'react';
// import Signup from './src/screen/Signup';
// import Profile from './src/screen/Profile';
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigation from './src/routing/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Signup /> */}
      {/* <Profile /> */}
      <AppNavigation />
    </Provider>
  );
}

export default App;
