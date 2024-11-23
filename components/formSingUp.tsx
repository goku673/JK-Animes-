import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Alert } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { Formik, FormikProps } from 'formik';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { addUser } from '@/reducer/userReducer';
import { signUpValidationSchema } from '@/utils/validationYup';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithCredential } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';

// WebBrowser.maybeCompleteAuthSession();

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormSignUp: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth();
 
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   webClientId: '646882774188-j50veir1ghavsi0sqekoa33qbk9l7hj1.apps.googleusercontent.com',
  // });
  

  const handleSignUp = async (values: FormValues) => {
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
    // try {
    //   const result = await promptAsync();
    //   console.log('Google sign-in response:', result);
  
    //   if (result.type === 'success') {
    //     const { access_token, id_token } = result.params;
    //     console.log('Access Token:', access_token);
    //     console.log('ID Token:', id_token);
        
    //   }
    // } catch (error) {
      
    // }
  };
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2024/04/08/10/27/ai-generated-8683187_640.png' }}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="account-plus" size={64} color="#FF6B6B" style={styles.icon} />
              <Text style={styles.title}>Join the Anime Realm</Text>
              <Text style={styles.subtitle}>Create your legendary account</Text>
              
              <Formik
                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={signUpValidationSchema}
                onSubmit={handleSignUp}
              >
                {(formikProps: FormikProps<FormValues>) => (
                  <View style={styles.form}>
                    <TextInput
                      label="Username"
                      onChangeText={formikProps.handleChange('username')}
                      onBlur={formikProps.handleBlur('username')}
                      value={formikProps.values.username}
                      mode="outlined"
                      theme={{ colors: { primary: '#FF6B6B' } }}
                      style={styles.input}
                      error={formikProps.touched.username && Boolean(formikProps.errors.username)}
                      left={<TextInput.Icon icon={() => <Icon name="account" size={24} color="#FF6B6B" />} />}
                      testID='username-input'
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {formikProps.touched.username && formikProps.errors.username && (
                      <Text style={styles.error}>{formikProps.errors.username}</Text>
                    )}
                    
                    <TextInput
                      label="Email"
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                      value={formikProps.values.email}
                      mode="outlined"
                      theme={{ colors: { primary: '#FF6B6B' } }}
                      style={styles.input}
                      keyboardType="email-address"
                      error={formikProps.touched.email && Boolean(formikProps.errors.email)}
                      left={<TextInput.Icon icon={() => <Icon name="email" size={24} color="#FF6B6B" />} />}
                      testID='email-input'
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {formikProps.touched.email && formikProps.errors.email && (
                      <Text style={styles.error}>{formikProps.errors.email}</Text>
                    )}
                    
                    <TextInput
                      label="Password"
                      onChangeText={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                      value={formikProps.values.password}
                      mode="outlined"
                      theme={{ colors: { primary: '#FF6B6B' } }}
                      style={styles.input}
                      secureTextEntry
                      error={formikProps.touched.password && Boolean(formikProps.errors.password)}
                      left={<TextInput.Icon icon={() => <Icon name="lock" size={24} color="#FF6B6B" />} />}
                      testID='password-input'
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {formikProps.touched.password && formikProps.errors.password && (
                      <Text style={styles.error}>{formikProps.errors.password}</Text>
                    )}
                    
                    <TextInput
                      label="Confirm Password"
                      onChangeText={formikProps.handleChange('confirmPassword')}
                      onBlur={formikProps.handleBlur('confirmPassword')}
                      value={formikProps.values.confirmPassword}
                      mode="outlined"
                      theme={{ colors: { primary: '#FF6B6B' },  }}
                      style={styles.input}
                      secureTextEntry
                      error={formikProps.touched.confirmPassword && Boolean(formikProps.errors.confirmPassword)}
                      left={<TextInput.Icon icon={() => <Icon name="lock-check" size={24} color="#FF6B6B" />} />}
                      testID='confirm-password-input'
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {formikProps.touched.confirmPassword && formikProps.errors.confirmPassword && (
                      <Text style={styles.error}>{formikProps.errors.confirmPassword}</Text>
                    )}
                    
                    <Button
                      mode="contained"
                      onPress={() => formikProps.handleSubmit()} 
                      disabled={!formikProps.isValid}
                      style={styles.button}
                      labelStyle={styles.buttonText}
                      testID='submit-button'
                    >
                      Begin Your Adventure
                    </Button>
                    
                    <Text style={styles.orText}>OR</Text>
                    
                    <Button
                      mode="outlined"
                      onPress={signInWithGoogle}
                      icon={() => <Icon name="google" size={20} color="#FF6B6B" />}
                      style={styles.googleButton}
                      labelStyle={styles.googleButtonText}
                    >
                      Sign Up with Google
                    </Button>
                  </View>
                )}
              </Formik>
            </Card.Content>
          </Card>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#4ECDC4',
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#45B7D1',
    fontSize: 16,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    
  },
  error: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF6B6B',
    borderRadius: 30,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
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
});

export default FormSignUp;
//Pepito123#

// para aplicar themas en los input no funciona utilizar el borderRadius porque en paper tiene su propia forma de aplicar
// utilizando la propiedad Theme roundness : 10