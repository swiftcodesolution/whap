import React, { ReactNode } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/whap_background.png")}
          style={styles.backgroundImage}
        />
        <Image
          source={require("../../assets/images/background_overlay.png")}
          style={styles.backgroundImage}
        />
        <Image
          source={require("../../assets/images/whap_logo.png")}
          style={{ left: 20, top: 20 }}
        />

        {/* ✅ Add your content here */}
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
  },
});

export default ScreenWrapper;
