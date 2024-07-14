import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Box from "../Box/Box";
import styles from "./ActivityBox.style";

const ActivityBox = ({ activity, additionalStyle, onPress, index }) => {
  const isRunning = activity.type === "Running";
  const combinedStyles = StyleSheet.compose(
    styles.activityBox,
    additionalStyle
  );

  return (
    <Box key={activity.name} style={combinedStyles}>
      <MaterialIcon
        style={styles.icon}
        name={isRunning ? "run" : "weight-lifter"}
        size={20}
      />
      <View>
        <Text style={styles.activityName}>{activity.name}</Text>
        {isRunning ? (
          <>
            <Text style={styles.activityDetail}>{activity.distance}km</Text>
            <Text style={styles.activityDetail}>{activity.timing}mins</Text>
          </>
        ) : (
          <>
            <Text style={styles.activityDetail}>{activity.weight}kg</Text>
            <Text style={styles.activityDetail}>
              {activity.sets}x{activity.reps}
            </Text>
          </>
        )}
      </View>
      {onPress && (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => onPress(index)}>
            <MaterialIcon name="delete" size={20} style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      )}
    </Box>
  );
};

export default ActivityBox;
