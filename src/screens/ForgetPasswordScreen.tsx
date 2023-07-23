// src/screens/ForgetPasswordScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForgetPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your logic for resetting the password here
    console.log('Reset Password button pressed!');
    console.log('Email:', email);
    // Additional logic for resetting the password can be added here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget Password Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <Button title="Reset Password" onPress={handleResetPassword} />
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