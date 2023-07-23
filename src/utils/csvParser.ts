// src/utils/csvParser.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataCSV } from './data';
import { UserData } from '../types';

const parseCSVData = (): UserData[] => {
  const csvRows = dataCSV.trim().split('\n').slice(1); // Remove header row
  const usersData: UserData[] = csvRows.map((row) => {
    const [id, mail, password, name, enabled, role] = row.split(',');
    return { id, mail, password, name, enabled, role };
  });
  return usersData;
};

const writeCSVData = async (data: UserData[]) => {
  const csvRows = data.map((user) => Object.values(user).join(','));
  const csvString = `id,mail,password,name,enabled,role\n${csvRows.join('\n')}`;

  try {
    await AsyncStorage.setItem('dataCSV', csvString);
  } catch (error) {
    console.error('Error writing CSV data to AsyncStorage:', error);
  }
};

export { parseCSVData, writeCSVData };
