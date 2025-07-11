import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ButtonProps {
  text?: string;
  onPress?: () => void;
}

const CustomButton = ({
  text = "Click Me",
  onPress = () => {},
}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#0000FF", // purple-blue border
  },
  text: {
    fontSize: 16,
    color: "white", // match border
  },
});

export default CustomButton;
