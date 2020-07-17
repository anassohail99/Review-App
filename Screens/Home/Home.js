import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../../Styles/GlobalStyles';

const Home = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Reviews');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home Screen</Text>
      <Button title="Check Reviews" onPress={onPressHandler} />
    </View>
  );
};

export default Home;
