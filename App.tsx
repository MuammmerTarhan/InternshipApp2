// App.tsx
import React from 'react';
import Navigator from './src/Navigator';
import config from './src/confic';
import CodePush from 'react-native-code-push';

const App: React.FC = () => {
  return <Navigator />;
};

export default CodePush(App);
