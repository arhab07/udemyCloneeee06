// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
// import { Text } from "react-native-paper";
// import Constants from 'expo-constants';
// import { Entypo } from "@expo/vector-icons";

// const categories = [
//   { title: "Web Development" },
//   { title: "Mobile Development" },
//   { title: "Game Development" },
//   { title: "Digital Marketing" },
//   { title: "Personal Transformation" },
//   { title: "Graphic Design" },
//   { title: "All Categories" },
// ];

// export const MainDrawer = () => {
//   const isAndroid = Platform.OS === "android";
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryPress = (category) => {
//     setActiveCategory(category === activeCategory ? null : category);
//   };

//   return (
//     <View style={{ paddingTop: isAndroid ? Constants.statusBarHeight : 0 }}>
//       <View style={{ flexDirection: "column", paddingVertical: 8 }}>
//         <Text onPress={() => console.log("pressed")} style={{ paddingVertical: 6, paddingHorizontal: 16, color: "#5624D0", fontSize: 16 }}>Log in</Text>
//         <Text style={{ paddingVertical: 6, paddingHorizontal: 16, color: "#5624D0", fontSize: 16 }}>Sign up</Text>
//       </View>
//       <View style={{ borderBottomColor: "#6a6f73", borderBottomWidth: 0.5, width: "140%" }}></View>
//       <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
//         <Text style={{ fontSize: 14, fontWeight: "bold", color: "#6a6f73" }}>Most popular</Text>
//       </View>
//       <View style={{ flexDirection: "column", paddingVertical: 8, width: "140%" }}>
//         {categories.map((category, index) => (
//           <TouchableOpacity key={index} onPress={() => handleCategoryPress(category)}>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginVertical: 10 }}>
//               <Text style={{ fontSize: 16, color: "#1c1d1f" }}>{category.title}</Text>
//               <Entypo name="chevron-small-right" size={23} color={"black"} />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//       {activeCategory && (
//         <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
//           <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1c1d1f" }}>{activeCategory.title} Sub-Drawer</Text>
//           {/* Render the contents of the sub-drawer here */}
//         </View>
//       )}
//     </View>
//   );
// };
