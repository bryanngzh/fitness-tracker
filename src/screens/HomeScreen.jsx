import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../configs/firebase";

const HomeScreen = () => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
