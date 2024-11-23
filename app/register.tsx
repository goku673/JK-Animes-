import React from 'react'
import { View, Text, Image, Button, Alert, TextInput, StyleSheet } from 'react-native';
import FormSignUp from '@/components/formSingUp';
import { Link } from 'expo-router';

  const Page = () => {

  
    return (
      <View style = {style.container}>
         <FormSignUp/>
         </View>
    )
  }

  const style = StyleSheet.create({
     container : {
        flex : 1,
        backgroundColor : 'white',
        padding : 0
     },
     title : {
        
        
     },
  
  })
  export default Page;