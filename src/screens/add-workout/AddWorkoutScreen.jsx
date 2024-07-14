import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Button } from "../../components";
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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.date;
    setShowDatePicker(false);
    setForm({ ...form, date: currentDate });
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

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

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
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

  const gymFields = [
    {
      label: "Weight",
      field: "weight",
      placeholder: "Weight",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
    {
      label: "Repetitions",
      field: "reps",
      placeholder: "Repetitions",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
    {
      label: "Sets",
      field: "sets",
      placeholder: "Sets",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
  ];

  const runFields = [
    {
      label: "Distance",
      field: "distance",
      placeholder: "Distance (km)",
      keyboardType: "default",
      secureTextEntry: false,
      type: "TextInput",
    },
    {
      label: "Timing",
      field: "timing",
      placeholder: "Timing (mins)",
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
          {formFields.map(
            ({
              label,
              field,
              placeholder,
              keyboardType,
              secureTextEntry,
              type,
            }) =>
              type === "DateInput" ? (
                <View key={field}>
                  <TouchableWithoutFeedback
                    onPress={() => setShowDatePicker(true)}
                  >
                    <View>
                      <TextInput
                        style={styles.input}
                        placeholder="Date"
                        value={formatDate(form.date)}
                        editable={false}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  {showDatePicker && (
                    <DateTimePicker
                      value={form.date}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                </View>
              ) : (
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
          <Text style={styles.title}>Activities</Text>
          <Button
            colour={COLOURS.GREEN}
            text="Add New Activity"
            onPress={onModalOpen}
          />
          {form.activities &&
            form.activities.map((activity) =>
              activity.type == "Running" ? (
                <Box key={activity.name} style={styles.activityBox}>
                  <MaterialIcon style={styles.icon} name={"run"} size={20} />
                  <View>
                    <Text style={styles.activityName}>{activity.name}</Text>
                    <Text style={styles.activityDetail}>
                      {activity.distance}km
                    </Text>
                    <Text style={styles.activityDetail}>
                      {activity.timing}mins
                    </Text>
                  </View>
                  <MaterialIcon
                    name="delete"
                    size={20}
                    style={styles.trashIcon}
                  />
                </Box>
              ) : (
                <Box key={activity.name} style={styles.activityBox}>
                  <MaterialIcon
                    style={styles.icon}
                    name={"weight-lifter"}
                    size={20}
                  />
                  <View>
                    <Text style={styles.activityName}>{activity.name}</Text>
                    <Text style={styles.activityDetail}>
                      {activity.weight}kg
                    </Text>
                    <Text style={styles.activityDetail}>
                      {activity.sets}x{activity.reps}
                    </Text>
                  </View>
                  <MaterialIcon
                    name="delete"
                    size={20}
                    style={styles.trashIcon}
                  />
                </Box>
              )
            )}
          <AddActivityModal isVisible={isModalVisible} onClose={onModalClose}>
            <View style={styles.modalBox}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={activity.name}
                onChangeText={(value) => handleActivityChange("name", value)}
              />
              <View style={styles.pickerBorder}>
                <Picker
                  selectedValue={activity.type}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    handleActivityChange("type", itemValue)
                  }
                >
                  <Picker.Item
                    style={styles.pickerItem}
                    key={"Type"}
                    label={"Type"}
                    value={""}
                  />
                  <Picker.Item
                    style={styles.pickerItem}
                    key={"Gym"}
                    label={"Gym"}
                    value={"Gym"}
                  />
                  <Picker.Item
                    style={styles.pickerItem}
                    key={"Running"}
                    label={"Running"}
                    value={"Running"}
                  />
                </Picker>
              </View>
              {activity.type == "Gym" ? (
                gymFields.map(
                  ({
                    label,
                    field,
                    placeholder,
                    keyboardType,
                    secureTextEntry,
                    type,
                  }) => (
                    <TextInput
                      key={field}
                      style={styles.input}
                      placeholder={placeholder}
                      value={activity[field]}
                      onChangeText={(value) =>
                        handleActivityChange(field, value)
                      }
                      keyboardType={keyboardType}
                      secureTextEntry={secureTextEntry}
                    />
                  )
                )
              ) : activity.type == "Running" ? (
                runFields.map(
                  ({
                    label,
                    field,
                    placeholder,
                    keyboardType,
                    secureTextEntry,
                    type,
                  }) => (
                    <TextInput
                      key={field}
                      style={styles.input}
                      placeholder={placeholder}
                      value={activity[field]}
                      onChangeText={(value) =>
                        handleActivityChange(field, value)
                      }
                      keyboardType={keyboardType}
                      secureTextEntry={secureTextEntry}
                    />
                  )
                )
              ) : (
                <></>
              )}
              <Button text="Add Activity" onPress={handleAddActivity} />
            </View>
          </AddActivityModal>
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
