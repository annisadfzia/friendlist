import React from 'react'
import {Text, View, StyleSheet,Button } from 'react-native';
const Home=({navigation}) =>{
 return(
   <View> 
      <Text>Home Screen</Text>
      <Button title ='Goto About'
      onPress={()=>navigation.navigate('About')} />
   </View>
 )
};
export default Home;