
import { Flex } from "@react-native-material/core";
import React from "react";
import {View, SafeAreaView , Text , StatusBar , Platform ,ScrollView } from "react-native";
import styled from "styled-components";
import { UdemyBar } from "../components/Appbar";
import { Container1 } from "../components/Container/Container1";
import { Container2 } from "../components/Container/Container2";
import { Container3 } from "../components/Container/Container3";
import { Container4 } from "../components/Container/Container4";
const isAndroid = Platform.OS === "android"

const SafeArea = styled(SafeAreaView)`
flex : 1 ;
background-color: ${(props) =>  props.theme.colors.ui.quaternary} 
`


const Container = styled(SafeArea)`
marginTop : ${isAndroid ? StatusBar.currentHeight + "px" : "0"}
`

export const MainScreen = () => {
    

    return(
        <Container>
            <SafeArea>
            <ScrollView>
                <UdemyBar />
                <View style={{flex:0.5 , marginTop:0} }>
                <Container1 />
                <Container2 />
                <Container3 />
                <Container4 />
                </View>
            </ScrollView>
            </SafeArea>
        </Container>
    )
}
