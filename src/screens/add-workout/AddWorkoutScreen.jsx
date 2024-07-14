import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components";
import { FIREBASE_AUTH } from "../../configs/firebase";
import { COLOURS } from "../../constants/theme";
import styles from "./AddWorkoutScreen.style";

const AddWorkoutScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    date: new Date(),
    duration: "",
    activities: [],
    createdBy: user.email,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.date;
    setShowDatePicker(false);
    setForm({ ...form, date: currentDate });
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
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
    <View style={styles.container}>
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
        <Button colour={COLOURS.GREEN} text="Add New Activity" />
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          colour={COLOURS.RED}
          text="Cancel"
          onPress={() => navigation.navigate("Home")}
        />
        <Button style={styles.btn} text="Save" />
      </View>
    </View>
  );
};

export default AddWorkoutScreen;
