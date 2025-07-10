import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import TabsButton from "../Components/TabsButton";
import { ScrollView } from "react-native";

const Profile = () => {
  return (
    <ScreenWrapper>
      <View style={{ left: 80, top: 50, flexDirection: "column", gap: 20 }}>
        <View style={{ left: -80 }}>
          <Image
            source={require("../../assets/images/Profile.png")}
            style={styles.image}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 35,
              fontWeight: "bold",
              left: 120,
              borderRadius: 4,
              fontFamily: "poppins",
            }}
          >
            Thomas
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: "bold",
              left: 120,
            }}
          >
            Thomas@gmail.com
          </Text>

          {/* Buttons with preserved text spacing */}
          <View style={{ flexDirection: "column", gap: 10, marginTop: 20 }}>
            <TabsButton text="Profile                                                                                                                                                                 " />
            <TabsButton text="Email                                                                                              " />
            <TabsButton text="Ticket                                                                                              " />
            <TabsButton text="Payment Method                                                                                   " />
            <TabsButton text="Invite Friend                                                                                               " />
            <TabsButton text="Support                                                                                              " />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 132,
    height: 132,
    borderRadius: 86,
    alignSelf: "center",
  },
});

export default Profile;
