
import React from 'react';
import { SafeAreaView } from 'react-native';

import Home from './screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';

const App = () => {

  return <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>;
};


export default App;
