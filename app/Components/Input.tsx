import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={props.placeholderTextColor || "#aaa"}
      style={[styles.input, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    color: "white",
    padding: 0,
    margin: 0,
    paddingBottom: 6, // 👈 adds space between text and underline
  },
});

export default Input;
