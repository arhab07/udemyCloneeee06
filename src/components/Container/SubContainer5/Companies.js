import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";

const ViewHeading = styled(View)`
  flex-direction: column;
  align-items: center;
`;

const Para = styled(Text)`
  margin-top: 8px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 12px;
`;

const Heading = styled(Text)`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

const ImageContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

const ImageItem = styled(Image)`
  width: 70px;
  height:20px;
  ${'' /* aspect-ratio: 5/3; */}
  margin-bottom: 30px;
`;

export const Company = () => {
  return (
    <ViewHeading>
      <Heading>Trusted by Over 13,400 Great Teams</Heading>
      <Para>
        Leading Companies use the same course to help employees keep their skills fresh
      </Para>
      <ImageContainer>
        <ImageItem source={require("../../../../assets/nasdaqDark.png")} />
        <Image style={{width:44 , height:44}} source={require("../../../../assets/volkswagen-dark.png")} />
        <Image style={{width:70 , height:44}} source={require("../../../../assets/box-dark.png")} />
        <ImageItem source={require("../../../../assets/netapp-dark.png")} />
        <ImageItem source={require("../../../../assets/eventbrite-dark.png")} />
        <ImageItem source={require("../../../../assets/tcs-dark.png")} />
      </ImageContainer>
    </ViewHeading>
  );
};
