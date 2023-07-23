// src/screens/AdminScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [department, setDepartment] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState(''); // Default role is an empty string
  const navigation = useNavigation();

  const handleAddUser = () => {
    // Implement logic to add user to the CSV data
    // For simplicity, we will just show the entered data in an alert
    const newUser = {
      mail: email,
      password: null, // Default password is null
      name: name,
      surname: surname,
      department: department,
      company: company,
      enabled: '0', // Default enabled is 0
      role: role,
    };

    // Perform any additional validation or checks here before adding the user
    // ...

    alert(
      'User added successfully!\n\nEmail: ' +
        email +
        '\nName: ' +
        name +
        '\nSurname: ' +
        surname +
        '\nDepartment: ' +
        department +
        '\nCompany: ' +
        company +
        '\nRole: ' +
        role
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Admin Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter user's email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter user's name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter user's surname"
            onChangeText={(text) => setSurname(text)}
            value={surname}
          />
        </View>
      </View>
      {/* Updated layout for displaying department */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Department:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter user's department"
            onChangeText={(text) => setDepartment(text)}
            value={department}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter user's company"
            onChangeText={(text) => setCompany(text)}
            value={company}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Role:</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter role"
            onChangeText={(text) => setRole(text)}
            value={role}
          />
        </View>
      </View>
      <Button title="Add User" onPress={handleAddUser} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  inputBox: {
    flex: 2, // This will create a "box" around the input
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    height: 40,
    padding: 10,
  },
});

export default AdminScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

