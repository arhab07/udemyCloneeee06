import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { SignBox } from "./body";
import { Create } from "./footer";
import { SignIn } from "./SignIn";


export const MainScreenUI = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SignIn />
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
 
});
