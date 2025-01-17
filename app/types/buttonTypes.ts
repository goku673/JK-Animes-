import React from "react";
import { Button as PaperButton, ButtonProps } from "react-native-paper";

export interface CustomButtonProps extends ButtonProps {
    // Puedes agregar propiedades adicionales aquí si lo deseas
    customProp?: string; // Ejemplo de propiedad adicional
  }