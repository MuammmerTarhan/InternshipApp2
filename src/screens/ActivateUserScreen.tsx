// src/screens/ActivateUserScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActivateUserScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // To toggle password visibility
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialSymbol, setHasSpecialSymbol] = useState(false);
  const navigation = useNavigation();

  // Regular expressions for each password condition
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /\d/;
  const specialSymbolRegex = /[@$.!+\-]/;

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    // Check if password meets each condition and update state variables accordingly
    setHasUppercase(uppercaseRegex.test(text));
    setHasLowercase(lowercaseRegex.test(text));
    setHasNumber(numberRegex.test(text));
    setHasSpecialSymbol(specialSymbolRegex.test(text));
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  const handleActivateUser = () => {
    if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialSymbol ||
      password.length < 8 ||
      password.length > 32
    ) {
      Alert.alert(
        'Invalid Password',
        'Please ensure that the password meets the following conditions:\n\n' +
          '- Must have at least one uppercase character\n' +
          '- Must have at least one lowercase character\n' +
          '- Must have at least one numeric character\n' +
          '- Must have at least one special symbol among @$.!-+\n' +
          '- Password length should be between 8 and 32 characters.'
      );
      return;
    }

    // Check if passwords match before proceeding
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match. Please try again.");
      return;
    }

    // Implement your activate user logic here
    console.log('Activate User button pressed!');
    console.log('Email:', email);
    console.log('Password:', password);
    // Additional logic to activate the user can be added here
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <Button title={isPasswordVisible ? 'Hide' : 'Show'} onPress={handleTogglePasswordVisibility} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={!isPasswordVisible} // Hide password if isPasswordVisible is false
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.conditionsContainer}>
        <Text style={[styles.conditionText, hasUppercase && styles.validCondition]}>At least one uppercase character</Text>
        <Text style={[styles.conditionText, hasLowercase && styles.validCondition]}>At least one lowercase character</Text>
        <Text style={[styles.conditionText, hasNumber && styles.validCondition]}>At least one numeric character</Text>
        <Text style={[styles.conditionText, hasSpecialSymbol && styles.validCondition]}>At least one special symbol among @$.!-+</Text>
        <Text style={[styles.conditionText, password.length >= 8 && password.length <= 32 && styles.validCondition]}>Password length between 8 and 32 characters</Text>
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
  conditionsContainer: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  conditionText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'red',
  },
  validCondition: {
    color: 'green',
  },
});

export default ActivateUserScreen;