import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import ScreenWrapper from "../Components/ScreenWrapper";
import TabsButton from "../Components/TabsButton";
import * as ImagePicker from "expo-image-picker";
import BlueButton from "../Components/BlueButton";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import ShareBox from "../Components/ShareOptions";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  const [image, setImage] = useState<string | null>(() => null);

  const [page, setPage] = useState("upload");
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showShareBox, setShowShareBox] = useState(false);

  const scale = useSharedValue(1);
  const translateY = useSharedValue(300);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri as string);

      setPage("detect");
    }
  };

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 150 }) }],
    };
  });

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withTiming(showShareBox ? 0 : 300, { duration: 300 });
  }, [showShareBox]);

  if (page === "main") {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={[styles.zoomWrapper, animatedImageStyle]}>
          <ImageBackground
            source={require("../../assets/images/HomeMain.png")}
            style={styles.background}
            resizeMode="cover"
          >
            <Image
              source={require("../../assets/images/main_cartoon.png")}
              style={{ width: "67%", height: "81%", top: 75 }}
            />
          </ImageBackground>
        </Animated.View>

        <View style={styles.export}>
          <BlueButton
            text="Export"
            icon={<AntDesign name="export" size={18} color="white" />}
            iconPosition="right"
            onPress={() => setShowExportOptions((prev) => !prev)}
          />
          {showExportOptions && (
            <View style={styles.dropdown}>
              <BlueButton
                text="Export as PDF"
                onPress={() => {
                  alert("Exporting as PDF");
                  setShowExportOptions(false);
                }}
              />
              <BlueButton
                text="Export as PNG"
                onPress={() => {
                  alert("Exporting as PNG");
                  setShowExportOptions(false);
                }}
              />
              <BlueButton
                text="Export as JPG"
                onPress={() => {
                  alert("Exporting as JPG");
                  setShowExportOptions(false);
                }}
              />
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
          <ShareBox />
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
            onPress={() => {
              scale.value = withTiming(1.5, { duration: 150 });
            }}
          />
          <BlueButton
            text="zoom out"
            icon={<Feather name="zoom-out" size={18} color="white" />}
            iconPosition="right"
            onPress={() => {
              scale.value = withTiming(1, { duration: 150 });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            position: "absolute",
            left: 125,
            top: 30,
          }}
        >
          <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
            Backgrounds
          </Text>
          <View style={{ width: 110, height: 100 }}>
            <BlueButton
              text="Office"
              icon={
                <Entypo name="arrow-with-circle-down" size={18} color="white" />
              }
              iconPosition="right"
            />
          </View>
        </View>

        <View style={styles.slapRight}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Slap Here
          </Text>
          <MaterialIcons name="swipe-right" size={20} color="black" />
        </View>

        <View style={styles.slapLeft}>
          <MaterialIcons name="swipe-left" size={20} color="black" />
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Slap Here
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      {page === "upload" && (
        <>
          <View style={{ flexDirection: "row", left: 65, top: 40, gap: 10 }}>
            <Text style={{ color: "#fff", fontSize: 36 }}>Slap Here</Text>
            <Image
              source={require("../../assets/images/game-icons_slap.png")}
            />
          </View>

          <View style={{ left: 80, top: 50, gap: 20 }}>
            <View style={{ left: -80 }}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../../assets/images/Profile.png")
                }
                style={styles.image}
              />
            </View>

            <View style={{ width: "90%", left: -60, gap: 10 }}>
              <TabsButton text="Choose from preloaded images" />
              <TabsButton
                text="Upload your own (subject to AI)"
                onPress={pickImage}
              />
            </View>
          </View>
        </>
      )}

      {page === "detect" && (
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>
            Welcome!
          </Text>

          <View style={styles.overlayContainer}>
            {image && (
              <Image source={{ uri: image }} style={styles.mainImage} />
            )}
            <Image
              source={require("../../assets/images/Ai_detector.png")}
              style={styles.overlayImage}
            />
            <Image
              source={require("../../assets/images/Ai_detectCenter.png")}
              style={styles.overlayImage2}
            />
          </View>

          <View style={{ width: "80%", marginTop: 40 }}>
            <TabsButton
              text="Face Alignment"
              textStyle={{ fontSize: 30, textAlign: "center" }}
              onPress={() => setPage("main")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 20, marginBottom: 20 }}>
            <TabsButton
              text="Auto Detect"
              textStyle={{ fontSize: 30, textAlign: "center" }}
            />
          </View>
        </View>
      )}
    </ScreenWrapper>
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
    top: 40,
    right: 70,
    width: "10%",
  },
  dropdown: {
    backgroundColor: "#111",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    width: 180,
    alignSelf: "flex-end",
    zIndex: 99,
  },
  share: {
    position: "absolute",
    top: 40,
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
});

export default Home;
