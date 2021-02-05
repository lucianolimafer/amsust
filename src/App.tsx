import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import Routes from './routes';
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#2f3532" translucent />
    <View style={{flex: 1}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
