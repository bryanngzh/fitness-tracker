import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Button } from "../../components";
import { apiConfig } from "../../configs/api";
import { FIREBASE_AUTH } from "../../configs/firebase";
import { COLOURS } from "../../constants/theme";
import styles from "./ProfileScreen.style";

const ProfileScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const [account, setAccount] = useState({
    name: "",
    email: "",
  });

  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  const fetchAccount = async () => {
    try {
      const response = await axios.get(
        `${apiConfig.apiUrl}/users?email=${user.email}`
      );
      setAccount(response.data);
    } catch (error) {
      console.error("Error fetching user account: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchAccount();
    }, [])
  );

  const details = [
    {
      info: "email",
      icon: "email",
    },
    {
      info: "gender",
      icon: "account",
    },
    {
      info: "height",
      icon: "human-male-height",
    },
    {
      info: "weight",
      icon: "weight",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Image
            source={require("../../assets/default-pfp.jpeg")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>{user.displayName}</Text>
      </View>
      <Box style={styles.box}>
        {details.map((detail) => (
          <View key={detail.info} style={styles.textContainer}>
            <MaterialIcon name={detail.icon} size={20} />
            <Text style={styles.infoText}>{account[detail.info]}</Text>
          </View>
        ))}
      </Box>
      <Button text={"Log Out"} colour={COLOURS.RED} onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
