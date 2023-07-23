// src/screens/ActivateUserScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Assume this is your user data containing email and enabled fields
import dataCSV from '../utils/data'; // Import your data here

const ActivateUserScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleActivateUser = () => {
    // Assuming dataCSV is an array of user objects with 'email' and 'enabled' fields
    const usersData = dataCSV.split('\n').slice(1); // Remove the header row and split into individual rows
    const userDataArray = usersData.map((row) => row.split(',')); // Split each row into an array

    const foundUser = userDataArray.find((user) => user[1] === email && user[4] === '0');

    if (foundUser) {
      // User exists in data and is not enabled (enabled is 0)
      Alert.alert('Success', 'User activation mail send successful.');
      // Additional logic to enable the user can be added here if needed
    } else {
      Alert.alert('Error', 'Invalid email or user is already activated.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activate User Screen</Text>
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
      <Button title="Activate User" onPress={handleActivateUser} />
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

export default ActivateUserScreen;
