// FormContent.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { FormContentProps } from "../types/formTypes";

const FormContent: React.FC<FormContentProps> = ({ children }) => (
  <View style={styles.form}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
});

export default FormContent;