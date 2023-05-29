import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
          <MaterialIcons name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginVertical: 15,
    //   paddingHorizontal: 15,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });