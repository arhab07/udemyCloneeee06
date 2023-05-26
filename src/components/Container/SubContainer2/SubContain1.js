import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import { Text } from "react-native-paper"

const View1 = styled(View)`
margin-bottom : ${(props) => props.theme.space[3]};
padding-Horizontal:24px

`

const Text1 = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.h5};
font-weight: ${(props) => props.theme.fontWeights.bold};
margin-bottom: ${props =>props.theme.space[2]}
`
const Text2 = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.body};
font-weight: ${(props) => props.theme.fontWeights.regular};
color: #1C1D1F;
textAlign: justify;
line-height: 25px;
width:85%
`



export const SubContain1 = () => {
    return(
        <View1>
            <Text1>A broad selection of courses</Text1>
            <Text2 >Choose from over 210,000 online video courses with new additions published every month</Text2>
        </View1>
    )
}
