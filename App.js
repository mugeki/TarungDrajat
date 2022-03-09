import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavDefaultTheme,
} from '@react-navigation/native';
import BottomNavbar from './src/component/BottomNavbar';

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
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <BottomNavbar />
      </NavigationContainer>
    </PaperProvider>
  );
}
