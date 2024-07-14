import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  activityBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
  },
  activityName: {
    fontWeight: "bold",
  },
  activityDetail: {
    marginTop: 2,
  },
  trashIcon: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: "auto",
  },
});

export default styles;
