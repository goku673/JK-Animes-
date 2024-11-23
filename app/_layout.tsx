import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from '@/reducer/store';
import { firebaseConfig } from '@/firebase-config';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const RootLayout = () => {
  
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
    console.log("pepito",auth);
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            title: 'Inicio sesión',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            title: 'Registro',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
      </Stack>
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  headerTitle: {
    flex: 1,
    color: 'white',
  },
});

export default RootLayout;
