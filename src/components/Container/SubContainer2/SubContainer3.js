import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-paper";

import { Box3 } from "./Course/Box2";
import { StudentsScroll } from "./Course/Scroll";

const View1 = styled(View)`
  margin-top: 16px;
  padding-horizontal: 24px;
  ${'' /* margin-bottom:16px */}
`;

const Text1 = styled(Text)`
  padding-vertical: 32px;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.h5};
`;

const Container = styled(View)`
  background-color: #F6F9FA;
  margin-top: 50px;
  padding-bottom: 50px;
`;


const View2 = styled(View)`
margin-top : 48px;
padding-horizontal:24px;
`
const Students = styled(Text)`
font-size: ${props => props.theme.fontSizes.h5}
font-weight : ${props => props.theme.fontWeights.bold}
`



export const SubContain3 = () => {
    return (
        <>

      <Container>
        <View1>
          <Text1>How learners like you are achieving their goals</Text1>
        </View1>
        <Box3 />
    
      </Container>
      <View2>
        <Students>Students are Viewing</Students>
        <StudentsScroll />

      </View2>
        </>
    );
  };
  
