import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../../Components/ScreenWrapper";
import Leaderboard from "../../Components/Leaderboard";
import DailyQuests from "../../Components/DailyQuests";
import Rewards from "../../Components/Rewards";
import { ScrollView } from "react-native-gesture-handler";

const Stats = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={require("../../../assets/images/man_page3.png")}
            style={styles.image}
          />

          <Leaderboard />
          <DailyQuests />
          <Rewards />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    // leaves room for image
  },
  image: {
    position: "absolute",
    top: 0,
    left: 90,
    width: 176,
    height: 117,
    zIndex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
});

export default Stats;
