import { Picker } from "@react-native-picker/picker";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    height: "",
    weight: "",
  });

  const formFields = [
    {
      label: "Name",
      field: "name",
      placeholder: "Name",
      keyboardType: "default",
      secureTextEntry: false,
    },
    {
      label: "Email",
      field: "email",
      placeholder: "Email",
      keyboardType: "email-address",
      secureTextEntry: false,
    },
    {
      label: "Password",
      field: "password",
      placeholder: "Password",
      keyboardType: "default",
      secureTextEntry: true,
    },
    {
      label: "Height",
      field: "height",
      placeholder: "Height (cm)",
      keyboardType: "numeric",
      secureTextEntry: false,
    },
    {
      label: "Weight",
      field: "weight",
      placeholder: "Weight (kg)",
      keyboardType: "numeric",
      secureTextEntry: false,
    },
  ];

  const genders = [
    {
      label: "Select Gender",
      value: "",
    },
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];

  const handleInputChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, form.email, form.password)
      .then((userCredential) => {
        return FIREBASE_AUTH.signOut()
          .then(() => {
            // Setting display name for the user
            return updateProfile(userCredential.user, {
              displayName: form.name,
            });
          })
          .then(() => {
            // Once display name is updated, make an axios POST request to your server
            return axios.post(`${apiConfig.apiUrl}/users/`, {
              email: form.email,
              name: form.name,
              gender: form.gender,
              height: form.height,
              weight: form.weight,
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
        {formFields.map(
          ({ label, field, placeholder, keyboardType, secureTextEntry }) => (
            <TextInput
              key={field}
              style={styles.input}
              placeholder={placeholder}
              value={form[field]}
              onChangeText={(value) => handleInputChange(field, value)}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={field === "name" ? "words" : "none"}
            />
          )
        )}
        <View style={styles.pickerBorder}>
          <Picker
            selectedValue={form.gender}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              handleInputChange("gender", itemValue)
            }
          >
            {genders.map(({ label, value }) => (
              <Picker.Item
                style={styles.pickerItem}
                key={label}
                label={label}
                value={value}
              />
            ))}
          </Picker>
        </View>
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
