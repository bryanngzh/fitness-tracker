import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: (colour) => ({
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colour || COLOURS.BLUE,
    marginBottom: 16,
  }),
  btnText: {
    color: "white",
  },
});

export default styles;
