import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { CustomDrawerContent } from './src/components/SlideBar';
import { MainScreen } from "./src/screen/MainScreen";
import { SignIn } from './src/Logincomponents/SignIn';
import { MainScreenUI } from './src/Logincomponents/mainScreen';
import { CreateScreenUI } from './src/Logincomponents/mainCreateScreen';
import { Search } from './src/screen/Search';
import { MyLearning } from './src/screen/MyLearning';
import { WishList } from './src/screen/WishList';
import { Account } from './src/screen/Account';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SignBox } from './src/Logincomponents/body';
import { SignInWithEmail } from './src/Logincomponents/SignInWithEmail';
import { SignEmail } from './src/Logincomponents/LogininwithEmailComponents/CreateAnAccount';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Main" component={MainStack} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" options={{ headerShown: false }} component={MainScreen} />
      <Stack.Screen name="MainScreenUI" options={{ headerShown: false }} component={MainScreenUI} />
      <Stack.Screen name="CreateScreenUI" options={{ headerShown: false }} component={CreateScreenUI} />
      <Stack.Screen name="SignIn Page" component={SignEmail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Feature':
              iconName = 'staro';
              break;
            case 'Search':
              iconName = 'search1';
              break;
            case 'MyLearning':
              iconName = 'playcircleo';
              break;
            case 'Wish List':
              iconName = 'hearto';
              break;
            default:
              break;
          }

          return <AntDesign name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          display: 'flex',
        },
      })}
    >
      <Tab.Screen name="Feature" component={DrawerNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MyLearning" component={MyLearning} />
      <Tab.Screen name="Wish List" component={WishList} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};




export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator /> 
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
