import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Box, Button } from "../../components";
import WorkoutDropdown from "../../components/WorkoutDropdown/WorkoutDropdown";
import { apiConfig } from "../../configs/api";
import { FIREBASE_AUTH } from "../../configs/firebase";
import styles from "./HomeScreen.style";

const HomeScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const [data, setData] = useState({
    sessions: "0",
    streak: "0",
    distance: "0",
    gym: "0",
    workouts: [],
  });

  const fetchAccount = async () => {
    try {
      const response = await axios.get(
        `${apiConfig.apiUrl}/workout?email=${user.email}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching user account: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchAccount();
    }, [])
  );

  const stats = [
    {
      name: "Lifetime Sessions",
      value: data.sessions,
      postFix: "🚀",
    },
    {
      name: "Streak",
      value: data.streak,
      postFix: "🔥",
    },
    {
      name: "Distance Ran",
      value: data.distance,
      postFix: "KM",
    },
    {
      name: "Gym Workouts",
      value: data.gym,
    },
  ];

  const navigation = useNavigation();

  const navigateToAddWorkout = () => {
    navigation.navigate("AddWorkout");
  };

  const handleDeleteWorkout = async (id, index) => {
    try {
      await axios.delete(`${apiConfig.apiUrl}/workout?id=${id}`);
      setData({
        ...data,
        workouts: data.workouts.filter((_, i) => i !== index),
      });
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            <Text style={styles.stats}>
              {stat.value ? stat.value : 0} {stat.postFix}
            </Text>
          </Box>
        ))}
      </View>
      <Text style={styles.title}>Past Workouts</Text>
      {data.workouts.length > 0 ? (
        data.workouts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map((workout, index) => (
            <WorkoutDropdown
              key={workout.name + index}
              workout={workout}
              handleDelete={handleDeleteWorkout}
              id={workout.id}
              index={index}
            />
          ))
      ) : (
        <Text>No workouts to show</Text>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
