import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
export const Create = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleCreateAccountPress = () => {
    if (route.name === 'MainScreenUI') {
      navigation.navigate('CreateScreenUI');
    } else {
      navigation.navigate('MainScreenUI');
    }
  };

  const renderButtonText = () => {
    if (route.name === 'MainScreenUI') {
      return 'Create account';
    }
    return 'Sign in';
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.new}>
          {route.name === 'MainScreenUI' ? 'Have an account? ' : 'New here? '}
        </Text>
        <Text style={styles.createAccountText} onPress={handleCreateAccountPress}>
          {renderButtonText()}
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  new: {
    margin: 10,
  },
});
