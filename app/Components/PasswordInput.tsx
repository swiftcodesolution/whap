import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";

const PasswordInput = (props: TextInputProps) => {
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure(!secure);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={secure}
        placeholderTextColor={props.placeholderTextColor || "#aaa"}
        style={[styles.input, props.style]}
      />
      <TouchableOpacity onPress={toggleSecure} style={styles.iconButton}>
        {secure ? (
          <Ionicons name="eye-off" size={22} color="white" />
        ) : (
          <Ionicons name="eye" size={22} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    color: "white",
    padding: 0,
    margin: 0,
    paddingBottom: 6,
    paddingRight: 40,
  },
  iconButton: {
    position: "absolute",
    right: 0,
    padding: 8,
  },
});

export default PasswordInput;
