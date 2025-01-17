import React from "react";
import { TextInputProps } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

    export interface CustomInputProps extends TextInputProps {
            icon? : IconSource;
    }