import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Platform, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import { MainDrawer } from "./MainScreenNav";
import Constants from 'expo-constants';
const getHeight = Dimensions.get("window").height;
const isAndroid = Platform.OS === "android";
import { Entypo } from "@expo/vector-icons";


export const SubDrawerContent = ({ category }) => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const handleLoginPress = () => {
    setIsLoginPressed(true);
  };

  if (isLoginPressed) {
    return <MainDrawer />;
  }

  return (
    <View style={{ width: "140%", paddingTop: isAndroid ? Constants.statusBarHeight : 0 }}>
      <View style={{ backgroundColor: "#f7f9fa", padding: 16, flexDirection: "row" }}>
        <TouchableOpacity onPress={handleLoginPress} style={{ flexDirection: "row" }}>
          <Entypo name="chevron-small-left" size={20} color={"black"} />
          <Text style={{ fontSize: 16, marginLeft: 20 }}>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10, padding: 16 }}>
        <View style={{ flexDirection: "column", paddingVertical: 0, width: "100%" }}>
          {category.map((subcategory, index) => (
            <TouchableOpacity key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingVertical: getHeight * 0.01,
                }}
              >
                <Text style={{ fontSize: 16, color: "#1c1d1f" }}>{subcategory.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};