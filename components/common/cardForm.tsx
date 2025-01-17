import React from "react";
import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CardProps } from "../types/formTypes";


    const CardForm: React.FC<CardProps> = ({ children }) => (
            <ImageBackground
              source={{ uri: "https://cdn.pixabay.com/photo/2024/04/08/10/27/ai-generated-8683187_640.png" }}
              style={styles.background}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
                style={styles.gradient}
              >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {children}
                </ScrollView>
              </LinearGradient>
            </ImageBackground>
        );

    export default CardForm;

    const styles = StyleSheet.create({
            background: {
                flex: 1,
            },
            gradient: {
                flex: 1,
                padding: 20,
            },
            scrollView: {
                flexGrow: 1,
                justifyContent: "center",
            },
    });