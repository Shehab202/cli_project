import {View} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Tab} from '@ui-kitten/components';
import Header from './src/screens/header/Header';
import MainNews from './src/screens/mainNews/MainNews';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  NavigationContainer } from '@react-navigation/native';

const Tab=createBottomTabNavigator()
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer>
      <Header />
      <Tab.Navigator>
      <Tab.Screen name="/" component={MainNews}/>
      </Tab.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
