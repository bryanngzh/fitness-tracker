import React from "react";
import { View } from "react-native";
import styles from "./Box.style";

const Box = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Box;
