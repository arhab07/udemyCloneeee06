import React, { useState } from "react";
import { View, Text, TouchableOpacity , TextInput} from "react-native";
import styled from "styled-components/native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const View1 = styled(View)`
  flex: 1;
  padding-horizontal: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[4]};
`;

const Text1 = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  width: 82%;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const Text2 = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: 25px;
  color: #1C1D1F
`;

const BlankSpace = styled(View)`
  margin-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};
`;

const View3 = styled(View)`
  border-width: 1px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 48px;
  width:100%;
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  height:40px;
  
 
`;

export const SubContainer2 = ({ placeholder, value, onChangeText }) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    // Handle TouchableOpacity press event here
    console.log("TouchableOpacity pressed");
  };

  return (
    <View1>
      <Text1>It's the last day for these savings</Text1>
      <Text2>
        With courses from ₹389, it's the right time for the right skills and
        you.
      </Text2>
      <BlankSpace />
      <View3>
        <StyledTextInput  placeholder="What do you want to learn ?" value={value} onChangeText={onChangeText} />
        <TouchableOpacity onPress={handlePress}>
          <Icon name="magnify" size={24} />
        </TouchableOpacity>
      </View3>
    </View1>
  );
};
