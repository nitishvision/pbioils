import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import NavigationStack from './NavigationStack';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
