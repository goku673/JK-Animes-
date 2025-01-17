import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { validationSchema } from '@/utils/validationYup';
import { Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import CardForm from './common/cardForm';// Asegúrate de que la ruta sea correcta
import FormContent from './common/formContent'; // Asegúrate de que la ruta sea correcta
import Input from './common/customInput'; // Asegúrate de que la ruta sea correcta
import ErrorMessage from './common/errorMessage'; // Asegúrate de que la ruta sea correcta
import { LogInValues, FormLogInProps } from './types/formTypes';
import { formFieldsSingIn } from '@/constants/formFields';

const FormLogIn: React.FC<FormLogInProps> = ({ handleSignIn }) => {
  console.log(formFieldsSingIn);
  return (
    <CardForm>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: LogInValues) => {
          handleSignIn(values);
        }}
        validateOnMount={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
          <FormContent>
            {formFieldsSingIn.map((field) => (
              <View key={field.name}>
                <Input
                  mode="outlined"
                  label={field.label}
                  onChangeText={handleChange(field.name)}
                  onBlur={handleBlur(field.name)}
                  value={values[field.name]}
                  icon={field.icon}
                  secureTextEntry={field.secureTextEntry}
                  testID={`${field.name}-input`}
                />
                {touched[field.name] && errors[field.name] && (
                  <ErrorMessage error={errors[field.name]} visible={touched[field.name]} />
                )}
              </View>
            ))}
            <Button
              onPress={() => handleSubmit}
              disabled={!isValid}
              mode="contained"
              testID="submit-button"
            >
              Comienza tu viaje
            </Button>
            {/* <Link href="/recover-password" style={styles.forgotPasswordText}>
              ¿Olvidaste tu contraseña?
            </Link>
            <View style={styles.footer}>
              <Text style={styles.footerText}>¿No tienes una cuenta? </Text>
              <Link href="/register" style={styles.linkText}>  utilizar useRouter para esto 
                Regístrate
              </Link>
            </View> */}
          </FormContent>
        )}
      </Formik>
    </CardForm>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    color: "#FF6B6B",
    marginTop: 10,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#FFFFFF",
  },
  linkText: {
    color: "#FF6B6B",
    fontWeight: "bold",
  },
});

export default FormLogIn;