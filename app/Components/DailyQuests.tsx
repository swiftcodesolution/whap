import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
const tasks = [
  { id: "1", title: "Hit 5 slap in 1 minute", points: 20 },
  { id: "2", title: "Hit 5000 slap in 1 hour and 10 minute", points: 15 },
];

const DailyQuests = () => {
  return (
    <View style={styles.container}>
      {/* Title */}

      {/* Gradient box */}
      <LinearGradient
        colors={["#000", "rgba(0, 98, 255, 0.4)", "#0000FF"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.box}
      >
        <Text style={styles.title}>Daily Slap Challenge</Text>

        {tasks.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
        ))}
      </LinearGradient>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  underline: {
    width: "90%",
    height: 2,
    backgroundColor: "black",
    marginBottom: 10,
  },
  box: {
    width: width * 0.9,
    height: 140,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#00448E",
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: "hidden",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 8,
  },
  name: {
    color: "white",
    fontSize: 16,
  },
  rank: {
    color: "white",
    fontSize: 16,
  },
});

export default DailyQuests;
