import React from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function App() {
const age = 16; 
let feedback = '';

if (age >= 18) {
 feedback = 'You are allowed to drive.YAY!'
}
else{
feedback = 'you are not allowed to drive yet.'
}
return (
    <View style={styles.container}>
    {/*we use one bracket*/}
      <Text style = {styles.response}>
        {/*This is my message to be displayed to the user*/}
        {feedback}</Text>
      
    </View>                                                                                          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response:{
    fontSize: 38,
  }
});
