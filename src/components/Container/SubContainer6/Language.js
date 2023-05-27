
import React from "react";
import { View , Image } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { Fontisto } from '@expo/vector-icons';
import { menu } from "./const data";

const View1 = styled(View)`
  padding-vertical: 24px;
  ${'' /* width: 10%; */}
  ${'' /* height: 88px; */}
  border-color: #ffffff;
`;

const Text1 = styled(Text)`
  color: #ffffff;
  margin-left: 10px;
  margin-top: 2px;
`;

const Text3 = styled(Text)`
  color: #ffffff;
  margin-vertical:6px;
`;

export const Language = () => {
  return (
    <View style={{ paddingVertical: 24 }}>
      <View1>
        <View style={{ flexDirection: "row" , width:150 , height: 40 , borderColor:"#ffffff", borderWidth:1  , paddingHorizontal:24 ,  justifyContent:"center" , alignItems:"center" }}>
          <Fontisto name="world-o" size={20} color="white" />
          <Text1>English</Text1>
        </View>
      </View1>

      <View style={{ flexDirection: "column" ,marginVertical:10 }}>
        {menu.map(({ menuName }) => {
          return <Text3 key={menuName}>{menuName}</Text3>;
        })}
    <Image style={{width: 97, height:34 , marginTop: 20}} source={require("../../../../assets/logo-udemy-inverted.png")} />
        <Text style={{color: "#ffffff" , marginTop: 14 ,  marginBottom:22}}>2023 Udemy , Inc</Text>
      </View>



    </View>
  );
};