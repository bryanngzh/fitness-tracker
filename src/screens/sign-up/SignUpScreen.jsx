import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../../configs/firebase";
import styles from "./SignUpScreen.style";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
        <TouchableOpacity onPress={handleSignUp} style={styles.btnContainer}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
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
