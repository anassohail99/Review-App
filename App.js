import React from 'react';
import {View, Text} from 'react-native';
import Home from './Screens/Home/Home';
import Reviews from './Screens/Reviews/Reviews';
import About from './Screens/About/About';
import Navigator from './Routes/HomeStack';

const App: () => React$Node = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
