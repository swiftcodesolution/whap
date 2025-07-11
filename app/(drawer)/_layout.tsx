import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DrawerLayout() {
  const router = useRouter();

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerPosition: "right", // 👈 open from right
        drawerActiveTintColor: "#0000FF",
        drawerInactiveTintColor: "#999",
        drawerStyle: {
          backgroundColor: "#000",
          width: 240,
        },
        drawerLabelStyle: styles.label,
        drawerItemStyle: styles.item,
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ flex: 1, backgroundColor: "black" }}
        >
          {/* 🔝 Logo at the top */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/whap_logo.png")}
              style={styles.logo}
            />
          </View>

          {/* 🧭 Main drawer items */}
          <View style={{ flex: 1 }}>
            <DrawerItemList {...props} />
          </View>

          {/* 🔙 Back + 🔓 Logout buttons */}
          <View style={styles.footer}>
            <DrawerItem
              label="Back"
              onPress={() => props.navigation.navigate("(tabs)")}
              icon={() => (
                <Feather name="arrow-left-circle" size={22} color="#0000FF" />
              )}
              labelStyle={styles.label}
              style={styles.item}
            />
            <DrawerItem
              label="Logout"
              onPress={() => router.replace("/(auth)")}
              icon={() => <Feather name="log-out" size={22} color="#FF3B30" />}
              labelStyle={[styles.label, { color: "#FF3B30" }]}
              style={styles.item}
            />
          </View>
        </DrawerContentScrollView>
      )}
    >
      {/* 📄 Screens visible in drawer */}
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerIcon: ({ color }) => (
            <Feather name="settings" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="privacyPolicy"
        options={{
          title: "Privacy Policy",
          drawerIcon: ({ color }) => (
            <Feather name="shield" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="TermsAndConditions"
        options={{
          title: "Terms & Conditions",
          drawerIcon: ({ color }) => (
            <Feather name="file-text" size={22} color={color} />
          ),
        }}
      />

      {/* 🧭 Tabs — hidden from drawer */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    padding: 20,
    alignItems: "flex-start",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  label: {
    fontSize: 18,
    marginLeft: -10,
    color: "white",
  },
  item: {
    marginVertical: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#222",
    padding: 10,
  },
});
