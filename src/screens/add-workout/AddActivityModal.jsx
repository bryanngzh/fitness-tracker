import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { Button } from "../../components";
import styles from "./AddActivityModal.style";

const AddActivityModal = ({
  activity,
  handleActivityChange,
  handleAddActivity,
  isVisible,
  onClose,
}) => {
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
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New Activity</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
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
          {activity.type == "Gym"
            ? gymFields.map(({ label, field, placeholder, keyboardType }) => (
                <TextInput
                  key={field}
                  style={styles.input}
                  placeholder={placeholder}
                  value={activity[field]}
                  onChangeText={(value) => handleActivityChange(field, value)}
                  keyboardType={keyboardType}
                />
              ))
            : activity.type == "Running"
            ? runFields.map(({ label, field, placeholder, keyboardType }) => (
                <TextInput
                  key={field}
                  style={styles.input}
                  placeholder={placeholder}
                  value={activity[field]}
                  onChangeText={(value) => handleActivityChange(field, value)}
                  keyboardType={keyboardType}
                />
              ))
            : null}
          <Button text="Add Activity" onPress={handleAddActivity} />
        </View>
      </View>
    </Modal>
  );
};

export default AddActivityModal;
