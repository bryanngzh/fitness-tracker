import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ActivityBox from "../ActivityBox/ActivityBox";
import Box from "../Box/Box";
import styles from "./WorkoutDropdown.style";

const WorkoutDropdown = ({ workout, handleDelete, id, index }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const [showActivity, setShowActivity] = useState(false);

  return (
    <View>
      <Box key={workout.name} style={styles.workoutBox}>
        <MaterialIcon style={styles.icon} name={"weight-kilogram"} size={20} />
        <View>
          <Text style={styles.workoutName}>{workout.name}</Text>
          <Text style={styles.workoutDetail}>
            {formatDate(new Date(workout.date))}
          </Text>
          <Text style={styles.workoutDetail}>{workout.duration}mins</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setShowActivity(!showActivity)}>
            <MaterialIcon
              name={showActivity ? "chevron-up" : "chevron-down"}
              size={20}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(id, index)}>
            <MaterialIcon name="delete" size={20} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </Box>
      {showActivity &&
        workout.activities.map((activity, index) => (
          <ActivityBox
            key={index}
            activity={activity}
            additionalStyle={styles.activityBox}
          />
        ))}
    </View>
  );
};

export default WorkoutDropdown;
