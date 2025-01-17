    import React from "react";
    import { TextInput as PaperTextInput } from "react-native-paper";
    import { StyleSheet } from "react-native";
    import { CustomInputProps } from "../types/inputTypes";

    const Input: React.FC<CustomInputProps> = ({ style, icon, ...props }) => (
            <PaperTextInput
                style={[styles.input, style]}
                {...props}
                left={icon ? <PaperTextInput.Icon style={styles.icon} icon={icon} /> : undefined} // Usa el ícono si está presente
            />
        );

    export default Input;    

    const styles = StyleSheet.create({
            input: {
                padding: 10,
                borderColor: '#777',
                borderWidth: 1,
                borderRadius: 20,
            },
            icon: {
                marginTop: 22,
            }
    });

    