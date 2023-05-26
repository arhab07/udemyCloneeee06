import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import star from "../../../../../assets/star";

const Courses = [
  {
    title: "The ultimate Drawing course - Beginner to Advance",
    image: "https://img-c.udemycdn.com/course/240x135/1452908_8741_4.jpg",
    author: "Jaysen Batchlor",
    price: "3999",
    rating: 4.6,
    totalPrice: "499",
    Totalrating: "(118,149)",
    isBestSeller: true
  },
  {
    title: "3D Visualization For Beginners: Interior Scene with 3DS MAX",
    image: "https://sjcc.ac.in/mfti/wp-content/uploads/2022/04/graphic-design.jpg",
    author: "Widhi Muttaqien, S.kom MMSI",
    price: "3999",
    rating: 2.3,
    totalPrice: "499",
    Totalrating: "(18,149)",
    isBestSeller: false
  },
  {
    title: "Feng Shui The Easiest Way",
    image: "https://edit.co.in/images/graphic-banner.png",
    author: "Arhab Muhammad",
    price: "3999",
    rating: 3.8,
    totalPrice: "499",
    Totalrating: "(100,149)",
    isBestSeller: false
  },
  {
    title: "Learn 3D Modelling for Beginners",
    image: "https://www.zilliondesigns.com/blog/wp-content/uploads/graphic-designing-1.png",
    author: "Jaysen Batchlor",
    price: "3999",
    rating: 5,
    totalPrice: "499",
    Totalrating: "(318,349)",
    isBestSeller: true
  },
];

const TouchOp = styled(TouchableOpacity)`
  width: 250px;
  height: 250px;
  margin-left: 20px;
  margin-bottom: -40px; /* Add margin-bottom to create spacing between items */
`

const View1 = styled(View)`
  flex: 1;
  ${'' /* background-color: red; */}
`;

export const CourseSwap = () => {
  return (
    <FlatList
      data={Courses}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const starIcons = Array(Math.floor(item.rating))
          .fill()
          .map((_, index) => (
            <SvgXml key={index} xml={star} width={14} height={14} />
          ));

        return (
          <TouchOp>
            <View1 />
          </TouchOp>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
