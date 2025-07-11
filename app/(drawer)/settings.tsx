import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "../Components/ScreenWrapper";
import TabsButton from "../Components/TabsButton";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Settings = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/(auth)");
  };

  return (
    <ScreenWrapper>
      {/* 🔙 Back button at top left */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/(drawer)/(tabs)/home")}
      >
        <Feather name="arrow-left" size={20} color="white" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TabsButton
            text="Turn Your Location"
            rightIcon={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                thumbColor="white"
                trackColor={{ true: "#005CBF", false: "#444" }}
              />
            }
          />
          <TabsButton
            text="Email Notification"
            rightIcon={
              <Switch
                value={emailNotification}
                onValueChange={setEmailNotification}
                thumbColor="white"
                trackColor={{ true: "#005CBF", false: "#444" }}
              />
            }
          />
          <TabsButton
            text="Change Password"
            rightIcon={<Entypo name="chevron-right" size={20} color="white" />}
          />
          <TabsButton
            text="Privacy Policy"
            rightIcon={<Entypo name="chevron-right" size={20} color="white" />}
          />
          <TabsButton
            text="Terms & Conditions"
            rightIcon={<Entypo name="chevron-right" size={20} color="white" />}
          />
          <TabsButton
            text="Delete Account"
            rightIcon={<MaterialIcons name="logout" size={22} color="red" />}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 20,
  },
  backText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 16,
    gap: 14,
    marginTop: 30,
  },
});

export default Settings;
