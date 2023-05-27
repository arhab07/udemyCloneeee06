import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components';
const CategoryContainer = styled(View)`
  flex-direction: column;
  width: 50%;
`;

const CategoryTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const TopicContainer = styled(View)`
  margin-bottom: 16px;
`;

const TopicName = styled(Text)`
  color: ${props => props.color};
  text-decoration-line: ${props => (props.underline ? 'underline' : 'none')};
  font-size: 14px;
  font-weight: bold;
`;

const TopicValue = styled(Text)`
  color: #6A6F73;
  margin-top: 8px;
  font-size: 12px;
  
`;

export const TopicGrid = ({ topics }) => {
    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          {topics.map((category, index) => (
            <CategoryContainer key={index}>
              <CategoryTitle key={index}>{category.category}</CategoryTitle>
              <View>
                {category.items.map((topic , index) => (
                  <TopicContainer key={index}>
                    <TopicName color={topic.color} underline={topic.underline}>
                      {topic.name}
                    </TopicName>
                    <TopicValue>{topic.value}</TopicValue>
                  </TopicContainer>
                ))}
              </View>
            </CategoryContainer>
          ))}
        </View>
      </>
    );
  };