import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import Box from "../Components/box";
import Input from "../Components/Input";
import CustomButton from "../Components/CustomButton";
import PasswordInput from "../Components/PasswordInput";
import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";

const signIn = () => {
  const router = useRouter();
  const [handle, setHandle] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const toggleHandle = () => setHandle(!handle);
  const handleSignUp = () => router.push("/signUp");
  const handleSignIn = () => {
    router.push("/(drawer)/(tabs)/home");
  };
  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Top image */}
        <View
          style={{ alignItems: "center", opacity: keyboardVisible ? 0 : 1 }}
        >
          <Image
            source={require("../../assets/images/women_page2.png")}
            style={{ width: "80%", height: "60%", top: -50 }}
          />
        </View>

        {/* Box + overlay text and input */}
        <View style={{ top: -220 }}>
          <Box />
          <View style={styles.textOverlay}>
            <Text style={styles.title}>Log In</Text>

            <Text style={styles.subtitle}>Email</Text>
            <Input placeholder="Enter email address" />

            <View style={{ top: 40 }}>
              <Text style={styles.subtitle}>Password</Text>
              <PasswordInput placeholder="Enter Password" />
              <View style={{ flexDirection: "row", top: 10 }}>
                <TouchableOpacity
                  onPress={toggleHandle}
                  style={{ marginTop: 10 }}
                >
                  {handle ? (
                    <Entypo name="controller-record" size={24} color="black" />
                  ) : (
                    <Entypo name="controller-record" size={24} color="white" />
                  )}
                </TouchableOpacity>
                <View style={{ top: 10 }}>
                  <Text style={styles.subtitle}>Remember Me</Text>
                </View>
                <View style={{ top: 10, left: 50 }}>
                  <TouchableOpacity>
                    <Text style={styles.subtitle}>Forget Password ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={{ left: 20, top: 10, width: "90%" }}>
              <CustomButton text="Log In" onPress={handleSignIn} />
            </View>
            <View style={{ top: 20, alignItems: "center" }}>
              <Text style={styles.subtitle}>Or login with:</Text>
            </View>
            <View style={{ flexDirection: "row", left: 20, gap: 30 }}>
              <TouchableOpacity style={styles.googleButton}>
                <SimpleLineIcons name="social-google" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.googleButton}>
                <Fontisto name="apple" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", left: 100, top: 10, gap: 10 }}>
              <Text style={styles.subtitle}>Don't have account?</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  textOverlay: {
    position: "absolute",
    top: 20,
    left: 35,
    right: 35,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    fontSize: 14,
    color: "#fff",
    borderRadius: 0,
  },
  googleButton: {
    backgroundColor: "rgba(0, 92, 191, 0.1)",
    borderColor: "#0000FF",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    width: "40%",
  },
  signUp: {
    color: "#0000FF",
    fontSize: 14,
    marginBottom: 8,
  },
});

export default signIn;
