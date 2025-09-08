import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput, ScrollView  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
const age = 20; 
const Licenceyears = 5;
let feedback = '';


if (age >= 17)
/*the condition (age >= 18) was true*/
    if (Licenceyears >= 4){
       feedback = 'You are a qualified, safe driver.';
    }
   else
    {
       feedback = 'You are allowed to drive.YAY!'
    }
    /*the condition (age >= 18) was false*/
else
   { 
      feedback = 'you are not allowed to drive yet.'
   };
   //Adding a SWITCH STATEMENT 
  let drivingRank = '';
  switch (Licenceyears) {
     case 0:
      drivingRank='Newbie driver';
      break;
      case 1: 
      drivingRank = 'Rookie with 1 year of driving experience';
       break;      
       case 2: 
       drivingRank = 'Intermediate driver with 2 years of driving experience';
        break; 
        case 3: 
        case 4:
       drivingRank = 'Experienced driver';
       break; 
       default:'Vetean driver with many years of experience';
  }
return ( 
  //we use safe area view to
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style ={styles.content}>
      {/*Add a custom and other text component specific styles to the heading*/}
      <Text style = {[styles.response,{fontSize:24, color:'#072F5F', fontStyle:'italic', marginBottom:5, textAlign:'center'}]}>Driving Licence Checker</Text>         
     <Image source ={{uri:"https://cbx-prod.b-cdn.net/COLOURBOX28085854.jpg?width=1600&height=1600&quality=90",}}
        style = {styles.image}/>
        <Text style={styles.response}>Age:{age}
          </Text> 

        <Text style={styles.response}>Licenceyears:{Licenceyears}</Text>
    {/*we use one bracket*/}
      <Text style = {[styles.response, {color:'green'}]}>
        {/*This is my message to be displayed to the user*/}
        {feedback}
        {/*Copy image address*/}
        </Text>


        <Text style={styles.response}>Licenceyears:{Licenceyears}</Text>
    {/*we use one bracket*/}
      <Text style = {[styles.response, {color:'green'}]}>
        {/*This is a driving rank Text Component*/}
        Driving Rank: {drivingRank}
        {/*Copy image address*/}
        </Text>
        <TextInput style={styles.Inputbox}
        placeholder='Enter your age'
        keyboardType ='numeric'
        />
        {/*Check details button*/}
        <View style = {{marginTop:15, width:'60%', backgroundColor:'green'}}> 
        <Button title='Check details'></Button>
        </View>
    </View>    
    </ScrollView>
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
    marginVertical:13 //this is for splace between the image and text we use marginTop or bottom
  },
  image:{
    width:'100%',
     height:'50%',
     top:0,
     resizeMode:'cover',
  },
  Inputbox:{
    width:'80%',
    borderWidth:1,
    borderColor:'white',
    padding:10,
    backgroundColor:'white',
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 24
  }
});
