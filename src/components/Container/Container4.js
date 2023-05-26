import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-paper";

const View1 = styled(View)`
padding-horizontal : ${props => props.theme.space[5] }
`

export const Container4 = () => {
    return(
        <View1>

        </View1>
    )
}