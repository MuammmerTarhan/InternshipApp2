import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Import the dataCSV from the utils file
import dataCSV from '../utils/data';

const ActivateUserScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleActivateUser = () => {
    const usersData = dataCSV.trim().split('\n').slice(1); // Remove header row and split into individual rows
    const userDataArray = usersData.map((row) => row.split(',')); // Split each row into an array

    const foundUser = userDataArray.find((user) => user[1] === email && user[8] === '0');

    if (foundUser) {
      // User exists in data and is not enabled (enabled is 0)
      Alert.alert('Success', 'User activation mail sent successfully.');
    } else {
      // Either user is not found or user is already activated
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
