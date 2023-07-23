// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Assuming you have defined the RootStackParamList type in a separate file

import dataCSV from '../utils/data';

// Define the type for the navigation prop
type LoginScreenNavigationProp = NavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  // Use the defined type for the navigation prop
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    const rows = dataCSV.trim().split('\n').slice(1); // Remove the header row
    const users = rows.map((row) => row.split(','));

    const user = users.find((user) => user[1] === email && user[2] === password);
    if (user) {
      // If user is found, check the role and navigate accordingly
      const role = user[7].trim().toLowerCase();
      if (role === 'user') {
        // Navigate to HomeScreen with parameters
        navigation.navigate('Home', { name: user[3] });
      } else if (role === 'admin') {
        navigation.navigate('AdminScreen');
      }
    } else {
      // Handle invalid login credentials here (optional)
      console.log('Invalid login credentials');
    }
  };

  const handleActivateUser = () => {
    navigation.navigate('ActivateUser');
  };

  const handleForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Activate User" onPress={handleActivateUser} />
        <Button title="Forget Password" onPress={handleForgetPassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LoginScreen;
