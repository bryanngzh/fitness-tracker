import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components";
import { apiConfig } from "../../configs/api";
import { FIREBASE_AUTH } from "../../configs/firebase";
import { COLOURS } from "../../constants/theme";
import styles from "./SignUpScreen.style";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        return FIREBASE_AUTH.signOut()
          .then(() => {
            // Setting display name for the user
            return updateProfile(userCredential.user, {
              displayName: name,
            });
          })
          .then(() => {
            // Once display name is updated, make an axios POST request to your server
            return axios.post(`${apiConfig.apiUrl}/users/`, {
              email: email,
              name: name,
            });
          });
      })
      .then(() => {
        console.log("User signed up successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FitnessTracker</Text>
        <Text style={styles.description}>
          Sign up to start your fitness journey today!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button colour={COLOURS.BLUE} onPress={handleSignUp} text={"Sign Up"} />
      </View>
      <View style={styles.logInContainer}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
