import { View, Text, Image } from "react-native";
import React from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import CustomButton from "../Components/CustomButton";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("../signUp");
  };

  const handleSignIn = () => {
    router.push("../signIn");
  };
  return (
    <ScreenWrapper>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontWeight: "bold",
            marginTop: 40,
            marginBottom: 20,
            left: 20,

            borderRadius: 4,
            fontFamily: "poppins",
            top: 20,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            top: 0,
            right: 0,

            borderRadius: 4,
            left: 20,
          }}
        >
          slap-simulation entertainment app
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 13,
            fontWeight: "bold",
            top: 0,
            marginRight: 40,

            left: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </Text>
        <View>
          <Image
            source={require("../../assets/images/girl_page1.png")}
            style={{ width: "80%", height: "70%", top: -50, left: 20 }}
          ></Image>
          <View
            style={{
              top: -130,
              flexDirection: "column",
              gap: 10,
              width: "98%",
            }}
          >
            <CustomButton text="Sign In" onPress={handleSignIn} />
            <CustomButton text="Sign Up" onPress={handleSignUp} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default index;
