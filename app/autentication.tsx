import React from 'react'
import { View ,Text } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

  const Page = () => (
      <View style= {styles.container}>
        <Text style={styles.textRegister}>Correo de registro enviado exitosamente</Text>
        <Text>
          Presione <Link href='/' style={styles.linkPress}>Aquí</Link> para continuar
        </Text>
      </View>
    );
  
  

   const styles = StyleSheet.create({
      container : {
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
      },
      textRegister : {
         fontWeight : 'bold'
      },
      linkPress : {
        fontSize : 20,
        color : 'blue'
      }
   })

export default Page;