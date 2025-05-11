import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Home from './src/screens/home/Home';
import store from './src/store/store';
import {StatusBar, Text} from 'react-native';
import SplashScreen from './src/splashScreen/SplashScreen';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timerSplash = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timerSplash);
  }, []);
  return isLoaded ? (
    <Provider store={store}>
         <StatusBar backgroundColor="#0D0D0D" barStyle="light-content" />
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  ) : (
    <SplashScreen />
  );
};
export default App;
