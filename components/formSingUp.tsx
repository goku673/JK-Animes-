import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Alert } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { Formik, FormikProps } from 'formik';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { addUser } from '@/reducer/userReducer';
import { signUpValidationSchema } from '@/utils/validationYup';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithCredential, signInWithPopup} from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formFieldsSingUp } from '@/constants/formFields';
import CardForm from './common/cardForm';
import FormContent from './common/formContent';
import ErrorMessage from './common/errorMessage';
import Input from './common/customInput';
import { SignUpFormValues } from './types/formTypes';




const FormSignUp: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
 


  const handleSignUp = async (values: SignUpFormValues) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(user, {
        displayName: values.username,
      });
      router.push('/autentication');
    } catch (error) {
      console.error(error);
    
    }
  };

 
  const signInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/autentication');
    } catch (error) {
      console.error(error);
      // Maneja el error de inicio de sesión con Google
    }
  };
  return (
    <CardForm>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSignUp}
      >
        {(formikProps: FormikProps<SignUpFormValues>) => (
          <FormContent>
            {formFieldsSingUp.map((field) => (
              <View key={field.name} style={styles.fielContainer} >
                <Input
                  mode="outlined"
                  label={field.label}
                  onChangeText={formikProps.handleChange(field.name)}
                  onBlur={formikProps.handleBlur(field.name)}
                  value={formikProps.values[field.name]}
                  secureTextEntry={field.secureTextEntry}
                  error={formikProps.touched[field.name] && Boolean(formikProps.errors[field.name])}
                  icon={field.icon} testID={`${field.name}-input`}
                  outlineStyle={styles.input}
                  />
                <ErrorMessage
                  error={formikProps.touched[field.name] ? formikProps.errors[field.name] : undefined}
                  visible={formikProps.touched[field.name]}
                />
              </View>
            ))}
            <Button
              mode="contained"
              onPress={() => formikProps.handleSubmit()}
              disabled={!formikProps.isValid}
              testID='submit-button'
            >
              Crear Cuenta
            </Button>

            <Text style={styles.orText}>OR</Text>

            <Button
              mode="outlined"
              onPress={signInWithGoogle}
              icon={() => <Icon name="google" size={20} color="#FF6B6B" />}
            >
              Continuar con Google
            </Button>
          </FormContent>
        )}
      </Formik>
    </CardForm>
  );
};

const styles = StyleSheet.create({
  
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF6B6B',
    borderWidth: 2,
    borderRadius: 30,
  },
  googleButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fielContainer : {
    marginBottom: 16,
  },
  input : {
    borderRadius : 10,
  }
});

export default FormSignUp;
