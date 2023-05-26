
import React from "react";
import { View , Text } from "react-native";
import styled from "styled-components";
import { SubContain1 } from "./SubContainer2/SubContain1";
import { SubContain2 } from "./SubContainer2/SubContain2";
import { SubContain3 } from "./SubContainer2/SubContainer3";
const View1 = styled(View)`
flex:1;
${'' /* padding-Horizontal:24px */}
`
export const Container2 = () => {
        return(
            <View1>
                <SubContain1 />
                <SubContain2 />
                <SubContain3 />
                
                
            </View1>

        )
}