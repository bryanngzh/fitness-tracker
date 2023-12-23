import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Button } from "../../components";
import { FIREBASE_AUTH } from "../../configs/firebase";
import { COLOURS } from "../../constants/theme";
import styles from "./ProfileScreen.style";

const ProfileScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const isFocused = useIsFocused();
  const [account, setAccount] = useState({
    name: "",
    email: "",
  });

  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  useEffect(() => {
    if (isFocused) {
      const fetchAccount = async () => {
        try {
          const response = await axios.get(
            `http://192.168.86.171:3000/users?email=${user.email}`
          );
          setAccount(response.data);
        } catch (error) {
          console.error("Error fetching user account: ", error);
        }
      };

      fetchAccount();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Image
            source={require("../../assets/default-pfp.jpeg")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>{account.name}</Text>
      </View>
      <Box>
        <View style={styles.textContainer}>
          <MaterialIcon name={"account"} size={"20"} />
          <Text style={styles.infoText}>{account.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <MaterialIcon name={"email"} size={"20"} />
          <Text style={styles.infoText}>{account.email}</Text>
        </View>
      </Box>
      <Button text={"Log Out"} colour={COLOURS.RED} onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
