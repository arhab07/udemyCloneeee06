import React, { useRef, useCallback } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";
import { desginCourse, WebCourse, WeCourse } from "./Desgin";

const View1 = styled(View)`
  width: 100%;
  height: 55%;
  margin-top: 20px;
`;

const View2 = styled(View)`
  width: 250px;
  margin-left: 20px;
`;

export const StudentsScroll = () => {
  const flatListsRefs = useRef([]);

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesome key={i} name="star" color={"gold"} />);
    }

    if (halfStar) {
      stars.push(<FontAwesome key={fullStars} name="star" color={"gold"} />);
    }

    return stars;
  };

  const handleScroll = useCallback((event, index) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;

    flatListsRefs.current.forEach((ref, i) => {
      if (ref && ref !== event.target && i !== index) {
        ref.scrollToOffset({ offset: scrollOffset, animated: false });
      }
    });
  }, []);

  const renderItem = (item, index) => {
    return (
      <View2>
        <View style={{ flexDirection: "row" }}>
          <Image style={{ width: 80, height: 80 }} source={{ uri: item.image }} />
          <View style={{ flexDirection: "column", width: "50%", marginLeft: 13 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ fontSize: 12, marginVertical: 5 }}>{item.author}</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              {renderRatingStars(item.rating)}
              <Text style={{ marginLeft: 8 }}>{item.Totalrating}</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 4, justifyContent: "flex-start" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>₹{item.totalPrice}</Text>
              <Text style={{ textDecorationLine: "line-through", marginLeft: 6 }}>₹{item.price}</Text>
            </View>
            {item.isBestSeller && (
              <View
                style={{
                  width: 100,
                  height: 20,
                  backgroundColor: "#ECEB98",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>Best Seller</Text>
              </View>
            )}
          </View>
        </View>
      </View2>
    );
  };

  return (
    <View1>
      <FlatList
        ref={(ref) => (flatListsRefs.current[0] = ref)}
        data={desginCourse}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item, 0)}
        onScroll={(event) => handleScroll(event, 0)}
        scrollEventThrottle={16}
      />

      <FlatList
        ref={(ref) => (flatListsRefs.current[1] = ref)}
        data={WebCourse}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item, 1)}
        onScroll={(event) => handleScroll(event, 1)}
        scrollEventThrottle={16}
      />

      <FlatList
        ref={(ref) => (flatListsRefs.current[2] = ref)}
        data={WeCourse}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item, 2)}
        onScroll={(event) => handleScroll(event, 2)}
        scrollEventThrottle={16}
      />
    </View1>
  );
};
