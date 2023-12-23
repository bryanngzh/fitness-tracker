import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ text, onPress, colour }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnContainer(colour)}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
