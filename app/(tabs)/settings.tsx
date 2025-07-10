import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  ScrollView,
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/Profile.png")}
            style={styles.image}
          />
          <Text style={styles.name}>Thomas</Text>
          <Text style={styles.email}>Thomas@gmail.com</Text>
        </View>

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
            text="Log Out"
            rightIcon={<MaterialIcons name="logout" size={22} color="white" />}
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
  profileContainer: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "poppins",
  },
  email: {
    color: "#ccc",
    fontSize: 14,
  },
  container: {
    paddingHorizontal: 16,
    gap: 14,
  },
});

export default Settings;
