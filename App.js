import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
// import { MainScreen } from './src/screen/MainScreen';
import { DrawerNavigator } from './src/components/Drawer';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}