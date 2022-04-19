import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Button 
      title='Go to details'
      onPress={()=>navigation.navigate('Details')}
      />
    </View>
  )
}

export default Home