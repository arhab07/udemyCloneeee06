import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { SubContainerTwo } from "./SubContainer3/SubContainerTwo";
import { SubContainerOne } from "./SubContainer3/SubContaonOne";


const View1 = styled.View`
  padding: ${(props) => props.theme.space[5]};
`;

export const Container3 = () => {
  return (
    <View1>
      <SubContainerOne />
      <SubContainerTwo />
    </View1>
  );
};