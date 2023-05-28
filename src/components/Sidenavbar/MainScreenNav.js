import {React , useState }from "react";
import { View, TouchableOpacity, StyleSheet, Platform , Dimensions } from "react-native";
import { Text } from "react-native-paper";
import Constants from 'expo-constants';
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {tags , categories } from "./data";
import { SubDrawerContent } from "./SubDrawer";
import { WebDevelopment , GameDevelopment , DigitalMarketing , PersonalTransformation , BackendDevelopment , AllCategories , MobileDevelopment } from "./data";
export const MainDrawer = () => {
  const isAndroid = Platform.OS === "android";
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get("window").height;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleLoginPress = (index) => {
    setSelectedCategoryIndex(index);
  };

  if (selectedCategoryIndex !== null) {
    let categoryData = [];
    const selectedCategory = categories[selectedCategoryIndex];

    switch (selectedCategory.title) {
      case "Web Development":
        categoryData = WebDevelopment;
        break;
      case "Mobile Development":
        categoryData = MobileDevelopment;
        break;
      case "Game Development":
        categoryData = GameDevelopment;
        break;
      case "Digital Marketing":
        categoryData = DigitalMarketing;
        break;
      case "Personal Transformation":
        categoryData = PersonalTransformation;
        break;
      case "Backend Development":
        categoryData = BackendDevelopment;
        break;
      case "All Categories":
        categoryData = AllCategories;
        break;
      default:
        categoryData = []; // Set a default value if no matching category is found
        break;
    }
    

    return <SubDrawerContent category={categoryData} />;
  }

  return (
    <View style={{ paddingTop: isAndroid ? Constants.statusBarHeight : 0 }}>
      <View style={{ flexDirection: "column", paddingVertical: 8 }}>
        <Text style={{ paddingVertical: 6, paddingHorizontal: 16, color: "#5624D0", fontSize: 16 }}>Log in</Text>
        <Text style={{ paddingVertical: 8, paddingHorizontal: 16, color: "#5624D0", fontSize: 16 }}>Sign up</Text>
      </View>
      <View style={{ borderBottomColor: "#6a6f73", borderBottomWidth: 0.5, width: "140%" }}></View>
      <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#6a6f73" }}>Most popular</Text>
      </View>
      <View style={{ flexDirection: "column", paddingVertical: 0, width: "140%" }}>
        {categories.map((category, index) => (
          <TouchableOpacity onPress={() => handleLoginPress(index)} key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: windowHeight * 0.01,
              }}
            >
              <Text style={{ fontSize: 16, color: "#1c1d1f" }}>{category.title}</Text>
              <Entypo name="chevron-small-right" size={23} color={"black"} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ borderBottomColor: "#6a6f73", borderBottomWidth: 0.5, width: "140%", marginTop: 10 }}></View>
      <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#6a6f73" }}>More From Udemy</Text>
      </View>
      <View>
        {tags.map((tag, index) => {
          return (
            <TouchableOpacity key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingVertical: windowHeight * 0.01,
                }}
              >
                <Text style={{ fontSize: 16, color: "#1c1d1f" }}>{tag.heading}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 5 }}>
        <View style={{ width: 150, height: 40, borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <Fontisto name="world-o" size={23} color={"black"} />
          <Text style={{ marginLeft: 5 }}>English</Text>
        </View>
      </View>
    </View>
  );
};