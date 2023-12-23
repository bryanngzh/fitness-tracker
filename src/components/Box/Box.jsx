import React from "react";
import { View } from "react-native";
import styles from "./Box.style";

const Box = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Box;
