import React from "react";
import { Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Box from "../Box/Box";
import styles from "./ActivityBox.style";

const ActivityBox = ({ activity }) => {
  const isRunning = activity.type === "Running";

  return (
    <Box key={activity.name} style={styles.activityBox}>
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
      <MaterialIcon name="delete" size={20} style={styles.trashIcon} />
    </Box>
  );
};

export default ActivityBox;
