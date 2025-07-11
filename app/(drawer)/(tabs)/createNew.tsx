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
import { useRouter } from "expo-router";

const createNew = () => {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const [page, setPage] = useState("upload");

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
  return (
    <ScreenWrapper>
      {page === "upload" && (
        <>
          <View style={{ flexDirection: "row", left: 65, top: 40, gap: 10 }}>
            <Text style={{ color: "#fff", fontSize: 36 }}>Slap Here</Text>
            <Image
              source={require("../../../assets/images/game-icons_slap.png")}
            />
          </View>

          <View style={{ left: 80, top: 50, gap: 20 }}>
            <View style={{ left: -80 }}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../../../assets/images/Profile.png")
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
              source={require("../../../assets/images/Ai_detector.png")}
              style={styles.overlayImage}
            />
            <Image
              source={require("../../../assets/images/Ai_detectCenter.png")}
              style={styles.overlayImage2}
            />
          </View>
          <View style={{ width: "80%", marginTop: 40 }}>
            <TabsButton
              text="Face Alignment"
              textStyle={{ fontSize: 20, textAlign: "center" }}
              onPress={() => router.push("/(drawer)/(tabs)/home")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 10, marginBottom: 10 }}>
            <TabsButton
              text="Auto Detect"
              textStyle={{ fontSize: 20, textAlign: "center" }}
            />
          </View>{" "}
          <View
            style={{
              width: "80%",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <TabsButton
              text="Select New"
              textStyle={{ fontSize: 20, textAlign: "center" }}
              onPress={() => setPage("upload")}
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

export default createNew;
