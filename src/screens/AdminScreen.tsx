import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

// Define the type for the route params
type RootStackParamList = {
  AdminScreen: { accessToken: string };
};

// Define the prop type for the AdminScreen component
type AdminScreenProps = {
  route: RouteProp<RootStackParamList, 'AdminScreen'>;
  navigation: StackNavigationProp<RootStackParamList, 'AdminScreen'>;
};

const AdminScreen: React.FC<AdminScreenProps> = ({ route, navigation }) => {
  const { accessToken } = route.params; // Get the accessToken from the route params

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleAddUser = async () => {
    try {
      // Create a new user object with the form data
      const newUser = {
        name: name,
        surname: surname,
        email: email,
        roleId: Number(role),
        departmentId: Number(department),
        companyId: Number(company),
      };
      // Make the API request to create the new user and pass the accessToken in the header
      const response = await axios.post('https://delta.eu-west-1.elasticbeanstalk.com/users/create', newUser, 
      { headers: { Authorization: accessToken }
    });
      
      console.log('New User:', response.data);
      Alert.alert('Success', 'User added successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
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
    flex: 2,
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
