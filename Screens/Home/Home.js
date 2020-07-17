import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../Styles/GlobalStyles';

const Home = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Reviews');
  };

  const [review, setReview] = useState([
    {
      title: 'Film 1',
      rating: 5,
      body: 'lorem ispum',
      key: '1',
    },
    {
      title: 'Film 2',
      rating: 4,
      body: 'lorem ispum',
      key: '2',
    },
    {
      title: 'Film 3',
      rating: 2,
      body: 'lorem ispum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Reviews', item);
            }}>
            <Text style={globalStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <Button title="Check Reviews" onPress={onPressHandler} /> */}
    </View>
  );
};

export default Home;
