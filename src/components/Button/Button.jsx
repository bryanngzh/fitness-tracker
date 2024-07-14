import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ text, onPress, colour, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer(colour), style]}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
