import { View, Text, Button } from 'react-native'
import React from 'react'

const Details = ({navigation}) => {
  return (
    <View>
      <Button 
      title='Go BacK'
      onPress={()=>navigation.navigate('Home')}
      />
    </View>
  )
}

export default Details