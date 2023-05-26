import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const View2 = styled(View)`
  width: 100%;
  height: 400px;
  ${'' /* background-color:"#ffffff" */}
    ${'' /* border-width: 0.8px; 
   border-color: #a3a7ad;  */}
  ${'' /* margin-horizontal: 24px; */}
  ${'' /* padding-horizontal: 24px; */}
`;
const View3 = styled(View)`
 ${'' /* background-color: red;  */}
border-width: 0.8px;
  border-color: #a3a7ad;
  height: 350px;
   width: 350px; 
  margin-left: 45px;
background-color: #ffffff; 
  ${'' /* margin-bottom:-10px; */}
    ${'' /* max-width:50px; */}
  padding: 24px;
  

`
const Border = styled(View)`
  border-top-width: 0.6px;
  border-color: #a3a7ad;
  margin-top: 24px;
  padding-top: 24px;
`;
const Revies = [

    {
    Qicon: "quote-a-right" , review:" I am proud to say that after a few months of taking this course..." ,
    reviewBold:" I passed my exam and am now an AWS Certified Cloud Practitioner!",
    reviewText:"This content was exactly what the CCP exam covered. ",
    avatarText:"WA",
    avatarName:"Ron F",
    fontIcon :"play-circle",
    videoreview:" [NEW] Ultimate AWS Certified Cloud Practitioner - 2022"
},
    {Qicon: "'" , 
    review:" This course helped me " ,
    reviewBold:" freshen up on my product manager skills and land a job at Facebook!",
    reviewText:"Thanks guys :)",
    avatarText:"RA",
    avatarName:"Will A",
    fontIcon :"play-circle",
    videoreview :"Become a Product Manager | Learn the Skills & Get the Job"   
},
    {Qicon: "'" , 
    review:" One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. " ,
    reviewBold:" Would help anyone become a better manager.",
    reviewText:"This content was exactly what the CCP exam covered. ",
    avatarText:"PW",
    avatarName:"Philip W",
    fontIcon :"play-circle",
    videoreview:"[NEW] Ultimate AWS Certified Cloud Practitioner - 2022"
},
    {Qicon: "'" ,
     review:"I highly " ,
    reviewBold:"recommend this course for all budding data scientists.",
    reviewText:"Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
    avatarText:"SM",
    avatarName:"Surya M",
    fontIcon :"play-circle",
    videoreview:"Become a Product Manager | Learn the Skills & Get the Job"
},
]
export const Box3 = () => {
 

  return (
    <View style={styles.container}>
          <View2>
      <FlatList
        data={Revies}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
            <View3>
             <Fontisto  name="quote-a-right" style={{ marginBottom: 16, fontSize: 14, fontWeight: "bold" }} />
             <Text style={{ fontSize: 16, lineHeight: 25, marginBottom: 25 }}>
          I am proud to say that after a few months of taking this course...{" "}
          <Text style={{ fontWeight: "bold" }}>
            I passed my exam and am now an AWS Certified Cloud Practitioner!
            {" "}
            <Text>This content was exactly what the CCP exam covered.</Text>
          </Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Avatar.Text size={32} label="WA" color="white" style={{ backgroundColor: "black" }} />
          <Text style={{ marginLeft: 8, justifyContent: "center", textAlign: "center", fontSize: 14, fontWeight: "bold", marginTop: 3 }}>Will A</Text>
        </View>
        <Border />
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="play-circle" size={32} color="#3F1B9C" style={{}} />
          <Text style={{ marginLeft: 8, justifyContent: "center", fontSize: 16, fontWeight: "bold", width: "80%", color: "#3F1B9C" }}>
            [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
          </Text>
        </View>
            </View3>
        )}
      />
    
          </View2>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: -1,
  },
  contentContainer: {
    alignItems: "center",
  },
  item: {},
  title: {
    fontSize: 32,
  },
});
