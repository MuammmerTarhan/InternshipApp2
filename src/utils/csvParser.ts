// src/utils/csvParser.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../types';

const parseCSVData = (dataCSV: string): UserData[] => {
  const csvRows = dataCSV.trim().split('\n').slice(1); // Remove header row
  const usersData: UserData[] = csvRows.map((row) => {
    const [id, email, password, name, surname, department, company, role , enabled,] = row.split(',');
    return { id, email, password, name, surname, department, company,  role, enabled };
  });
  return usersData;
};

const writeCSVData = async (data: UserData[]) => {
  const csvRows = data.map((user) => Object.values(user).join(','));
  const csvString = `id,email,password,name,surname,department,company,role,enabled\n${csvRows.join('\n')}`;

  try {
    await AsyncStorage.setItem('dataCSV', csvString);
  } catch (error) {
    console.error('Error writing CSV data to AsyncStorage:', error);
  }
};

export { parseCSVData, writeCSVData };
