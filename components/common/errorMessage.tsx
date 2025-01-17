import React from "react";
import { ErrorMessageProps } from "@/app/types/errorMessageTypes";
import { Text, StyleSheet } from "react-native";

    const ErrorMessage: React.FC<ErrorMessageProps> = ({error, visible}) => {
            if(!error ||!visible) return null;
            return (
                <Text style={styles.error}>{error}</Text>
            )
    }

    export default ErrorMessage;

    const styles = StyleSheet.create({
        error : {
            color :'red',
            fontSize : 12,
            marginTop : 11,
        }
    });