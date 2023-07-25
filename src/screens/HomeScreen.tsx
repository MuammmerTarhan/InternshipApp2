// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import config from './../confic';

// Define the type for the route.params object
type HomeScreenParams = {
  name: string;
};

// Define the custom RouteProp type
type RootStackParamList = {
  Home: HomeScreenParams;
};

const HomeScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
