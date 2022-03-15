import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import {
  NavigationContainer,
  DefaultTheme as NavDefaultTheme,
} from '@react-navigation/native';
import BottomNavbar from './src/components/BottomNavbar';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFA238',
    placeholder: '#B5B5B5',
    background: '#FFFFFF',
    text: '#434242',
  },
};

const navTheme = {
  ...NavDefaultTheme,
  roundness: 5,
  colors: {
    ...NavDefaultTheme.colors,
    primary: '#FFA238',
    placeholder: '#B5B5B5',
    background: '#FFFFFF',
    text: '#434242',
  },
};

export default function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <BottomNavbar />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
