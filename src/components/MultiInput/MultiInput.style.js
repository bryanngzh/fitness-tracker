import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: COLOURS.GRAY,
    marginBottom: 16,
    color: COLOURS.BLACK,
  },
});

export default styles;
