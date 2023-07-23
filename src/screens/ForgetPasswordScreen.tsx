import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import dataCSV from '../utils/data'; // Import your data here

const ForgetPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    // Assuming dataCSV is an array of user objects with 'email' and 'enabled' fields
    const usersData = dataCSV.split('\n').slice(1); // Remove the header row and split into individual rows
    const userDataArray = usersData.map((row) => row.split(',')); // Split each row into an array

    const foundUser = userDataArray.find((user) => user[1] === email);

    if (foundUser) {
      if (foundUser[8] === '1') {
        // User exists in data and is enabled (enabled is 1)
        // Simulate sending the reset password email with a timeout
        setTimeout(() => {
          Alert.alert('Success', 'Password reset email sent successfully.');
          // Additional logic after sending the email can be added here if needed
        }, 1500); // Delay of 1.5 seconds
      } else {
        // User exists in data but is not enabled (enabled is 0)
        Alert.alert('Error', 'User account is not activated. Please activate your account first.');
      }
    } else {
      // User not found in data
      Alert.alert('Error', 'Invalid email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget Password Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <Button title="Forget Password" onPress={handleForgetPassword} />
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
});

export default ForgetPasswordScreen;
