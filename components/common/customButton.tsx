import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton, ButtonProps } from "react-native-paper";
import { CustomButtonProps } from "@/app/types/buttonTypes";

    const Button: React.FC<CustomButtonProps> = ({ mode = "contained", style, ...props }) => (
            <PaperButton 
              mode={mode} 
              style={[styles.button, style]} 
              {...props}
            >
              {props.children}
            </PaperButton>
        );
    

    export default Button;

    const styles = StyleSheet.create({
            button: {
                backgroundColor: '#007BFF', 
                padding: 10,
                borderRadius: 5,
                alignItems: 'center', 
            }
    });

            