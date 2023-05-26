import { StatusBar  as ExpoStatusBar} from 'expo-status-bar';
import {theme} from "./src/infrastructure/theme"
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './src/screen/MainScreen';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <MainScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

