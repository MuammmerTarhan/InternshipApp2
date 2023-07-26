import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { makeRequest } from './../api';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await makeRequest('post', '/auth/login', {
        email: email,
        password: password,
      });

      const { accessToken, user } = response.data;
      console.log('User Data:', user);
      console.log('Access Token:', accessToken);

      // Set the access token in the state
      setAccessToken(accessToken);

      if (user.role.name === 'Admin') {
        navigation.navigate('AdminScreen', { accessToken }); // Pass the accessToken to the AdminScreen
      } else {
        navigation.navigate('Home', { name: user.name });
      }

      Alert.alert('Success', 'Login successful!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
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
