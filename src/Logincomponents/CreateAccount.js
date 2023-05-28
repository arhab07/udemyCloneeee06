import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { useNavigation } from '@react-navigation/native';

const CreateView = styled(Text)`
  text-align: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

export const CreateAccount = () => {

  return (
    <>
      
        <View style={styles.view}>
          <CreateView variant="headlineMedium">Create account</CreateView>
          <Text style={styles.textSign}>
            By using our services, you are agreeing to our{" "}
            <Text style={styles.termsPrivacyText}>
              Terms{" "}
              <Text style={styles.and}>and</Text> Privacy Statement
            </Text>
          </Text>
        </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  textSign: {
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
    textAlign: "center",
    fontSize: 13,
    color: "#898b8c",
  },
  termsPrivacyText: {
    
    fontWeight: "500",
    color: "#68696b",
  },
  and: {
    color: "#898b8c",
    fontSize: 13,
  },
});
