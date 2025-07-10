import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 50,
                borderRadius: 10,
                backgroundColor: focused ? "#005CBF" : "transparent",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/images/Profile_icon.png")}
                style={{ width: 22, height: 22 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 50,
                borderRadius: 10,
                backgroundColor: focused ? "#005CBF" : "transparent",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/images/Home_logo.png")}
                style={{ width: 22, height: 22 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 50,
                borderRadius: 10,
                backgroundColor: focused ? "#005CBF" : "transparent",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../assets/images/Settings_logo.png")}
                style={{ width: 22, height: 22 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
