import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const SignBox = ({}) => {
  const viewsData = [
    { id: 1, text: "Sign in with email", iconName: "envelope-o" },
    { id: 2, text: "Sign in with Apple", iconName: "apple" },
    { id: 3, text: "Sign in with Facebook", iconName: "facebook-square", iconColor: "#3A559F" },
    { id: 4, text: "Sign in with Google", iconName: "google" },
  ];

  return (
    <>
      <View style={styles.container}>
        {viewsData.map((item) => (
          <View key={item.id} style={[styles.top1, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.text}>
              <Icon style={[styles.icon, { color: item.iconColor }]} name={item.iconName}  size={20} />
              <Text style={styles.iconMargin}>{'\u2003'}</Text>
              {item.text}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
  },
  top1: {
    margin: 5,
    flex: 0.1,
    margin: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  iconMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
});
