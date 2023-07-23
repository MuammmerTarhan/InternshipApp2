// src/screens/AdminScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AdminScreen: React.FC = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('User'); // Default role is 'User'
  const navigation = useNavigation();

  const handleAddUser = () => {
    // Implement logic to add user to the CSV data
    // For simplicity, we will just show the entered data in an alert
    const newUser = {
      id: id,
      mail: email,
      password: null, // Default password is null
      name: name,
      enabled: '0', // Default enabled is 0
      role: role,
    };

    // Perform any additional validation or checks here before adding the user
    // ...

    alert('User added successfully!\n\nID: ' + id + '\nEmail: ' + email + '\nName: ' + name + '\nRole: ' + role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user's ID"
          keyboardType="numeric"
          onChangeText={(text) => setId(text)}
          value={id}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user's email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user's name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Role:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user's role"
          onChangeText={(text) => setRole(text)}
          value={role}
        />
      </View>
      <Button title="Add User" onPress={handleAddUser} />
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

export default AdminScreen;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

