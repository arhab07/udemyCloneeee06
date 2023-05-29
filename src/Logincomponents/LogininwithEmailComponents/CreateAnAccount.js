import { React, useState } from "react";
import { View, StyleSheet , StatusBar , Platform } from "react-native";
import { Text , Checkbox  } from "react-native-paper";
import styled from "styled-components";
// import { AntDesign } from '@expo/vector-icons';
import { CustomTextInput } from "./CustomInputs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const isAndroid = Platform.OS === "android"
import { AntDesign } from '@expo/vector-icons'; 
const Text1 = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center; /* Added text-align center */
`;

const Text2 = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
  font-weight: ${props => props.theme.fontWeights.regular};
  text-align: center; /* Added text-align center */
  width: 300px;
  marginTop: 10px;
  marginBottom: 50px;
`;

export const SignEmail = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touch, setTouch] = useState("white");
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  }

  const onPressTouch = () => {
    setTouch("#e0e0e0");
    console.log("Name:", text);
    console.log("Email:", email);
    console.log("Password:", password);
  }
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (<>

<View style={isAndroid ? styles.androidIconContainer : styles.iconContainer}>
          <AntDesign onPress={handleGoBack} name="arrowleft" size={24} color="black" />
        </View>
    <View style={styles.container}>
    <View style={{marginTop:"10%"}}></View>
      <View style={styles.content}>
        <Text1>Create an account</Text1>
        <Text2>By Clicking on "Create account" you agree to our terms of service and privacy policy</Text2>
      </View>
      <View>
      </View>
      <CustomTextInput
        value={text}
        onChangeText={setText}
        placeholder="Name"
        secureTextEntry={false}
        keyboardType="default"
      />
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        secureTextEntry={false}
        keyboardType="email-address"
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password (8+ characters)"
        secureTextEntry={true}
        keyboardType="default"
      />
      <View style={{ width: "100%", height: 50, backgroundColor: "black", marginVertical: 10 }}>
        <TouchableOpacity onPress={onPressTouch}>
          <Text style={{ color: "white", fontSize: 14, textAlign: "center", fontWeight: "bold", paddingTop: 15 }}>Create Account</Text>
        </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={handleCheckboxToggle}
          color="black"
          uncheckedColor="black"
          background="black"
        />
        <Text style={styles.checkboxLabel}>Email me deals and recommendation</Text>
      </View>
      <View style={{ marginTop:15 , flexDirection:"row" , justifyContent:"center"}}>
      <Text>
                Have an account? 
        </Text>
        <Text style={styles.createAccountText}>
        Sign in
        </Text>
      </View>
      </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  checkboxLabel: {
    marginLeft: 2,
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    color: "#5F6770"
  },
  createAccountText: {
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 5,
  },
  new: {
    // marginLeft: 10,
  },
  iconContainer: {
    paddingLeft: 20,
    marginTop: isAndroid ? 10 : StatusBar.currentHeight + 45, // Modified marginTop value
  },
  androidIconContainer: {
    paddingLeft: 20,
    marginTop: StatusBar.currentHeight + 10,
  },
});
