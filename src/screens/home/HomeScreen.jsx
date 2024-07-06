import dayjs from "dayjs";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../configs/firebase";
import styles from "./HomeScreen.style";

const HomeScreen = () => {
  const user = FIREBASE_AUTH.currentUser;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back, {user.displayName}</Text>
      <Text style={styles.date}>{dayjs().format("MMMM D, YYYY")}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
