import React from "react";
import { SafeAreaView, StyleSheet, View , Button , Platform , StatusBar } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { SignBox } from "./body";
import { CreateAccount } from "./CreateAccount";
import { Create } from "./footer";
import { useNavigation } from "@react-navigation/native";
import { UdemyBar } from "../components/Appbar";
// import {}
import { AntDesign } from '@expo/vector-icons'; 

const isAndroid = Platform.OS === "android"

export const CreateScreenUI = () => {
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  return (
    <>
      <SafeAreaView style={styles.container}>

      <View style={isAndroid ? styles.androidIconContainer : styles.iconContainer}>
          <AntDesign onPress={handleGoBack} name="arrowleft" size={24} color="black" />
        </View>
        <CreateAccount />
        <SignBox />
        <Create />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    paddingLeft: 20,
    marginTop: isAndroid ? 0 : StatusBar.currentHeight,
  },
  androidIconContainer: {
    paddingLeft: 20,
    marginTop: StatusBar.currentHeight + 10,
  },
});
