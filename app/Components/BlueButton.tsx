import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";

interface BlueButtonProps {
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const BlueButton = ({
  text,
  onPress,
  style,
  textStyle,
  icon,
  iconPosition = "left",
}: BlueButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && iconPosition === "left" && (
          <View style={styles.iconWrapper}>{icon}</View>
        )}
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {icon && iconPosition === "right" && (
          <View style={styles.iconWrapper}>{icon}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    minWidth: 90,
    elevation: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    marginHorizontal: 6,
    transform: [{ scale: 1.3 }], // ⬅️ Makes icon slightly bigger
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "System",
  },
});

export default BlueButton;
