import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, Spinner, Fab} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemScreen from '../ItemScreen/ItemScreen';

const AddItem = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    findItems();
  }, []);

  const findItems = async () => {
    const result = await AsyncStorage.getItem('items');
    console.log(result);
    if (result !== null) {
      setItems(JSON.parse(result));
    }
  };

  const submit = () => {
    const item = {title, description};
    console.log(item);
    const updateItems = [...items, item];
    setItems(updateItems);
    AsyncStorage.setItem('items', JSON.stringify(updateItems));
    setTitle('');
    setDescription('');
  };

  return (
    <NativeBaseProvider>
      <View>
        <Text style={styles.header}>Item Task</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="enter title here"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setDescription(text)}
          value={description}
          placeholder="enter description here"
        />
        <View style={styles.button}>
          <Button title="Add Item" onPress={() => submit()} />
        </View>
        <Text style={styles.header2}>Item List</Text>
        <FlatList
          scrollEnabled={true}
          data={items}
          refreshing={false}
          onRefresh={findItems}
          renderItem={({item}) => {
            return <ItemScreen item={item} />;
          }}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'pink',
    margin: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  header2: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop:10
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
    margin: 10,
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
