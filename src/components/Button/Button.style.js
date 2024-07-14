import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/theme";

const styles = StyleSheet.create({
  btnContainer: (colour) => ({
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colour || COLOURS.BLUE,
  }),
  btnText: {
    color: "white",
  },
});

export default styles;
