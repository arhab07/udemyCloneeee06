import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
// import { MaterialIcons } from '@expo/vector-icons';
import { CourseSwap } from "./Course/Courseswap";
import {MaterialIcons} from "@expo/vector-icons"

const Border = styled(View)`
  flex-direction: row;
  padding-vertical: 16px;
  border-top-width: 1px;
  border-top-color: #a3a7ad;
  justify-content: space-between;
  width: 100%;
`

const CourseName = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.bold};
`

const Container = styled(View)`
  ${'' /* flex: 1; */}
  margin-top: 25px;
  ${'' /* margin-left: 24px; */}
  padding-horizontal:24px
`;

const Course = [
  { courseName: "Python", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "Excel", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "WebDevelopment", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "JavaScript", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "Data Science", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "Amazon AWS", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" },
  { courseName: "Drawing", iconDown: "keyboard-arrow-down", iconUp: "keyboard-arrow-up" }
];

export const SubContain2 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      {Course.map((course, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity onPress={() => handlePress(index)}>
            <Border isLast={index === Course.length - 1}>
              <CourseName>{course.courseName}</CourseName>
              <MaterialIcons
                name={expandedIndex === index ? course.iconUp : course.iconDown}
                size={20}
                style={{marginRight:10 }}
                color="black"
              />
            </Border>
          </TouchableOpacity>
          {expandedIndex === index && <CourseSwap />}
        </React.Fragment>
      ))}
    </Container>
  );
};
