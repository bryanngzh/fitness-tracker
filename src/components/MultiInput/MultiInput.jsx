import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import styles from "./MultiInput.style";

const MultiInput = ({ data, form, setForm }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { label, field, placeholder, keyboardType, secureTextEntry, type } =
    data;

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.date;
    setShowDatePicker(false);
    setForm({ ...form, date: currentDate });
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return type === "DateInput" ? (
    <View key={label}>
      <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
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
  );
};

export default MultiInput;
