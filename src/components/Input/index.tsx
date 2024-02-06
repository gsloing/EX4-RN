import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({placeholder}) => {
    return <TextInput placeholder={placeholder}></TextInput>
};

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        color: 'black',
    },
});

export default Input;