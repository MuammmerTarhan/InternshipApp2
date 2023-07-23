// src/utils/csvParser.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../types';

const parseCSVData = (dataCSV: string): UserData[] => {
  const csvRows = dataCSV.trim().split('\n').slice(1); // Remove header row
  const usersData: UserData[] = csvRows.map((row) => {
    const [id, email, password, name, surname, department, company, role, enabled] = row.split(',');
    return { id, email, password, name, surname, department, company, role, enabled };
  });
  return usersData;
};

export { parseCSVData };

