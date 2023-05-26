import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";

const View2 = styled.View`
  margin-top: ${(props) => props.theme.space[6]};
`;

const Text1 = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SubContainerOne = () => {
  return (
    <View2>
      <Text1>Top Categories</Text1>
    </View2>
  );
};