import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-paper";
import { Feature } from "./SubContainer4/Feature";

const View1 = styled(View)`
padding-horizontal : ${props => props.theme.space[5] };
padding-Vertical : ${props => props.theme.space[5] };
background-color: #F6F9FA;
`

export const Container4 = () => {
    return(
        <View1>
                <Feature />
        </View1>
    )
}