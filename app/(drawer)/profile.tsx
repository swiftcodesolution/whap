import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const [firstName, setFirstName] = useState("Thomas");
  const [lastName, setLastName] = useState("Anderson");
  const [email, setEmail] = useState("thomas@gmail.com");
  const [phone, setPhone] = useState("0312-3456789");
  const [dob, setDob] = useState("1990-01-01");

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
    // Optional: Save updated data here
  };

  return (
    <ScreenWrapper>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/(drawer)/(tabs)/home")}
      >
        <Feather name="arrow-left" size={20} color="white" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Profile.png")}
          style={styles.image}
        />
        <Text style={styles.name}>{firstName}</Text>
        <Text style={styles.email}>{email}</Text>

        {/* 👤 Editable Fields */}
        <View style={styles.form}>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={firstName}
            onChangeText={setFirstName}
            editable={isEditing}
            placeholder="First Name"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={lastName}
            onChangeText={setLastName}
            editable={isEditing}
            placeholder="Last Name"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            placeholder="Phone Number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={dob}
            onChangeText={setDob}
            editable={isEditing}
            placeholder="Date of Birth (YYYY-MM-DD)"
            placeholderTextColor="#888"
          />
        </View>

        {/* ✅ Save / Edit Toggle Button */}
        <TouchableOpacity style={styles.button} onPress={handleToggleEdit}>
          <Text style={styles.buttonText}>
            {isEditing ? "Save" : "Edit Profile"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    top: -60,
  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 86,
    marginBottom: 20,
  },
  name: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "poppins",
  },
  email: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 20,
  },
  form: {
    width: "100%",
    marginTop: 20,
    gap: 12,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#0000FF",
    paddingVertical: 10,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "transparent",
  },
  disabledInput: {
    borderBottomColor: "#999",
  },
  button: {
    backgroundColor: "#0000FF",
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
});

export default Profile;
