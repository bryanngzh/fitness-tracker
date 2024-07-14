import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  workoutBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  workoutDetail: {
    fontSize: 14,
    color: "#666",
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  rightIcon: {
    marginLeft: 10,
  },
  activityBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 0,
  },
});

export default styles;
