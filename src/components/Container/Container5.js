import React  from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-paper";
import { Company } from "./SubContainer5/Companies";

const View1 = styled(View)`
padding : ${props => props.theme.space[6]}
`

export const Container5 = () => {
    return(
        <View1>
                <Company />
        </View1>
    )
}