import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { Avatar } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { MainDrawer } from './Sidenavbar/MainScreenNav';
import {useDrawerProgress} from "@react-navigation/drawer"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CustomDrawerContent = ({ navigation }) => {
  const isDrawerOpen = useDrawerProgress();

  const closeDrawer = () => {
    navigation.closeDrawer();
    console.log("Icon pressed");
  };

  return (
    <View style={[styles.drawerContentContainer, { width: windowWidth * 0.5 }]}>
      {isDrawerOpen && (
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={closeDrawer}>
            {/* <Avatar.Icon style={styles.closeIcon} size={45} icon="close" /> */}
          </TouchableOpacity>
        </SafeAreaView>
      )}
      <View style={{ flex: 1 }}>
        {isDrawerOpen && <MainDrawer />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 0.1,
    paddingTop: 6,
    backgroundColor: '#fff',
  },
  closeIcon: {
    position: "absolute ",
    top: Platform.OS === 'android' ? windowWidth * 0.1 : windowHeight * 0.01,
    left: "50%",
    transform: [{ translateX: 200 }, { translateY: Platform.OS === 'android' ? 10 : 0 }],
    backgroundColor: "#ffffff",
    zIndex: 1,
  },
});
