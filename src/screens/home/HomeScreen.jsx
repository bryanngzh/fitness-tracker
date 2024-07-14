import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../../components";
import { FIREBASE_AUTH } from "../../configs/firebase";
import styles from "./HomeScreen.style";

const HomeScreen = () => {
  const user = FIREBASE_AUTH.currentUser;

  const stats = [
    {
      name: "Lifetime Sessions",
      postFix: "🚀",
    },
    {
      name: "Streak",
      postFix: "🔥",
    },
    {
      name: "Distance Ran",
      postFix: "KM",
    },
    {
      name: "Gym Workouts",
    },
  ];

  const navigation = useNavigation();

  const navigateToAddWorkout = () => {
    navigation.navigate("AddWorkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hi {user.displayName}, </Text>
      <Text style={styles.title}>What are you working on today? </Text>
      <Text style={styles.date}>{dayjs().format("MMMM D, YYYY")}</Text>
      <Button
        style={styles.btn}
        text={"+ New Workout"}
        onPress={navigateToAddWorkout}
      />
      <View style={styles.boxContainer}>
        {stats.map((stat) => (
          <Box key={stat.name} style={styles.box}>
            <Text>{stat.name}</Text>
            <Text>DATA {stat.postFix}</Text>
          </Box>
        ))}
        <Text style={styles.title}>Past Workouts</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
