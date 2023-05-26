import React from "react";
import { View , TouchableOpacity, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";

const AppBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${props => props.theme.space[4]};
  height: 56px;
  background-color: #ffffff;
`;

const LeadingButton = styled.TouchableOpacity`
  margin-right:${props => props.theme.space[2]};  
  padding-horizontal:${props =>props.theme.space[2]};
`;

const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const TitleImage = styled(Image)`
  width: 100px;
  height: 90px;
  resize-mode: contain;
  margin-left: 48px;
`;

const TrailingButton = styled(TouchableOpacity)`
  ${'' /* margin-left: 8px; */}
  padding-horizontal: 12px;
`;

export const UdemyBar = () => {
  return (
    <>
      <AppBar>
        <LeadingButton>
          <Icon name="menu" size={24} />
        </LeadingButton>

        <TitleContainer>
          <TitleImage
            source={{
              uri:
                "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg",
            }}
          />
        </TitleContainer>

        <TrailingButton>
          <Icon name="magnify" size={24} />
        </TrailingButton>

        <TrailingButton>
          <Icon name="cart-outline" size={24} />
        </TrailingButton>
      </AppBar>
    </>
  );
};
