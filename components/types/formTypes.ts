import React from "react";
// types/formTypes.ts

// Interfaz para los valores del formulario de registro
export interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// Interfaz para los valores del formulario de inicio de sesión
export interface LogInValues {
    email: string;
    password: string;
}

// Interfaz para los campos de formulario
export interface FormField<T> {
    name: keyof T;
    label: string;
    secureTextEntry?: boolean;
    icon: string;
  }
  

// Interfaz para las propiedades del componente Card
export interface CardProps {
    children: React.ReactNode;
}

// Interfaz para las propiedades del componente FormContent
export interface FormContentProps {
    children: React.ReactNode;
}

// Interfaz para las propiedades del formulario de inicio de sesión
export interface FormLogInProps {
    handleSignIn: (values: LogInValues) => void;
}

// Interfaz para las propiedades del formulario de registro
export interface FormSignUpProps {
    handleSignUp: (values: SignUpFormValues) => void;
}