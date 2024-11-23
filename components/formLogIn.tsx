import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import { validationSchema } from '@/utils/validationYup';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

interface FormLogInProps {
  handleSignIn: (values: { email: string; password: string }) => void;
}

const FormLogIn: React.FC<FormLogInProps> = ({ handleSignIn }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2024/04/08/10/27/ai-generated-8683187_640.png' }}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Icon name="sword-cross" size={64} color="#FF6B6B" style={styles.icon} />
              <Text variant="headlineMedium" style={styles.title}>¡La aventura de anime te espera!</Text>
              <Text variant="bodyMedium" style={styles.subtitle}>Entra en el reino de las historias infinitas Alli</Text>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  handleSignIn(values);
                }}
                validateOnMount={false}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                  <View style={styles.form}>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      theme={{ colors: { primary: '#FF6B6B' } }}
                      style={styles.input}
                      left={<TextInput.Icon icon={() => <Icon name="email-outline" size={24} color="#FF6B6B" />} />}
                      testID="email-input"
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                    <TextInput
                      mode="outlined"
                      label="Password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      theme={{ colors: { primary: '#FF6B6B' } }}
                      style={styles.input}
                      secureTextEntry
                      left={<TextInput.Icon icon={() => <Icon name="lock-outline" size={24} color="#FF6B6B" />} />}
                      testID="password-input"
                      outlineStyle= { {borderRadius : 10}}
                    />
                    {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                    <Button
                      onPress={() => handleSubmit()}
                      disabled={!isValid}
                      mode='contained'
                      style={styles .button}
                      labelStyle={styles.buttonText}
                      testID="submit-button"
                    >
                      Comienza tu viaje
                    </Button>
                    <View style={styles.forgotPasswordContainer}>
                      <Link href="/recover-passsword" style={styles.forgotPasswordText}>
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </View>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>¿No tienes una cuenta? </Text>
                      <Link href="/register" style={styles.linkText}>
                        Regístrate
                      </Link>
                    </View>
                  </View>
                )}
              </Formik>
            </Card.Content>
          </Card>
        </View>
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    borderRadius: 10,
  },
  error: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: -12,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#FF6B6B',
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});

export default FormLogIn;