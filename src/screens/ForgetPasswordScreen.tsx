import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import config from './../confic';

const ForgetPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      // Make a POST request to the backend API to trigger the "Forgot Password" functionality
      const response = await fetch(`${config.backendURL}/auth/forgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If the request is successful, display a success message
        Alert.alert('Success', 'Password reset email sent successfully.');
      } else {
        // If the request fails, display an error message with the error details from the API
        Alert.alert('Error', data.message || 'An error occurred while processing your request.');
      }
    } catch (error) {
      // Handle any network or other errors that might occur
      Alert.alert('Error', 'An error occurred while processing your request.');
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
