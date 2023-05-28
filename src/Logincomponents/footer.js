import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Create = () => {
//   const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const handleCreateAccountPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack(); // Go back to the previous screen
    } else {
      navigation.navigate('mainCreateScreen'); // Navigate to the CreateAccount screen
    }
  };

  const renderButtonText = () => {
    if (route.name === 'mainCreateScreen') {
      return 'Sign in';
    }
    return 'Create account';
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.new}>{route.name === 'mainCreateScreen' ? 'Have an account? ' : 'New here? '}</Text>
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
