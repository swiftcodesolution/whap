import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "../../Components/ScreenWrapper";
import TabsButton from "../../Components/TabsButton";
import * as ImagePicker from "expo-image-picker";
import BlueButton from "../../Components/BlueButton";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import ShareBox from "../../Components/ShareOptions";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

// Preloaded background options
const backgroundOptions = {
  office: require("../../../assets/images/HomeMain.png"),
  park: require("../../../assets/images/schoolgirl-walking-city-park.jpg"),
};

const Home = () => {
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showShareBox, setShowShareBox] = useState(false);
  const [showBackgroundDropdown, setShowBackgroundDropdown] = useState(false);
  const [imageSource, setImageSource] = useState(backgroundOptions.office);

  const scale = useSharedValue(1);
  const translateY = useSharedValue(300);
  const progress = useSharedValue(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 150 }) }],
  }));

  const animatedBoxStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const progressAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  useEffect(() => {
    translateY.value = withTiming(showShareBox ? 0 : 300, { duration: 300 });
  }, [showShareBox]);

  const startFilling = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      progress.value = Math.min(progress.value + 0.02, 1);
    }, 50);
    setIntervalId(id);
  };

  const resetProgress = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    progress.value = withTiming(0, { duration: 200 });
  };

  const setBackground = (key: keyof typeof backgroundOptions) => {
    setImageSource(backgroundOptions[key]);
    setShowBackgroundDropdown(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.zoomWrapper, animatedImageStyle]}>
        <ImageBackground
          source={imageSource}
          style={styles.background}
          resizeMode="cover"
        >
          <Image
            source={require("../../../assets/images/main_cartoon.png")}
            style={{ width: "67%", height: "81%", top: 75 }}
          />
        </ImageBackground>
      </Animated.View>

      {/* Open Drawer Button */}
      <View style={{ position: "absolute", top: 50, right: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            backgroundColor: "#0000FF",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <Feather name="menu" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.export}>
        <BlueButton
          text="Save"
          icon={<AntDesign name="download" size={14} color="white" />}
          iconPosition="right"
        />
        {showExportOptions && (
          <View style={styles.dropdown}>
            <BlueButton text="Export as PDF" onPress={() => alert("PDF")} />
            <BlueButton text="Export as PNG" onPress={() => alert("PNG")} />
            <BlueButton text="Export as JPG" onPress={() => alert("JPG")} />
          </View>
        )}
      </View>

      <View style={styles.share}>
        <BlueButton
          text="Share"
          icon={<AntDesign name="sharealt" size={18} color="white" />}
          onPress={() => setShowShareBox((prev) => !prev)}
        />
      </View>

      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: -30,
            left: 0,
            right: 0,
            alignItems: "center",
            zIndex: 99,
          },
          animatedBoxStyle,
        ]}
      >
        <ShareBox onCancel={() => setShowShareBox(false)} />
      </Animated.View>

      <View style={styles.leftBottom}>
        <BlueButton
          text="Replay"
          icon={<AntDesign name="reload1" size={18} color="white" />}
        />
        <BlueButton
          text="Slow"
          icon={<Feather name="zap" size={18} color="white" />}
        />
      </View>

      <View style={styles.rightBottom}>
        <BlueButton
          text="zoom in"
          icon={<Feather name="zoom-in" size={18} color="white" />}
          iconPosition="right"
          onPress={() => (scale.value = withTiming(1.5))}
        />
        <BlueButton
          text="zoom out"
          icon={<Feather name="zoom-out" size={18} color="white" />}
          iconPosition="right"
          onPress={() => (scale.value = withTiming(1))}
        />
      </View>

      {/* Background Dropdown */}
      <View style={{ position: "absolute", left: 140, top: 40 }}>
        <Text style={{ color: "black", fontSize: 14, fontWeight: "bold" }}>
          Backgrounds
        </Text>
        <View style={{ width: "10%" }}>
          <BlueButton
            text="Office"
            icon={
              <Entypo
                name={showBackgroundDropdown ? "chevron-up" : "chevron-down"}
                size={18}
                color="white"
              />
            }
            iconPosition="right"
            onPress={() => setShowBackgroundDropdown((prev) => !prev)}
          />
          {showBackgroundDropdown && (
            <View style={styles.dropdown}>
              <BlueButton text="Park" onPress={() => setBackground("park")} />
              <BlueButton
                text="Office"
                onPress={() => setBackground("office")}
              />
            </View>
          )}
        </View>
      </View>

      {/* Slap Buttons */}
      <TouchableOpacity
        onPressIn={startFilling}
        onPressOut={resetProgress}
        style={styles.slapRight}
      >
        <Text style={styles.slapText}>Slap Here</Text>
        <MaterialIcons name="swipe-right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPressIn={startFilling}
        onPressOut={resetProgress}
        style={styles.slapLeft}
      >
        <MaterialIcons name="swipe-left" size={20} color="black" />
        <Text style={styles.slapText}>Slap Here</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressFill, progressAnimatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 172,
    height: 172,
    borderRadius: 86,
    alignSelf: "center",
  },
  overlayContainer: {
    position: "relative",
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  overlayImage: {
    position: "absolute",
    top: 40,
    left: 0,
    width: "100%",
    resizeMode: "contain",
  },
  overlayImage2: {
    position: "absolute",
    top: 85,
    left: 0,
    width: "100%",
    resizeMode: "contain",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  zoomWrapper: {
    flex: 1,
    width: "100%",
  },
  export: {
    position: "absolute",
    top: 90,
    left: 10,
    width: "10%",
  },
  dropdown: {
    backgroundColor: "#111",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
    gap: 8,
    width: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 99,
  },
  share: {
    position: "absolute",
    top: 50,
    left: 10,
    gap: 10,
    width: "1%",
  },
  leftBottom: {
    position: "absolute",
    bottom: 30,
    left: 10,
    gap: 10,
    width: "1%",
  },
  rightBottom: {
    position: "absolute",
    bottom: 30,
    right: 10,
    gap: 10,
    width: "28%",
  },
  slapRight: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    top: 260,
  },
  slapLeft: {
    flexDirection: "row",
    position: "absolute",
    left: 20,
    top: 260,
  },
  slapText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 4,
  },
  progressContainer: {
    position: "absolute",
    bottom: 140,
    left: 20,
    right: 20,
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0000FF",
    borderRadius: 5,
  },
});

export default Home;
