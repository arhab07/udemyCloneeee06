import React from "react";
import { View , Image} from "react-native";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
 height : 250px;
 
`;

export const SubContainer1 = () => {
        return(
            <View style={{flex:1}}>
            <StyledImage
              source={require("../../../../assets/smile.png")} />
          </View>

        )
}