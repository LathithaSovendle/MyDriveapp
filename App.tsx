import React from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function App() {
const age = 16; 
const Livenceyears = 0;
let feedback = '';

if (age >= 18)
    if (Livenceyears >= 3){
       feedback = 'You are a qualified, safe driver.';
    }
   else
    {
       feedback = 'You are allowed to drive.YAY!'
    }
else
   { 
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
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response:{
    fontSize: 38,
    color: 'white',
  
  }
});
