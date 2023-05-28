import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { SignBox } from "./body";
import { CreateAccount } from "./CreateAccount";
import { Create } from "./footer";



export const CreateScreenUI = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
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
 
});
