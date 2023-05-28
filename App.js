// App.js
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { CustomDrawerContent } from './src/components/SlideBar';
import { MainScreen } from "./src/screen/MainScreen";
import { SignIn } from './src/Logincomponents/SignIn';
import { MainScreenUI } from './src/Logincomponents/mainScreen';
import { CreateScreenUI } from './src/Logincomponents/mainCreateScreen';

const windowWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ width: windowWidth * 0.7 }}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} component={MainScreen} />
     <Stack.Screen
          name="mainScreen"
          component={MainScreenUI}
          options={{headerShown:false}}
        />
      <Stack.Screen
          name="mainCreateScreen"
          component={CreateScreenUI}
          options={{headerShown:false}}
        />
    </Stack.Navigator>
  );
};

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
