import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Box = () => {
  return (
    <LinearGradient
      colors={["#007AFF", "rgba(0, 98, 255, 0.6)", "black"]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.box}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: "90%",
    height: 280,
    alignSelf: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#00448E",
  },
});

export default Box;
