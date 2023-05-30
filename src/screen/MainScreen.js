import { Flex } from "@react-native-material/core";
import {React, useState , useEffect} from "react";
import { View, SafeAreaView, Text, StatusBar, Platform, ScrollView } from "react-native";
import styled from "styled-components";
import { UdemyBar } from "../components/Appbar";
import containersData from "./Component.json";




const isAndroid = Platform.OS === "android";
import { getContainerComponent } from "./ContainerJson/TotalContainer";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Container = styled(SafeArea)`
  marginTop: ${isAndroid ? StatusBar.currentHeight + "px" : "0"};
`;

export const MainScreen = () => {
    const [containers, setContainers] = useState([]);
  
    useEffect(() => {
        const excludedIds = [7,8]; // removes the components 
        const updatedContainers = containersData.containers.filter((container) => {
          return !excludedIds.includes(container.id);
        });
        setContainers(updatedContainers);
      }, []);
  
    return (
      <Container>
        <SafeArea>
          <ScrollView>
            <UdemyBar />
            <View style={{ flex: 0.5, marginTop: 0 }}>
              {containers.map((container) => {
                const ContainerComponent = getContainerComponent(container.component);
                  return <ContainerComponent key={container.id} />;
              
              })}
            </View>
          </ScrollView>
        </SafeArea>
      </Container>
    );
  };