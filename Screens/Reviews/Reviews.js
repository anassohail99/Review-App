import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../../Styles/GlobalStyles';

const Reviews = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
        Name , {navigation.getParam('title')}
      </Text>
      <Text style={globalStyles.text}>
        About , {navigation.getParam('body')}
      </Text>
      <Text style={globalStyles.text}>
        Rating , {navigation.getParam('rating')}
      </Text>
    </View>
  );
};

export default Reviews;
