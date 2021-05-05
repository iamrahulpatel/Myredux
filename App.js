import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigation from './src/routing/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
