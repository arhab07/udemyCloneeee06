import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './SlideBar';
import { MainScreen } from "../screen/MainScreen";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainScreen"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ width: windowWidth * 0.7 }}
    >
      <Drawer.Screen name="MainScreen" component={MainScreen} />
    </Drawer.Navigator>
  );
};
