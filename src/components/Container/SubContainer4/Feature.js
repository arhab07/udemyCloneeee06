import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components';
import { topics } from './data';
import { TopicGrid } from './Topic';
const ViewHeading = styled(View)`
  margin-bottom: 24px;
`;

const TextHeading = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
const ExploreBox = styled(View)`
height:50;
width:100%;
margin-top:20px;
border-width:1px;
justify-content: center;
align-items: center;
`
const ExploreTopic = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold};
`
export const Feature = () => {
    const firstRowTopics = topics.slice(0, 2);
    const secondRowTopics = topics.slice(2, 4);
  return (
    <View>
      <ViewHeading>
        <TextHeading>Feature topics by category</TextHeading>
      </ViewHeading>
      <TopicGrid topics={firstRowTopics} />
      <TopicGrid topics={secondRowTopics} />
      <ExploreBox>
                    <ExploreTopic>Explore More Topics</ExploreTopic>
      </ExploreBox>
    </View>
  );
};
