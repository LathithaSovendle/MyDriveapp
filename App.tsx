import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView  } from 'react-native';

export default function App() {
const age = 20; 
const Licenceyears = 5;
let feedback = '';

if (age >= 18)
    if (Licenceyears >= 3){
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
  //we use safe area view to
  <SafeAreaView style={styles.container}>
    <View style ={styles.content}>
      {/*Add a custom and other text component specific styles to the heading*/}
      <Text style = {[styles.response,{fontSize:40, color:'#072F5F', fontStyle:'italic', marginBottom:5, textAlign:'center'}]}>Driving Licence Checker</Text>         
     <Image source ={{uri:"https://cbx-prod.b-cdn.net/COLOURBOX28085854.jpg?width=1600&height=1600&quality=90",}}
        style = {styles.image}/>
        <Text style={styles.response}>Age:{age}</Text> 
        <Text style={styles.response}>Licenceyears:{Licenceyears}</Text>
    {/*we use one bracket*/}
      <Text style = {[styles.response, {color:'green'}]}>
        {/*This is my message to be displayed to the user*/}
        {feedback}
        {/*Copy image address*/}
        </Text>
    </View>    
    </SafeAreaView>                                                                                      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content:{
   width:'100%',
   alignItems:'center'
  },

  response:{
    fontSize: 28,
    color: 'Black',
    marginVertical:30 //this is for splace between the image and text we use marginTop or bottom
    
  },
  image:{
    width:'100%',
     height:'50%',
     top:0,
     resizeMode:'cover',
  }
});
