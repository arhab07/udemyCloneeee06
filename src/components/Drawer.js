// import React from 'react';
// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
// import { theme } from "./src/infrastructure/theme";
// import { ThemeProvider } from 'styled-components';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Dimensions } from 'react-native';
// import { CustomDrawerContent } from './src/components/SlideBar';
// import { MainScreen } from "./src/screen/MainScreen";
// import { SignIn } from './src/Logincomponents/SignIn';

// const windowWidth = Dimensions.get("window").width;

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// export  const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="MainStack"
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       drawerStyle={{ width: windowWidth * 0.7 }}
//     >
//       <Drawer.Screen name="MainStack" component={MainStack} />
//     </Drawer.Navigator>
//   );
// };

// export const MainStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MainScreen" component={MainScreen} />
//       <Stack.Screen name="SignIn" component={SignIn} />
//     </Stack.Navigator>
//   );
// };