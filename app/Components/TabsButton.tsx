import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>; // for button style override
  textStyle?: StyleProp<TextStyle>; // for custom text style
}

const TabsButton = ({
  text = "Click Me",
  onPress = () => {},
  rightIcon,
  style,
  textStyle,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...rest}
    >
      <View style={styles.content}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#005CBF",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontSize: 16,
    color: "white",
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default TabsButton;
