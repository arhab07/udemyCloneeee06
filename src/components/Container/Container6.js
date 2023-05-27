import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-paper";
import { Language } from "./SubContainer6/Language";


const View1 = styled(View)`
background-color : #1C1D1F;
${'' /* height:auto; */}
width:100%
padding-Horizontal:${props=> props.theme.space[5]}

`

export  const  Container6 = () =>  {
    return(
        <View1>
                <Language />  
        </View1>
    )
}