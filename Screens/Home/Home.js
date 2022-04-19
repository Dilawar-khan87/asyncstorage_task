import {StyleSheet, Button, View, Text} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemScreen from '../ItemScreen/ItemScreen'
const Home = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  React.useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const value = await AsyncStorage.getItem('title');
    console.log(value);
    setTitle(JSON.parse(value));
    // setDescription(Desc);
  };

  return (
    <View>
      {/* <ItemScreen /> */}
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
