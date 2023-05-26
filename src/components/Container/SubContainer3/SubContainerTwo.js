import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { CourseName } from "./data/data";
const View1 = styled(View)`
margin-top : 20px;
flex-direction:row;
flex-wrap:wrap;
${'' /* width: 100p */}

`
const View2 = styled(View)`
${'' /* width : 100px; */}
height:40px;
border-width:1 soild;
${'' /* border-radius:50px; */}
padding-horizontal:12px;
justify-content:center;
align-items:center;
margin-top:8px;
margin-left:8px
`

const View3 = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const View4 = styled.View`
  height: 40px;
  border-width: 1px;
  border-radius: 50px;
  padding-horizontal: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-left: 8px;
`;

const Text2 = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SubContainerTwo = () => {
  return (
    <View3>
      {CourseName.map((item) => (
        <View4 key={item.CosName}>
          <Text2>{item.CosName}</Text2>
        </View4>
      ))}
    </View3>
  );
};