import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
  },
  title: {
    marginTop: 16,
    fontSize: SIZES.LARGE,
    fontFamily: "Title-Bold",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
  },
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    marginBottom: 40,
  },
  btn: {
    width: "48%",
  },
});

export default styles;
