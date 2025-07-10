import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

const ShareBox = () => {
  return (
    <LinearGradient
      colors={["#007AFF", "rgba(0, 98, 255, 0.9)", "rgba(5, 11, 21, 0.6)"]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.box}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Share to</Text>

        {/* Top row of apps */}
        <View style={styles.row}>
          <IconWithLabel
            icon={<FontAwesome name="whatsapp" size={24} color="white" />}
            label="WhatsApp"
          />
          <IconWithLabel
            icon={<FontAwesome name="whatsapp" size={24} color="white" />}
            label="Status"
          />
          <IconWithLabel
            icon={<MaterialIcons name="message" size={24} color="white" />}
            label="Message"
          />
          <IconWithLabel
            icon={<MaterialIcons name="sms" size={24} color="white" />}
            label="SMS"
          />
          <IconWithLabel
            icon={<FontAwesome name="facebook" size={24} color="white" />}
            label="Messenger"
          />
          <IconWithLabel
            icon={<AntDesign name="instagram" size={24} color="white" />}
            label="Instagram"
          />
        </View>

        {/* Second row of options */}
        <View style={styles.row}>
          <IconWithLabel
            icon={
              <AntDesign name="exclamationcircleo" size={24} color="white" />
            }
            label="Report"
          />
          <IconWithLabel
            icon={<AntDesign name="hearto" size={24} color="white" />}
            label="Not interested"
          />
          <IconWithLabel
            icon={<Feather name="download" size={24} color="white" />}
            label="Save"
          />
          <IconWithLabel
            icon={<Ionicons name="repeat" size={24} color="white" />}
            label="Duet"
          />
          <IconWithLabel
            icon={<Feather name="smile" size={24} color="white" />}
            label="React"
          />
          <IconWithLabel
            icon={<AntDesign name="staro" size={24} color="white" />}
            label="Favorite"
          />
        </View>

        {/* Cancel Button */}
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const IconWithLabel = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <View style={styles.iconItem}>
    {icon}
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 320,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    borderColor: "#00448E",
    overflow: "hidden",
  },
  content: {
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginVertical: 10,
  },
  iconItem: {
    alignItems: "center",
    width: 60,
  },
  iconLabel: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
  cancelButton: {
    marginTop: 12,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  cancelText: {
    fontWeight: "bold",
    color: "#007AFF",
    fontSize: 18,
  },
});

export default ShareBox;
