// src/types.ts
export type UserData = {
  id: string;
  email: string;
  password: string | null;
  name: string;
  surname: string;
  department: string;
  company: string;
  role: string;
  enabled: string;
};


type RootStackParamList = {
  Login: undefined;
  Home: { name: string };
  AdminScreen: undefined;
  ActivateUser: undefined;
  ForgetPassword: undefined;
};

export type { RootStackParamList };