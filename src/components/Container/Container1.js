import React from "react";
import { View } from "react-native";
import { SubContainer1 } from "./SubContainer1/SubContainer1";
import { SubContainer2 } from "./SubContainer1/SubContainer2";
import styled from "styled-components";
const ContainerView1 = styled(View)`
margin-bottom: ${props => props.theme.space[4]}
`

export const Container1 = () => {
        return(
            <ContainerView1>
                    <SubContainer1 />
                    <SubContainer2/>
            </ContainerView1>

        )
}