import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, TabBar} from '@ui-kitten/components';
import MainNews from '../mainNews/MainNews';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Details from '../details/Details';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Heart from '../heart/Heart';
import Login from '../login/Login.Screen';
import Settings from '../settings/Settings';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Home = () => {
  const {mood} = useSelector(state => state.themeSlice);
  const theme = mood === 'dark' ? eva.dark : eva.light;
  const Tabs = () => (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#780C28',
          tabBarInactiveTintColor: 'rgb(225, 190, 231)',
        }}
        name="mainNews"
        component={MainNews}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#780C28',
          tabBarInactiveTintColor: 'rgb(225, 190, 231)',
        }}
        name="heart"
        component={Heart}
      />
    </Tab.Navigator>
  );
  return (
    <>
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="tab" component={Tabs} />
            <Stack.Screen name="details" component={Details} />
            <Stack.Screen name="settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </ApplicationProvider>
    </>
  );
};
export default Home;
