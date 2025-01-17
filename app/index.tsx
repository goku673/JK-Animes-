import React from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { Link } from 'expo-router';
import FormLogIn from '@/components/formLogIn';
import { router } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';
import { setUser } from '@/reducer/userReducer';
import { useDispatch } from 'react-redux';
import { User } from '@/reducer/userReducer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { string } from 'yup';
import NoteBlog from '@/components/noteBlog';
import { TextInput } from 'react-native-paper';
import FormSignUp from '@/components/formSingUp';
import {  Button } from 'react-native';
import { useRouter } from 'expo-router';


  const Home = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { users, user } = useSelector((state: RootState) => state.users);
    const auth = getAuth();

  const handleSignIn = async (values: { email: string; password: string }) => {
    console.log(values);
    try {
        const { user} = await signInWithEmailAndPassword(auth, values.email,values.password);
        dispatch(setUser({
           username :  user.displayName || '',
           email : user.email || '',
          password : ''}))
        router.push('/profile');
     } catch (error) {
      Alert.alert('Error al iniciar sesion', 'Verifica porfavor que tu correo y contraseña esten registrado y esten correctos');
    }
  };
  return (
    <View style={styles.container}>
         {/* <Text>Bienvenido a la pantalla de Inicio</Text>
         <Button title="Ir a Registro" onPress={() => router.push('/register')} /> */}
      {/* <NoteBlog/> */}
      <FormSignUp/> 
      {/* <FormLogIn handleSignIn={handleSignIn}/> */}
    </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  welcomeText: {
    
 
  },
  formContainer: {

  },
  linkText: {
    marginTop : 20,
    color: 'blue',
    fontSize: 16,
   },
  });

  export default Home;

  