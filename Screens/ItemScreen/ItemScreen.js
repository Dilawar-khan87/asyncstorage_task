import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Divider, NativeBaseProvider} from 'native-base';

const ItemScreen = ({item}) => {
  const {title, description} = item;
  return (
    <NativeBaseProvider>
        
      <View style={styles.container}>
        <Text>Title:  {title}</Text>
        <Text>Description:  {description}</Text>
      </View>
      {/* <Divider size={2} /> */}
    </NativeBaseProvider>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title:{
      fontSize:20,
      fontWeight:'600'
  }
});
