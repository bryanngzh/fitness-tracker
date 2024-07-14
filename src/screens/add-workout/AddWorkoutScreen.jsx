import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../components";
import ActivityBox from "../../components/ActivityBox/ActivityBox";
import MultiInput from "../../components/MultiInput/MultiInput";
import { apiConfig } from "../../configs/api";
import { FIREBASE_AUTH } from "../../configs/firebase";
import { COLOURS } from "../../constants/theme";
import AddActivityModal from "./AddActivityModal";
import styles from "./AddWorkoutScreen.style";

const AddWorkoutScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation();

  const navigateHome = () => navigation.navigate("Home");

  const [form, setForm] = useState({
    name: "",
    date: new Date(),
    duration: "",
    activities: [],
    createdBy: user.email,
  });

  const [activity, setActivity] = useState({
    name: "",
    type: "",
    weight: "",
    reps: "",
    sets: "",
    distance: "",
    timing: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleActivityChange = (field, value) => [
    setActivity({ ...activity, [field]: value }),
  ];

  const handleAddActivity = () => {
    if (activity.type == "Gym") {
      form.activities.push({
        name: activity.name,
        type: activity.type,
        weight: activity.weight,
        reps: activity.reps,
        sets: activity.sets,
      });
    } else if (activity.type == "Running") {
      form.activities.push({
        name: activity.name,
        type: activity.type,
        distance: activity.distance,
        timing: activity.timing,
      });
    }
    setActivity({
      name: "",
      type: "",
      weight: "",
      reps: "",
      sets: "",
      distance: "",
      timing: "",
    });
  };

  const handleAddWorkout = () => {
    return axios
      .post(`${apiConfig.apiUrl}/workout/`, {
        name: form.name,
        date: form.date,
        duration: form.duration,
        activities: form.activities,
        createdBy: form.createdBy,
      })
      .then(() => {
        setForm({
          name: "",
          date: new Date(),
          duration: "",
          activities: [],
          createdBy: user.email,
        });
      })
      .then(navigateHome());
  };

  const onModalOpen = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const formFields = [
    {
      label: "Name",
      field: "name",
      placeholder: "Name",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
    {
      label: "Date",
      field: "date",
      placeholder: "Date",
      type: "DateInput",
    },
    {
      label: "Duration",
      field: "duration",
      placeholder: "Duration (mins)",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>New Workout</Text>
          {formFields.map((data) => (
            <MultiInput
              key={data.label}
              data={data}
              form={form}
              setForm={setForm}
            />
          ))}
          <Text style={styles.title}>Activities</Text>
          <Button
            colour={COLOURS.BLUE}
            text="Add New Activity"
            onPress={onModalOpen}
          />
          {form.activities &&
            form.activities.map((activity, index) => (
              <ActivityBox key={activity.name + index} activity={activity} />
            ))}
          <AddActivityModal
            activity={activity}
            handleActivityChange={handleActivityChange}
            handleAddActivity={handleAddActivity}
            isVisible={isModalVisible}
            onClose={onModalClose}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          colour={COLOURS.RED}
          text="Cancel"
          onPress={navigateHome}
        />
        <Button style={styles.btn} text="Save" onPress={handleAddWorkout} />
      </View>
    </View>
  );
};

export default AddWorkoutScreen;
